// app/(blog)/blog/page.tsx
import BlogPage from "./BlogPage";

export default async function Page({
    searchParams,
}: {
    searchParams?: { page?: string };
}) {
    return <BlogPage searchParams={searchParams} />;
}
