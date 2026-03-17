import type { Metadata } from "next";
import CategoryPage from "./CategoryPage";

type CatParams = { cat: string };

type PageProps = {
    params: { cat: string };
};

const format = (cat: string) =>
    cat
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { cat } = await params;

    const url = `https://devcharles.com/blog/category/${cat}`;

    return {
        title: `${format(cat)} | DevCharles`,

        description: `Read articles from my blog based on ${format(cat)}`,

        alternates: {
            canonical: url,
        },

        keywords: [format(cat)],

        authors: [{ name: "Charles Ukasoanya", url: "https://devcharles.com" }],
        creator: "Charles Ukasoanya",
        publisher: "DevCharles",

        category: format(cat),
    };
}

export default async function Page({
    searchParams,
    params,
}: {
    searchParams: any;
    params: CatParams;
}) {
    return <CategoryPage searchParams={searchParams} params={params} />;
}
