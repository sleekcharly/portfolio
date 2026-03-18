import PostPage from "./PostPage";
import { getPostBySlug, getRandomRelatedPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { formattedDate } from "@/utils/server";
import { BlogPost } from "@/lib/types";
import type { Metadata } from "next";
import { getApprovedCommentsByPostSlug } from "@/lib/comments";

type SlugParams = { slug: string };

type PageProps = {
    params: { slug: string };
};

export const revalidate = 60; // regenerate page every 60 seconds

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
        title: `${post.title} - ${post.tags[0]} | DevCharles`,
        description: post.excerpt,

        metadataBase: new URL("https://devcharles.com"),

        alternates: {
            canonical: url,
        },

        keywords: [...post.tags, ...post.categories],

        openGraph: {
            type: "article",
            title: post.title,
            description: post.excerpt,
            url,
            siteName: "devcharles.com/blog",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
                ogImage,
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            creator: "@sleekcharly",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },

        authors: [{ name: "Charles Ukasoanya", url: "https://devcharles.com" }],
        creator: "Charles Ukasoanya",
        publisher: "DevCharles",

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },

        category: post.categories[0],
    };
}

const page = async ({ params }: any) => {
    const resolvedParams: SlugParams = await params;
    const slug = resolvedParams?.slug;

    const post = await getPostBySlug(slug);

    if (!post) notFound();

    const [relatedPosts, comments] = await Promise.all([
        getRandomRelatedPosts(post.categories, post.id),
        getApprovedCommentsByPostSlug(post.slug),
    ]);

    const formatted = formattedDate(post.createdAt);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: `https://devcharles.com/api/og/${post.slug}`,
        author: {
            "@type": "Person",
            name: "Charles Ukasoanya",
            url: "https://devcharles.com",
        },
        publisher: {
            "@type": "Organization",
            name: "DevCharles",
            logo: {
                "@type": "ImageObject",
                url: "https://www.devcharles.com/images/og-image.png",
            },
        },
        datePublished: post.createdAt,
        mainEntityOfPage: `https://devcharles.com/blog/${post.slug}`,
    };

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <PostPage
                post={post}
                relatedPosts={relatedPosts}
                formattedDate={formatted}
                comments={comments}
            />
        </div>
    );
};

export default page;
