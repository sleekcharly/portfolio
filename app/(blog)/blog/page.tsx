"use client";

import Image from "next/image";
import React from "react";
import BlogPix from "@/public/images/blog_pix1.webp";
import { BiCalendar } from "react-icons/bi";
import Link from "next/link";
import { motion } from "motion/react";
import { formattedDate } from "@/utils";
import { FaTags } from "react-icons/fa";

// type Props = {};

const page = () => {
    return (
        <div>
            {/* Blog Feature */}
            <div className="flex items-center flex-col xl:flex-row-reverse gap-7 w-full">
                <div className="w-full flex flex-col gap-5">
                    <div>
                        {/* Blog Feature title */}
                        <motion.h2
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="font-Ovo text-4xl mb-1"
                        >
                            Reverse Engineering Claude Code: How Skills
                            Different from Agents, Commands and Styles
                        </motion.h2>
                        {/* Blog Feature title info */}
                        <div className="flex items-center space-x-6 flex-wrap font-extralight text-gray-500 mb-3">
                            {/* Blog Feature title date */}
                            <div className="flex items-center space-x-2 font-jetMono">
                                <BiCalendar size={25} />{" "}
                                <p>{formattedDate(Date.now())}</p>
                            </div>
                            {/* Blog feature title tags */}
                            <div className="flex items-center space-x-2">
                                <FaTags size={25} />
                                <div className="flex items-center space-x-2 font-jetMono">
                                    <Link href="/">git</Link>
                                    <Link href="/">ai</Link>
                                    <Link href="/">open-source</Link>
                                    <Link href="/">mcp</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Feature Title text and action button */}
                    <div className="hidden xl:block">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatem rem nemo reprehenderit eaque, est
                            laudantium ab, fuga obcaecati nostrum animi
                            voluptate tempore alias architecto ipsa odio sunt
                            repellendus earum expedita.
                        </p>
                        <button className="border border-gray-500 px-3 py-1 mt-3">
                            <Link href="/" className="font-semibold">
                                Read More
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    {/* Blog Feature title Image */}
                    <div className="relative w-full h-80 xl:h-90">
                        <Image
                            src={BlogPix}
                            alt=""
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                    {/* Blog Feature Title text and action button */}
                    <div className="xl:hidden">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatem rem nemo reprehenderit eaque, est
                            laudantium ab, fuga obcaecati nostrum animi
                            voluptate tempore alias architecto ipsa odio sunt
                            repellendus earum expedita.
                        </p>
                        <button className="border border-gray-500 px-3 py-1">
                            <Link href="/" className="font-semibold">
                                Read More
                            </Link>
                        </button>
                    </div>
                </div>
                <div></div>
            </div>
            <div></div>
        </div>
    );
};

export default page;
