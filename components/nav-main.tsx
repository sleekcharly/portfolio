"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
    }[];
}) {
    return (
        <SidebarGroup>
            <SidebarMenu className="flex flex-col gap-6">
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <Link href={item.url}>
                            {" "}
                            <SidebarMenuButton
                                tooltip={item.title}
                                className="cursor-pointer"
                            >
                                {item.icon && <item.icon />}
                                <span className="text-lg">{item.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
