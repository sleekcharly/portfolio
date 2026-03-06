"use client";

import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import { CustomImage } from "@/lib/editor/editor-utils";
import { JSONContent } from "@tiptap/react";
import "../../new/styles.scss";

type Props = {};

const page = (props: Props) => {
    const { id } = useParams();
    const router = useRouter();

    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPost() {
            const snap = await getDoc(doc(db, "posts", id as string));
            if (!snap.exists()) return;

            setPost({ id: snap.id, ...snap.data() });
            setLoading(false);
        }

        loadPost();
    }, [id]);

    if (loading) return <p className="p-6">Loading preview...</p>;
    if (!post) return <p className="p-6">Post not found.</p>;

    const html = generateHTML(post.content as JSONContent, [
        StarterKit,
        CustomImage.configure({
            inline: false,
        }),
    ]);

    // 🔥 actions
    async function publishPost() {
        await updateDoc(doc(db, "posts", post.id), {
            status: "published",
            publishedAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });

        alert("Post published");
        router.refresh();
    }
    async function softDelete() {
        const ok = confirm("Are you sure you want to delete this post?");
        if (!ok) return;

        await updateDoc(doc(db, "posts", post.id), {
            deletedAt: serverTimestamp(),
        });

        router.push("/engage");
    }

    return (
        <div>
            <h1 className="text-lg lg:text-2xl font-bold ml-4 mb-2">
                Post Preview
            </h1>

            <Separator />

            <div className="max-w-3xl mx-auto p-6 flex flex-col gap-6">
                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() =>
                            router.push(`/engage/posts/${post.id}/edit`)
                        }
                        className="px-4 py-2 rounded bg-black text-white"
                    >
                        Edit
                    </button>

                    {post.status !== "published" && (
                        <button
                            onClick={publishPost}
                            className="px-4 py-2 rounded bg-green-600 text-white"
                        >
                            Publish
                        </button>
                    )}

                    <button
                        onClick={softDelete}
                        className="px-4 py-2 rounded bg-red-600 text-white"
                    >
                        Delete
                    </button>
                </div>

                {/* Post */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>

                    <div
                        className="tiptap"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
