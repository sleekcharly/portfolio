import { Separator } from "@/components/ui/separator";
import React from "react";
import NewPostForm from "./NewPostForm";

const page = () => {
    return (
        <div>
            <h1 className="text-lg lg:text-2xl font-bold ml-4 mb-2">
                New Post
            </h1>

            <Separator />

            <div className="max-w-4xl mx-auto py-10">
                <NewPostForm />
            </div>
        </div>
    );
};

export default page;
