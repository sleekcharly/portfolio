'use client';

import Image from 'next/image';
import React from 'react';
import UserPhoto from '@/public/images/user-image-light.png';
import UserPhotoDark from '@/public/images/user-image-dark.png';
import { infoList, toolsData } from '@/assets/data';
import { motion } from 'motion/react';
import { HERO_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

type Props = { profile: HERO_QUERYResult };

const About = ({ profile }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-88 h-94 lg:h-99 rounded-3xl max-w-none relative"
        >
          <Image
            src={
              profile?.profileImage
                ? urlFor(profile?.profileImage).width(400).height(400).url()
                : UserPhoto
            }
            fill
            alt="Charles Ukasoanya"
            priority
            className="w-full rounded-3xl dark:hidden object-cover"
          />
          <Image
            src={
              profile?.profileImageDark
                ? urlFor(profile?.profileImageDark).width(400).height(400).url()
                : UserPhotoDark
            }
            fill
            alt="Charles Ukasoanya"
            className="w-full rounded-3xl hidden dark:block object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <div className="mb-10 max-w-2xl font-Ovo">
            {profile?.extendedBio && (
              <PortableText
                value={profile.extendedBio}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className=" leading-relaxed mb-4">{children}</p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-3xl font-bold mt-8 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-2xl font-semibold mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-4 italic my-4">
                        {children}
                      </blockquote>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="font-semibold text-foreground">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),
                    link: ({ children, value }) => {
                      const href = value?.href || '';
                      const isExternal = href.startsWith('http');
                      return (
                        <Link
                          href={href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="text-primary hover:underline"
                        >
                          {children}
                        </Link>
                      );
                    },
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
                        {children}
                      </ol>
                    ),
                  },
                }}
              />
            )}
          </div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[var(--box-shadow-black)] dark:border-white dark:hover:shadow-[var(--box-shadow-white)] dark:hover:bg-darkHover/50"
              >
                <Image
                  src={icon}
                  alt={`${title} icon`}
                  className="w-7 mt-3 dark:hidden"
                />
                <Image
                  src={iconDark}
                  alt={`${title} icon`}
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool image" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
