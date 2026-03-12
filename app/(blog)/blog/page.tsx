// app/(blog)/blog/page.tsx
import BlogPage from "./BlogPage";

export default async function Page({ searchParams }: any) {
    return <BlogPage searchParams={searchParams} />;
}
