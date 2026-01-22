"use client";

import * as React from "react";
import {
    BarChart3,
    File,
    LayoutDashboard,
    LogOutIcon,
    MessageSquare,
    PenSquare,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import ProfilePhotoLight from "@/public/images/og-image.png";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

// Dashboard Data.
const data = {
    navMain: [
        {
            title: "Overview",
            url: "/engage",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Posts",
            url: "/engage/posts",
            icon: File,
        },
        {
            title: "Create Post",
            url: "/engage/posts/new",
            icon: PenSquare,
        },

        {
            title: "Analytics",
            url: "/engage/analytics",
            icon: BarChart3,
        },
        {
            title: "Commenting",
            url: "/engage/comments",
            icon: MessageSquare,
        },
    ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    async function handleLogout() {
        try {
            // 1. Sign out from Firebase client
            await signOut(auth);

            // 2. Clear session cookie on server
            await fetch("/api/auth/logout", {
                method: "POST",
            });

            // 3. Redirect to login
            window.location.href = "/engage/login";
        } catch (err) {
            console.error("Logout failed", err);
        }
    }
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="h-16">
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-16"
                        >
                            <Link
                                href="/engage"
                                className=" text-sidebar-primary-foreground flex items-center justify-center w-full  gap-5"
                            >
                                <div>
                                    <div className="relative z-10 w-14 h-14 transition-transform duration-100 hover:scale-110">
                                        <Image
                                            src={ProfilePhotoLight}
                                            alt="Charles Ukasoanya photo"
                                            fill
                                            priority
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium text-black dark:text-white text-lg">
                                        Charly&apos;s Bunker
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={handleLogout}
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer flex items-center"
                        >
                            <LogOutIcon />
                            <span className="text-lg">Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
