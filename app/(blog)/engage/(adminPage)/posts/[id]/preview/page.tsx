import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <h1 className="text-lg lg:text-2xl font-bold ml-4 mb-2">
                Post Preview
            </h1>

            <Separator />
        </div>
    );
};

export default page;
