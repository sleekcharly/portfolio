import React from "react";
import PostPage from "./PostPage";
import { getPostBySlug, getRandomRelatedPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { formattedDate } from "@/utils/server";

const page = async ({
    params,
}: {
    params?: { slug?: string } | Promise<{ slug?: string }>;
}) => {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug ?? "";

    const post = await getPostBySlug(slug);

    if (!post) notFound();

    const relatedPosts = await getRandomRelatedPosts(post.categories, post.id);

    const formatted = formattedDate(post.createdAt);

    return (
        <div>
            <PostPage
                post={post}
                relatedPosts={relatedPosts}
                formattedDate={formatted}
            />
        </div>
    );
};

export default page;
