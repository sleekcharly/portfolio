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
export const CustomImage = ImageExtension.extend({
  addAttributes() {
    return {
      ...this.parent?.(),

      "data-alignment": { default: "center" },
      storagePath: { default: "" },
      caption: { default: "" },
      alt: { default: "" },
      width: { default: "100%" },
    };
  },

  renderHTML({ HTMLAttributes }): DOMOutputSpec {
    const attrs = HTMLAttributes as Record<string, any>;

    const caption = (attrs.caption ?? "").toString();
    const width = (attrs.width ?? "100%").toString();
    const alignment = (attrs["data-alignment"] ?? "center").toString();

    // build styles
    const figureStyle =
      alignment === "right"
        ? "text-align:right;"
        : alignment === "left"
          ? "text-align:left;"
          : "text-align:center;";

    const imgStyle = `width:${width}; display:inline-block;`;

    // IMPORTANT: keep src/alt/etc
    const { style, ...imgAttrs } = attrs;
    const mergedStyle = `${style ?? ""} ${imgStyle}`.trim();

    const img: DOMOutputSpec = [
      "img",
      {
        ...imgAttrs,
        style: mergedStyle,
      },
    ];

    // If no caption, return the img spec
    if (!caption.trim()) {
      return img;
    }

    // With caption, return figure wrapper
    return [
      "figure",
      { style: figureStyle },
      img,
      ["figcaption", { "data-caption": "true" }, caption],
    ];
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
