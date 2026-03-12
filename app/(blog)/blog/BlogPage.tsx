import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { getPostsPage, POSTS_PER_PAGE } from "@/lib/posts";

import BlogCard from "./BlogCard";
import FeaturedPost from "./FeaturedPost";

export default async function BlogPage({
    searchParams,
}: {
    searchParams?: { page?: string } | Promise<{ page?: string }>;
}) {
    const resolvedSearchParams = await searchParams;
    const pageParam = resolvedSearchParams?.page ?? "1";
    const currentPage = Math.max(Number(pageParam) || 1, 1);

    const { posts, total } = await getPostsPage(currentPage);
    const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));

    const featuredPost = posts?.[0] ?? null;
    const otherPosts = posts?.slice(1) ?? [];

    return (
        <div className="flex flex-col gap-10">
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
                            href={`/blog?page=${Math.max(currentPage - 1, 1)}`}
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink
                                href={`/blog?page=${i + 1}`}
                                isActive={currentPage === i + 1}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            href={`/blog?page=${Math.min(
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
