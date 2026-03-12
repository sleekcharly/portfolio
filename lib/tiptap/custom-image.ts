"use client"
// Custom Image Extension

import { ImageExtension } from "@harshtalks/image-tiptap";
import type { DOMOutputSpec } from "@tiptap/pm/model";

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const attrs = HTMLAttributes as Record<string, any>;

    const caption = (attrs.caption ?? "").toString();
    const width = (attrs.width ?? "100%").toString();
    const alignment = (attrs["data-alignment"] ?? "center").toString();

    const { style, ...imgAttrs } = attrs;

    const alt = attrs.alt || caption || "";

    imgAttrs.alt = alt;

    if (!imgAttrs.alt) {
      delete imgAttrs.alt;
    }

    const img: DOMOutputSpec = [
      "img",
      {
        ...imgAttrs,
        loading: "lazy",
        style: `width:${width};`,
        class: "tiptap-image",
      },
    ];

    if (!caption.trim()) {
      return img;
    }

    return [
      "figure",
      { class: `tiptap-figure tiptap-align-${alignment}` },
      img,
      ["figcaption", { class: "tiptap-caption" }, caption],
    ];
  },
});