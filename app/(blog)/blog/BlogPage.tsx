import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import BlogCard from "./BlogCard";
import FeaturedPost from "./FeaturedPost";

const POSTS_PER_PAGE = 11;

async function getPosts(page: number) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}&limit=${POSTS_PER_PAGE}`,
        { cache: "no-store" }
    );

    return res.json(); // {posts, total}
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    // const currentPage = Number(searchParams.page ?? 1);

    // const { posts, total } = await getPosts(currentPage);
    // const totalPages = Math.ceil(total / POSTS_PER_PAGE);

    return (
        <div className="flex flex-col gap-10">
            {/* Blog Feature */}
            <FeaturedPost />

            {/* Other blog posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Blog post */}
                <BlogCard />
            </div>

            {/* Pagination */}
            {/* <Pagination className="mt-5">
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
                                totalPages
                            )}`}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination> */}
        </div>
    );
}
