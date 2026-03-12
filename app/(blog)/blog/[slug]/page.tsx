import React from "react";
import PostPage from "./PostPage";
import { getPostBySlug, getRandomRelatedPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { formattedDate } from "@/utils/server";
import { BlogPost } from "@/lib/types";

type SlugParams = { slug: string };

//generateMetadata
export async function generateMetadata({ params }: any) {
    const resolvedParams: SlugParams = await params;
    const slug = resolvedParams?.slug;

    const post = (await getPostBySlug(slug)) as BlogPost;

    if (!post) return {};

    const url = `https://devcharles.com/blog/${slug}`;

    return {
        title: post.title,
        description: post.excerpt,

        metadataBase: new URL("https://devcharles.com"),

        alternatives: {
            canonical: url,
        },

        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            siteName: "devcharles.com/blog",
            images: [`${url}/opengraph-image}`],
        },

        X: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [`${url}/opengraph-image}`],
        },
    };
}

const page = async ({ params }: any) => {
    const resolvedParams: SlugParams = await params;
    const slug = resolvedParams?.slug;

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
