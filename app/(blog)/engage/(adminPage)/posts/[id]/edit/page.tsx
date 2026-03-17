import { Separator } from "@/components/ui/separator";
import NewPostForm from "../../new/NewPostForm";

type IdParams = { id: string };

const page = async ({ params }: any) => {
    const resolvedParams: IdParams = await params;
    const id = resolvedParams?.id;

    return (
        <div>
            <h1 className="text-lg lg:text-2xl font-bold ml-4 mb-2">
                Edit Post
            </h1>

            <Separator />

            <div className="max-w-4xl mx-auto py-10">
                <NewPostForm postId={id} />
            </div>
        </div>
    );
};

export default page;
