'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { formattedDate } from '@/utils/server';
import { FaTags } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';

type BlogCardProps = {
  post: BlogPost;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div>
      {post?.images[0] && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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

      {/* Blog Feature title */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-Ovo text-xl mb-1 font-semibold text-black"
      >
        {post.title}
      </motion.h3>

      {/* Blog post details, (title, and action button)*/}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-center space-x-2 flex-wrap font-extralight text-gray-500 mb-3 mt-2 text-xs"
      >
        {/* Blog Feature title date */}
        <div className="flex items-center space-x-2 font-jetMono">
          <BiCalendar size={18} /> <p>{formattedDate(post.createdAt)}</p>
        </div>
        {/* Blog feature title tags */}
        <div className="flex items-center space-x-2">
          <FaTags size={18} />
          <div className="flex items-center space-x-2 font-jetMono flex-wrap">
            {post?.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="hover:font-bold"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Blog post preview text */}
      <div className="text-sm mt-2">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-black"
        >
          {post?.excerpt}
        </motion.p>
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border border-gray-500 px-2 py-1 mt-2 hover:bg-gray-300 rounded-md"
          type="button"
        >
          <Link
            href={`/blog/${post?.slug}`}
            className="font-semibold text-sm hover:font-bold hover:scale-105 text-black"
          >
            Read More
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default BlogCard;
