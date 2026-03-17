"use client";

import { useEditor, EditorContent, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import type { Editor } from "@tiptap/react";
import { useState, useEffect, useRef } from "react";
import {
    collection,
    serverTimestamp,
    getDocs,
    getDoc,
    doc,
    setDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import "./styles.scss";
import { ImageIcon, XCircleIcon } from "lucide-react";
import {
    deleteSelectedImage,
    replaceImage,
    uploadBlogImage,
} from "@/lib/editor/image-upload";
import { generateUniqueSlug } from "@/utils/server";
import { useRouter } from "next/navigation";
import { CustomImage } from "@/lib/tiptap/custom-image";

// Category type definition
type Category = {
    id: string;
    name: string;
    slug: string;
};

// Menu bar component for text formatting
function MenuBar({ editor }: { editor: Editor }) {
    // Read the current editor's state, and re-render the component when it changes
    const editorState = useEditorState({
        editor,
        selector: (ctx) => {
            return {
                isBold: ctx.editor.isActive("bold") ?? false,
                canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
                isItalic: ctx.editor.isActive("italic") ?? false,
                canItalic:
                    ctx.editor.can().chain().toggleItalic().run() ?? false,
                isStrike: ctx.editor.isActive("strike") ?? false,
                canStrike:
                    ctx.editor.can().chain().toggleStrike().run() ?? false,
                isCode: ctx.editor.isActive("code") ?? false,
                canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
                canClearMarks:
                    ctx.editor.can().chain().unsetAllMarks().run() ?? false,
                isParagraph: ctx.editor.isActive("paragraph") ?? false,
                isHeading1:
                    ctx.editor.isActive("heading", { level: 1 }) ?? false,
                isHeading2:
                    ctx.editor.isActive("heading", { level: 2 }) ?? false,
                isHeading3:
                    ctx.editor.isActive("heading", { level: 3 }) ?? false,
                isHeading4:
                    ctx.editor.isActive("heading", { level: 4 }) ?? false,
                isHeading5:
                    ctx.editor.isActive("heading", { level: 5 }) ?? false,
                isHeading6:
                    ctx.editor.isActive("heading", { level: 6 }) ?? false,
                isBulletList: ctx.editor.isActive("bulletList") ?? false,
                isOrderedList: ctx.editor.isActive("orderedList") ?? false,
                isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
                isBlockquote: ctx.editor.isActive("blockquote") ?? false,
                canUndo: ctx.editor.can().chain().undo().run() ?? false,
                canRedo: ctx.editor.can().chain().redo().run() ?? false,
            };
        },
    });

    return (
        <div className="control-group">
            <div className="button-group flex flex-wrap gap-2 mb-4 text-sm">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editorState.canBold}
                    className={`${
                        editorState.isBold
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={`${
                        editorState.isItalic
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={`${
                        editorState.isStrike
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    Strike
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={`${
                        editorState.isCode
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    Code
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                    className="bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900 font-semibold px-1 border border-gray-400 rounded-md cursor-pointer"
                >
                    Clear marks
                </button>
                <button
                    onClick={() => editor.chain().focus().clearNodes().run()}
                    className="bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900 font-semibold px-1 border border-gray-400 rounded-md cursor-pointer"
                >
                    Clear nodes
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`${
                        editorState.isParagraph
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    Paragraph
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className={`${
                        editorState.isHeading1
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    H1
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className={`${
                        editorState.isHeading2
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    H2
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                    className={`${
                        editorState.isHeading3
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    H3
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 4 }).run()
                    }
                    className={`${
                        editorState.isHeading4
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bbg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    H4
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 5 }).run()
                    }
                    className={`${
                        editorState.isHeading5
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    H5
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 6 }).run()
                    }
                    className={`${
                        editorState.isHeading6
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    H6
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className={`${
                        editorState.isBulletList
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    Bullet list
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    className={`${
                        editorState.isOrderedList
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    Ordered list
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleCodeBlock().run()
                    }
                    className={`${
                        editorState.isCodeBlock
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer `}
                >
                    Code block
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                    className={`${
                        editorState.isBlockquote
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900"
                    }  font-semibold px-1 border border-gray-400 rounded-md cursor-pointer`}
                >
                    Blockquote
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().setHorizontalRule().run()
                    }
                    className="bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900 font-semibold px-1 border border-gray-400 rounded-md cursor-pointer"
                >
                    Horizontal rule
                </button>
                <button
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                    className="bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900 font-semibold px-1 border border-gray-400 rounded-md cursor-pointer"
                >
                    Hard break
                </button>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editorState.canUndo}
                    className="bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900 font-semibold px-1 border border-gray-400 rounded-md cursor-pointer"
                >
                    Undo
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editorState.canRedo}
                    className="bg-gray-100 dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900font-semibold px-1 border border-gray-400 rounded-md mr-1 cursor-pointer"
                >
                    Redo
                </button>
            </div>
        </div>
    );
}

// Image resize controls component
const ImageResizeControls = ({ editor }: { editor: Editor }) => {
    if (!editor) return null;

    const isImageSelected = editor.isActive("image");
    if (!isImageSelected) return null;

    const setWidth = (width: string) => {
        const attrs = editor.getAttributes("image"); // preserve
        editor
            .chain()
            .updateAttributes("image", { ...attrs, width })
            .run();
    };

    return (
        <div className="flex flex-wrap items-center gap-2 border border-gray-300 rounded-md p-2 bg-white">
            <span className="text-sm font-medium text-gray-700">
                Image size:
            </span>

            {["25%", "50%", "75%", "100%"].map((size) => (
                <button
                    key={size}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()} // important
                    onClick={(e) => {
                        e.stopPropagation();
                        setWidth(size);
                    }}
                    className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                >
                    {size}
                </button>
            ))}

            <input
                type="number"
                min={10}
                max={100}
                placeholder="Custom"
                className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                onChange={(e) => setWidth(`${e.target.value}%`)}
            />
        </div>
    );
};

// Caption + Alt text editor (inline, clean UI)
const ImageMetaControls = ({ editor }: { editor: Editor }) => {
    const [alt, setAlt] = useState("");
    const [caption, setCaption] = useState("");

    useEffect(() => {
        if (!editor) return;

        const sync = () => {
            const attrs = editor.getAttributes("image");
            setAlt(attrs.alt ?? "");
            setCaption(attrs.caption ?? "");
        };

        sync();
        editor.on("selectionUpdate", sync);
        editor.on("transaction", sync);

        return () => {
            editor.off("selectionUpdate", sync);
            editor.off("transaction", sync);
        };
    }, [editor]);

    if (!editor || !editor.isActive("image")) return null;

    const update = (key: "alt" | "caption", value: string) => {
        const attrs = editor.getAttributes("image");
        editor
            .chain()
            .updateAttributes("image", { ...attrs, [key]: value })
            .run();
    };

    const stopEditorHijack = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-2 bg-white">
            <input
                type="text"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                placeholder="Alt text (for SEO & accessibility)"
                value={alt}
                onMouseDownCapture={stopEditorHijack}
                onClickCapture={stopEditorHijack}
                onKeyDownCapture={stopEditorHijack}
                onChange={(e) => {
                    setAlt(e.target.value);
                    update("alt", e.target.value);
                }}
            />

            <input
                type="text"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                placeholder="Image caption"
                value={caption}
                onMouseDownCapture={stopEditorHijack}
                onClickCapture={stopEditorHijack}
                onKeyDownCapture={stopEditorHijack}
                onChange={(e) => {
                    setCaption(e.target.value);
                    update("caption", e.target.value);
                }}
            />
        </div>
    );
};

// image action buttons (replace + delete)
const ImageActionButtons = ({ editor }: { editor: Editor }) => {
    if (!editor || !editor.isActive("image")) return null;

    return (
        <div className="flex gap-2 border border-gray-300 rounded-md p-2 bg-white">
            <label className="px-2 py-1 text-sm border border-gray-300 rounded cursor-pointer hover:bg-gray-100">
                Replace
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) =>
                        e.target.files &&
                        replaceImage(editor, e.target.files[0])
                    }
                />
            </label>

            <button
                type="button"
                onClick={() => deleteSelectedImage(editor)}
                className="px-2 py-1 text-sm border border-red-400 text-red-600 rounded hover:bg-red-50"
            >
                Delete
            </button>
        </div>
    );
};

// Function to set image alignment
function setImageAlignment(
    editor: Editor,
    alignment: "left" | "center" | "right",
) {
    const attrs = editor.getAttributes("image");

    editor
        .chain()
        .updateAttributes("image", {
            ...attrs,
            "data-alignment": alignment,
        })
        .run();
}

// New post form component
export default function NewPostForm({
    postId: initialPostId,
}: {
    postId?: string;
}) {
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [loading, setLoading] = useState(false);
    const [allCategories, setAllCategories] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [postId, setPostId] = useState<string | null>(initialPostId ?? null);
    const [isEditing, setIsEditing] = useState(!!initialPostId);
    const [isDirty, setIsDirty] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [postImages, setPostImages] = useState<
        { url: string; path: string }[]
    >([]);
    const [postSlug, setPostSlug] = useState("");

    // initialize router
    const router = useRouter();

    // Image upload button
    function ImageUploadButton({ editor }: { editor: Editor }) {
        const fileInputRef = useRef<HTMLInputElement | null>(null);

        async function handleFileChange(
            e: React.ChangeEvent<HTMLInputElement>,
        ) {
            const file = e.target.files?.[0];
            if (!file || !editor) return;

            try {
                setUploading(true);
                const { url, path } = await uploadBlogImage(file);
                setUploading(false);
                editor
                    .chain()
                    .setImage({ src: url })
                    .updateAttributes("image", { storagePath: path })
                    .run();

                setPostImages((prev) => [...prev, { url, path }]);
            } catch (err) {
                console.error(err);
                alert("Image upload failed");
            } finally {
                // allow re-uploading same file
                e.target.value = "";
                setUploading(false);
            }
        }

        return (
            <>
                {/* Hidden input */}
                <label htmlFor="blog-image" className="hidden">
                    Upload Image
                </label>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    title="Upload image"
                    onChange={handleFileChange}
                    className="hidden"
                />

                {/* Clickable button */}
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="flex items-center gap-2 px-3 py-1.5
                   bg-gray-100 hover:bg-gray-200
                   border border-gray-400 rounded-md
                   text-sm font-semibold text-black max-w-3xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ImageIcon size={16} />
                    {uploading ? "Uploading..." : "Insert image"}
                </button>
            </>
        );
    }

    // Load categories from Firestore
    useEffect(() => {
        async function loadCategories() {
            const snap = await getDocs(collection(db, "categories"));
            const data = snap.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as Omit<Category, "id">),
            }));
            setAllCategories(data);
        }

        loadCategories();
    }, []);

    // Initialize the editor
    const editor = useEditor({
        extensions: [
            StarterKit,
            CustomImage.configure({
                inline: false,
            }),
            TextStyleKit,
        ],
        content: "",
        immediatelyRender: false,
        onUpdate() {
            setIsDirty(true);
        },
    });

    async function notifyGoogle() {
        try {
            const res = await fetch("/api/ping-google");
            if (!res.ok) throw new Error("Failed to ping Google");
            const data = await res.json();
            console.log("Google pinged:", data);
        } catch (err) {
            console.error(err);
        }
    }

    // get existing post
    useEffect(() => {
        async function loadPost() {
            if (!postId) return;

            try {
                const snap = await getDoc(doc(db, "posts", postId));
                if (!snap.exists()) return;

                const data = snap.data();

                setTitle(data.title || "");
                setExcerpt(data.excerpt || "");
                setSelectedCategories(data.categories || []);
                setTags(data.tags || []);
                setPostImages(data.images || []);

                // set editor content
                if (editor && data.content) {
                    editor.commands.setContent(data.content);
                }

                setIsDirty(false);
            } catch (err) {
                console.error("Failed to load post: ", err);
            }
        }

        loadPost();
    }, [postId, editor]);

    // Autosave functionality
    useEffect(() => {
        if (!editor) return;

        const interval = setInterval(async () => {
            if (!isDirty) return;
            if (!title.trim()) return;

            try {
                const content = editor.getJSON();

                const isNew = !postId;

                const ref = isNew
                    ? doc(collection(db, "posts"))
                    : doc(db, "posts", postId);

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const baseData: any = {
                    title: title.trim(),
                    excerpt: excerpt.trim(),
                    content,
                    categories: selectedCategories,
                    tags,
                    random: Math.random(),
                    status: "draft",
                    images: postImages,
                    updatedAt: serverTimestamp(),
                };

                if (isNew) {
                    baseData.createdAt = serverTimestamp();
                    baseData.slug = postSlug
                        ? postSlug
                        : await generateUniqueSlug(title.trim(), db);
                }

                await setDoc(ref, baseData, { merge: true });

                if (isNew) {
                    setPostId(ref.id);
                }

                setIsDirty(false);
                console.log("Autosaved");
            } catch (err) {
                console.error("Autosave failed: ", err);
            }
        }, 10000); // every 10 seconds

        return () => clearInterval(interval);
    }, [editor, isDirty, title, excerpt, selectedCategories, tags, postId]);

    // Handle publish or save as draft
    async function handlePublish(status: "draft" | "published") {
        if (!editor) return;

        // basic validation
        const trimmedTitle = title.trim();
        const trimmedExcerpt = excerpt.trim();
        const content = editor.getJSON();

        const hasContent = content?.content?.some(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (node: any) =>
                node.type !== "paragraph" ||
                (node.content && node.content.length > 0),
        );

        // Validation checks
        if (!trimmedTitle) {
            alert("Please enter a post title.");
            return;
        }

        if (!trimmedExcerpt) {
            alert("Please enter a post excerpt.");
            return;
        }

        if (!hasContent) {
            alert("Post content cannot be empty.");
            return;
        }

        if (!selectedCategories || selectedCategories.length === 0) {
            alert("Please select at least one category.");
            return;
        }

        setLoading(true);

        try {
            let id = postId;
            let slug: string | undefined;

            // 🔥 If post does not exist yet, create it first
            if (!id) {
                slug = postSlug
                    ? postSlug
                    : await generateUniqueSlug(trimmedTitle, db);
                const ref = doc(collection(db, "posts"));

                await setDoc(ref, {
                    title: trimmedTitle,
                    excerpt: trimmedExcerpt,
                    content,
                    categories: selectedCategories,
                    tags,
                    status,
                    slug,
                    random: Math.random(),
                    images: postImages,
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                    publishedAt:
                        status === "published" ? serverTimestamp() : null,
                    deletedAt: null,
                    deletedBy: null,
                });

                id = ref.id;
                setPostId(id);
            } else {
                await setDoc(
                    doc(db, "posts", id),
                    {
                        title: trimmedTitle,
                        excerpt: trimmedExcerpt,
                        content,
                        categories: selectedCategories,
                        tags,
                        random: Math.random(),
                        status,
                        images: postImages,
                        publishedAt:
                            status === "published" ? serverTimestamp() : null,
                        updatedAt: serverTimestamp(),
                    },
                    { merge: true },
                );
            }

            // Optional: reset form after save
            if (!isEditing) {
                setTitle("");
                setExcerpt("");
                editor.commands.clearContent();
                setSelectedCategories([]);
                setTags([]);
                setPostImages([]);
            }

            notifyGoogle();

            // ✅ Redirect to preview page
            router.push(`/engage/posts/${id}/preview`);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("Failed to publish post: ", error);

            // --- Error scenarios ---
            if (error?.code === "permission-denied") {
                alert("You are not allowed to publish posts.");
            } else if (error?.code === "unauthenticated") {
                alert("You must be signed in to publish.");
            } else if (error?.code === "unavailable") {
                alert("Network issue. Please try again.");
            } else {
                alert("Unexpected error occurred. Please retry.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-4 flex flex-col gap-6">
            {/* title */}
            <div className="border border-gray-300 rounded-md p-4 ">
                <label className="block mb-2 font-medium">Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post Title"
                    className="w-full text-lg lg:text-xl p-2 border border-gray-300 rounded-md mb-4 bg-gray-100 dark:text-gray-800"
                />
            </div>

            {/* Optional Slug */}
            <div className="border border-gray-300 rounded-md p-4 ">
                <label className="block mb-2 font-medium">
                    Hard-coded Slug
                </label>
                <input
                    value={postSlug}
                    onChange={(e) => setPostSlug(e.target.value)}
                    placeholder="Post Slug for SEO"
                    className="w-full text-lg lg:text-xl p-2 border border-gray-300 rounded-md mb-4 bg-gray-100 dark:text-gray-800"
                />
            </div>

            {/* Excerpt */}
            <div className="border border-gray-300 rounded-md p-4 ">
                <label className="block mb-2 font-medium">Excerpt</label>
                <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Short excerpt for the post"
                    className="w-full text-lg lg:text-xl p-2 border border-gray-300 rounded-md mb-4 bg-gray-100 resize-none dark:text-gray-800"
                    rows={3}
                />
            </div>

            {/* Categories */}
            <div className="border border-gray-300 rounded-md p-4">
                <label className="block mb-2 font-medium">Categories</label>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {allCategories.map((cat) => (
                        <label
                            key={cat.id}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(cat.slug)}
                                onChange={() => {
                                    setSelectedCategories((prev) =>
                                        prev.includes(cat.slug)
                                            ? prev.filter((c) => c !== cat.slug)
                                            : [...prev, cat.slug],
                                    );
                                }}
                            />
                            <span>{cat.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Blog content */}
            <div className="border border-gray-300 rounded-md p-4 flex flex-col gap-4 ">
                <label className="block mb-2 font-medium"> Blog Content</label>

                <div className="flex flex-col gap-2 p-2 border border-gray-300 rounded-md bg-white">
                    {/* Menu Bar */}
                    {editor && <MenuBar editor={editor} />}

                    {/* Image Upload */}
                    {editor && <ImageUploadButton editor={editor} />}

                    {/* Image Controls */}
                    {editor && editor.isActive("image") && (
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 border border-gray-300 rounded p-2 bg-white">
                                {(["left", "center", "right"] as const).map(
                                    (a) => (
                                        <button
                                            key={a}
                                            type="button"
                                            onMouseDown={(e) =>
                                                e.preventDefault()
                                            }
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (!editor.isActive("image"))
                                                    return;
                                                setImageAlignment(editor, a);
                                            }}
                                            className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                                        >
                                            {a.charAt(0).toUpperCase() +
                                                a.slice(1)}
                                        </button>
                                    ),
                                )}
                            </div>

                            <ImageResizeControls editor={editor} />
                            <ImageMetaControls editor={editor} />
                            <ImageActionButtons editor={editor} />
                        </div>
                    )}

                    {/* Editor Content */}
                    <div className="bg-gray-100 p-2 dark:border dark:border-gray-500 dark:text-gray-900">
                        <EditorContent editor={editor} />
                    </div>
                </div>
            </div>

            {/* Tags */}
            <div className="border border-gray-300 rounded-md p-4">
                <label className="block mb-2 font-medium">Tags</label>

                <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-purple-700 rounded-md text-sm text-white cursor-pointer flex items-center justify-between space-x-2"
                            onClick={() =>
                                setTags(tags.filter((t) => t !== tag))
                            }
                        >
                            <span>#{tag}</span> <XCircleIcon size={15} />
                        </span>
                    ))}
                </div>

                <input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && tagInput.trim()) {
                            e.preventDefault();
                            if (!tags.includes(tagInput.trim())) {
                                setTags([...tags, tagInput.trim()]);
                            }
                            setTagInput("");
                        }
                    }}
                    placeholder="Press Enter to add tag"
                    className="w-full p-2 border-gray-300 rounded-md bg-gray-100 dark:bg-gray-200 dark:text-gray-800"
                />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => handlePublish("draft")}
                    disabled={loading}
                    className="bg-black dark:bg-white dark:text-black font-semibold text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50 cursor-pointer"
                >
                    {loading ? "Saving..." : "Save as Draft"}
                </button>
                <button
                    onClick={() => handlePublish("published")}
                    disabled={loading}
                    className="bg-red-500 font-semibold text-white px-4 py-2 rounded-md hover:bg-red-800 disabled:opacity-50 cursor-pointer"
                >
                    {loading ? "Publishing..." : "Publish Post"}
                </button>
            </div>
        </div>
    );
}
