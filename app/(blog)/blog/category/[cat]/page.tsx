import CategoryPage from "./CategoryPage";

type CatParams = { cat: string };

export default async function Page({
    searchParams,
    params,
}: {
    searchParams: any;
    params: CatParams;
}) {
    return <CategoryPage searchParams={searchParams} params={params} />;
}
