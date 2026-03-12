"use client";

import { motion } from "motion/react";
import Image from "next/image";
import ProfilePhotoLight from "@/public/images/og-image.png";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const BlogSidebar = () => {
    return (
        <aside className="bg-darkTheme w-full md:max-w-xs pt-15 pb-10 md:h-screen flex flex-col items-center md:items-start sm:pl-0 md:pl-10 space-y-7 md:fixed">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
                <Image
                    src={ProfilePhotoLight}
                    alt="Charles Ukasoanya photo"
                    className="rounded-full w-30 md:w-40"
                    priority
                />
            </motion.div>
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-5xl font-pirata-one text-white w-[250px] md:w-full text-center md:text-start "
            >
                Charles Ukasoanya&apos;s Blog
            </motion.h1>

            <ul className="text-gray-400 text-xs md:text-sm  w-full max-w-[250px] font-jetMono flex flex-wrap justify-center md:flex-col gap-5 md:ml-0 mt-5">
                <motion.li
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Link href="/blog">All</Link>
                </motion.li>
                <motion.li
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Link href="/blog">Software Development</Link>
                </motion.li>
                <motion.li
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link href="/blog">IoT & Systems</Link>
                </motion.li>
                <motion.li
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <Link href="/blog">Career & Insights</Link>
                </motion.li>
                <motion.li
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link href="/">Who Am I?</Link>
                </motion.li>
            </ul>

            <motion.ul
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex items-center gap-10 mt-4 text-white  md:ml-0"
            >
                <li>
                    <a target="_blank" href="https://github.com/sleekcharly">
                        <FaGithub size={20} />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/ukasoanya-charles/"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://x.com/sleekcharly">
                        <FaX size={20} />
                    </a>
                </li>
            </motion.ul>
        </aside>
    );
};

export default BlogSidebar;
