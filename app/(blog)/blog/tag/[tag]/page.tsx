import type { Metadata } from "next";
import TagPage from "./TagPage";

type TagParams = { tag: string };

type PageProps = {
    params: { tag: string };
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { tag } = await params;

    const url = `https://devcharles.com/blog/tag/${tag}`;

    return {
        title: `${tag} | DevCharles`,

        description: `Read articles from my blog tagged ${tag}`,

        alternates: {
            canonical: url,
        },

        keywords: [tag],

        authors: [{ name: "Charles Ukasoanya", url: "https://devcharles.com" }],
        creator: "Charles Ukasoanya",
        publisher: "DevCharles",

        category: tag,
    };
}

export default async function Page({
    searchParams,
    params,
}: {
    searchParams: any;
    params: TagParams;
}) {
    return <TagPage searchParams={searchParams} params={params} />;
}
