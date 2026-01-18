"use client";

import { icons } from "@/assets/icons";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import NavHeaderBg from "@/public/header-bg-color.png";
import MenuBlack from "@/public/icons/menu-black.png";
import MenuWhite from "@/public/icons/menu-white.png";
import CloseBlack from "@/public/icons/close-black.png";
import CloseWhite from "@/public/icons/close-white.png";
import { ThemeToggle } from "./theme-toggle";
import ArrowIconDark from "@/public/icons/arrow-icon-dark.png";
import Link from "next/link";

// type Props = {};

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef<HTMLUListElement | null>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(-16rem)";
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(16rem)";
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image
                    src={NavHeaderBg}
                    alt="Navbar background image"
                    className="w-full"
                />
            </div>

            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
                    isScroll
                        ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
                        : ""
                }`}
            >
                <Link
                    href="/#top"
                    className="flex items-end cursor-pointer mr-14"
                >
                    <h2 className="text-3xl font-semibold">
                        Charles <span className="text-red-800">.</span>
                    </h2>
                </Link>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
                        isScroll
                            ? ""
                            : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
                    } `}
                >
                    <li>
                        <Link href="/#top" className="font-Ovo">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/#about" className="font-Ovo">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/#services" className="font-Ovo">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/#work" className="font-Ovo">
                            My Work
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="font-Ovo">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact" className="font-Ovo">
                            Contact me
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    <Link
                        href="/#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50 cursor-pointer"
                    >
                        <span className="font-Ovo">Contact</span>
                        <icons.arrowOutward className="w-3 dark:hidden" />
                        <Image
                            src={ArrowIconDark}
                            alt="arrow icon dark"
                            className="w-3 hidden dark:block"
                        />
                    </Link>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image
                            src={MenuBlack}
                            alt="Black Menu Icon for light mode"
                            className="w-6 dark:hidden"
                        />
                        <Image
                            src={MenuWhite}
                            alt="White Menu Icon for dark mode"
                            className="w-6 hidden dark:block"
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
                >
                    <div
                        className="absolute right-6 top-6 cursor-pointer"
                        onClick={closeMenu}
                    >
                        <Image
                            src={CloseBlack}
                            alt="close icon"
                            className="w-5 cursor-pointer dark:hidden"
                        />
                        <Image
                            src={CloseWhite}
                            alt="close icon"
                            className="w-5 cursor-pointer hidden dark:block"
                        />
                    </div>
                    <li>
                        <Link
                            href="/#top"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#about"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#services"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#work"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            My Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#contact"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            Contact me
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
