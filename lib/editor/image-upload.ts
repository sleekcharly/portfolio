"use client";

import { ImageExtension } from "@harshtalks/image-tiptap";
import type { Editor } from "@tiptap/react";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import type { DOMOutputSpec } from "@tiptap/pm/model";
import { storage } from "@/lib/firebase";

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
// export const CustomImage = ImageExtension.extend({
//   addAttributes() {
//     return {
//       ...this.parent?.(),

//       "data-alignment": { default: "center" },
//       storagePath: { default: "" },
//       caption: { default: "" },
//       alt: { default: "" },
//       width: { default: "100%" },
//     };
//   },

//   renderHTML({ HTMLAttributes }): DOMOutputSpec {
//     const attrs = HTMLAttributes as Record<string, any>;

//     const caption = (attrs.caption ?? "").toString();
//     const width = (attrs.width ?? "100%").toString();
//     const alignment = (attrs["data-alignment"] ?? "center").toString();

//     const { style, ...imgAttrs } = attrs;

//     const alt = attrs.alt || caption || "";

//   imgAttrs.alt = alt;

//   if (!imgAttrs.alt) {
//     delete imgAttrs.alt;
//   }

//   const img: DOMOutputSpec = [
//     "img",
//     {
//       ...imgAttrs,
//       loading: 'lazy',
//       style: `width:${width};`,
//       class: "tiptap-image",
//     },
//   ];

  

//   if (!caption.trim()) {
//     return img;
//   }

//   return [
//     "figure",
//     {
//       class: `tiptap-figure tiptap-align-${alignment}`,
//     },
//     img,
//     ["figcaption", { class: "tiptap-caption" }, caption],
//   ];
//   },
// });


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
