'use client';

import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import Link from 'next/link';
import { motion } from 'motion/react';
import { formattedDate } from '@/utils/server';
import { FaTags } from 'react-icons/fa';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';

type FeaturedPostProps = {
  post: BlogPost | null;
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="flex flex-col items-center xl:flex-row-reverse gap-7 w-full">
      <div className="w-full flex flex-col gap-4 sm:gap-5">
        <div>
          {/* Blog Feature title */}
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-Ovo text-2xl sm:text-3xl lg:text-4xl mb-2 font-semibold leading-tight text-black"
          >
            {post?.title}
          </motion.h2>

          {/* Blog Feature title info */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-5 text-sm sm:text-base font-extralight text-gray-500"
          >
            {/* Blog Feature title date */}
            <div className="flex items-center gap-2 font-jetMono">
              <BiCalendar className="text-lg sm:text-xl shrink-0" />
              <p>{post?.createdAt ? formattedDate(post.createdAt) : ''}</p>
            </div>

            {/* Blog feature title tags */}
            <div className="flex items-start gap-2">
              <FaTags className="text-lg sm:text-xl shrink-0 mt-0.5" />
              <div className="flex flex-wrap gap-2 font-jetMono text-xs">
                {post?.tags.map((tag) => (
                  <Link
                    href={`/blog/tag/${tag}`}
                    key={tag}
                    className="hover:font-bold transition"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Blog Feature Title text and action button */}
        <div className="hidden xl:block">
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm sm:text-base leading-7 text-gray-700"
          >
            {post?.excerpt}
          </motion.p>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4"
          >
            <Link
              href={`/blog/${post?.slug}`}
              className="inline-block rounded-md border border-gray-500 px-4 py-2 text-sm sm:text-base font-semibold transition hover:bg-gray-300 hover:scale-105 text-black"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="w-full bg-white">
        {/* Blog Feature title Image */}
        {post?.images[0] && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative w-full h-80 xl:h-90"
          >
            <Image
              src={post.images[0].url}
              alt=""
              fill
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        )}

        {/* Blog Feature Title text and action button */}
        <div className="xl:hidden">
          <p className="text-black">{post?.excerpt}</p>
          <button
            className="border border-gray-500 px-3 py-1 rounded-md hover:bg-gray-300 text-black"
            type="button"
          >
            <Link href={`/blog/${post?.slug}`} className="font-semibold">
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
