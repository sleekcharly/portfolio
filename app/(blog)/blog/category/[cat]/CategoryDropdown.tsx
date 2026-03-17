"use client";

import { useRouter } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
    categories: string[];
    currentCategory?: string;
};

export default function CategoryDropdown({
    categories,
    currentCategory,
}: Props) {
    const router = useRouter();

    const format = (cat: string) =>
        cat
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");

    const handleSelect = (cat?: string) => {
        if (!cat) {
            router.push("/blog");
        } else {
            router.push(`/blog/category/${cat}`);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
                    {currentCategory
                        ? format(currentCategory)
                        : "All Categories"}
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => handleSelect()}>
                    All Categories
                </DropdownMenuItem>

                {categories.map((cat) => (
                    <DropdownMenuItem
                        key={cat}
                        onClick={() => handleSelect(cat)}
                        className={
                            cat === currentCategory
                                ? "font-semibold text-primary"
                                : ""
                        }
                    >
                        {format(cat)}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
