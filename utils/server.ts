import { auth, db } from "@/lib/firebase";
import { collection, doc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";


// Formats a timestamp into a human-readable date string
export function formattedDate(date?: number | string | null) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
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


export function serializeTimestamp(
  ts?: FirebaseFirestore.Timestamp | null
): string | null {
  if (!ts) return null
  return ts.toDate().toISOString()
}