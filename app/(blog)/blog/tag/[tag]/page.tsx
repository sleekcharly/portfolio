import TagPage from "./TagPage";

type TagParams = { tag: string };

export default async function Page({
    searchParams,
    params,
}: {
    searchParams: any;
    params: TagParams;
}) {
    return <TagPage searchParams={searchParams} params={params} />;
}
