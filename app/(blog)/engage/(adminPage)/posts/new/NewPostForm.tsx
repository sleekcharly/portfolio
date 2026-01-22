"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Props = {};

export default function NewPostForm(props: Props) {
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [loading, setLoading] = useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image.configure({
                inline: false,
            }),
        ],
        content: "",
        immediatelyRender: false,
    });

    async function handlePublish() {
        if (!editor) return;

        setLoading(true);

        try {
            const content = editor.getJSON();

            await addDoc(collection(db, "posts"), {
                title,
                excerpt,
                slug: title.toLowerCase().replace(/\s+/g, "-"),
                content,
                status: "draft",
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });

            alert("Post saved as draft");
        } catch (err) {
            console.error(err);
            alert("Failed to save post");
        } finally {
            setLoading(false);
        }
    }
    return <div>NewPostForm</div>;
}
