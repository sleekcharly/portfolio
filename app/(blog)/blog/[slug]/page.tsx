import PostPage from "./PostPage";
import { getPostBySlug, getRandomRelatedPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { formattedDate } from "@/utils/server";
import { BlogPost } from "@/lib/types";
import type { Metadata } from "next";

type SlugParams = { slug: string };

type PageProps = {
    params: { slug: string };
};

//generateMetadata
export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const post = (await getPostBySlug(slug)) as BlogPost;

    if (!post) return {};

    const url = `https://devcharles.com/blog/${slug}`;
    const ogImage = `https://devcharles.com/api/og/${slug}`;

    return {
        title: post.title,
        description: post.excerpt,

        metadataBase: new URL("https://devcharles.com"),

        alternates: {
            canonical: url,
        },

        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            siteName: "devcharles.com/blog",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                },
                ogImage,
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                },
            ],
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
