import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { getPostsPage, POSTS_PER_PAGE } from "@/lib/posts";
import FeaturedPost from "../../FeaturedPost";
import BlogCard from "../../BlogCard";

type CatParams = { cat: string };

export default async function CategoryPage({
    searchParams,
    params,
}: {
    searchParams?: { page?: string } | Promise<{ page?: string }>;
    params: CatParams;
}) {
    const resolvedParams: CatParams = await params;
    const resolvedSearchParams = await searchParams;
    const pageParam = resolvedSearchParams?.page ?? "1";
    const cat = resolvedParams?.cat;

    const currentPage = Math.max(Number(pageParam) || 1, 1);

    const { posts, total } = await getPostsPage(currentPage, "", cat);
    const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));

    const featuredPost = posts?.[0] ?? null;
    const otherPosts = posts?.slice(1) ?? [];

    return (
        <div className="flex flex-col gap-10">
            {cat && (
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-500">Category</p>
                    <h1 className="text-2xl font-semibold">
                        {cat
                            .split("-")
                            .map(
                                (word) =>
                                    word.charAt(0).toUpperCase() +
                                    word.slice(1),
                            )
                            .join(" ")}
                    </h1>
                </div>
            )}
            {/* Blog Feature */}
            <FeaturedPost post={featuredPost} />

            {/* Other blog posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Blog post */}
                {otherPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination className="mt-5">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href={`/blog/category/${cat}?page=${Math.max(currentPage - 1, 1)}`}
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink
                                href={`/blog/category/${cat}?page=${i + 1}`}
                                isActive={currentPage === i + 1}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            href={`/blog/category/${cat}?page=${Math.min(
                                currentPage + 1,
                                totalPages,
                            )}`}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
