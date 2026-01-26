import { auth, db, storage } from "@/lib/firebase";
import { ImageExtension } from "@harshtalks/image-tiptap";
import { collection, doc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import type { Editor } from "@tiptap/react";

// Formats a timestamp into a human-readable date string
export function formattedDate(date: number) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// Generates a URL-friendly slug from a given title
export function generateSlug(title: string) {
   return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-")     // spaces → dashes
    .replace(/-+/g, "-");     // collapse multiple dashes
}

// Generates a unique slug by checking existing slugs in the database
export async function generateUniqueSlug(title: string, db: any): Promise<string>{
  const baseSlug = generateSlug(title);
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const q = query(collection(db, "posts"), where("slug", "==", slug));

    const snapshot = await getDocs(q);

    if(snapshot.empty) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

// Soft deletes a post by setting deletedAt and deletedBy fields
export async function softDeletePost(postId: string) {
  if (!auth.currentUser) {
    alert("You must be signed in.");
    return;
  }

  try {
    await updateDoc(doc(db, "posts", postId), {
      deletedAt: serverTimestamp(),
      deletedBy: auth.currentUser.uid,
      updatedAt: serverTimestamp(),
    });

    alert("Post moved to trash.");
  } catch (err) {
    console.error(err);
    alert("Failed to delete post.");
  }
}

// Restores a soft-deleted post by clearing deletedAt and deletedBy fields
async function restorePost(postId: string) {
  await updateDoc(doc(db, "posts", postId), {
    deletedAt: null,
    deletedBy: null,
    updatedAt: serverTimestamp(),
  });
}

// Uploads a blog image to Firebase Storage and returns its download URL
type UploadResult = {
  url: string;
  path: string;
};

export async function uploadBlogImage(file: File): Promise<UploadResult> {
  const filePath = `blog-images/${crypto.randomUUID()}-${file.name}`;

  const imageRef = ref(storage, filePath);

  await uploadBytes(imageRef, file);

  const url = await getDownloadURL(imageRef);

  return {
    url,
    path: filePath,
  }
}

// Custom Image Extension
export const CustomImage = ImageExtension.extend({
  addAttributes() {
    return {
      ...this.parent?.(),

      width: {
        default: "100%",
        renderHTML: attrs => ({
          style: `width:${attrs.width}`,
        }),
      },

      align: {
        default: "center",
        renderHTML: attrs => ({
          style: `margin:${
            attrs.align === "left"
              ? "0 auto 0 0"
              : attrs.align === "right"
              ? "0 0 0 auto"
              : "0 auto"
          }`,
        }),
      },

      alt: {
        default: "",
      },

      caption: {
        default: "",
      },

      storagePath: {
        default: "",
      },
    };
  },
});

// Replace Image logic
export async function replaceImage(
  editor: Editor,
  file: File
) {

  const { url, path } = await uploadBlogImage(file);

  editor
    .chain()
    .focus()
    .updateAttributes("image", {
      src: url,
      storagePath: path,
    })
    .run();
}


// Delete image safely
export async function deleteSelectedImage(editor: Editor) {
  const attrs = editor.getAttributes("image");

  if (attrs.storagePath) {
    await deleteObject(ref(storage, attrs.storagePath));
  }

  editor.chain().focus().deleteSelection().run();
}
