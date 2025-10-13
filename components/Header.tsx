import Image from 'next/image';
import React from 'react';
import ProfilePhotoLight from '@/public/images/og-image.png';
import HandIcon from '@/public/icons/hand-icon.png';
import ArrowRightWhite from '@/public/icons/right-arrow-white.png';
import DownloadIcon from '@/public/icons/download-icon.png';
import { motion } from 'motion/react';

// type Props = {}

const Header = () => {
  return (
    <header className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={ProfilePhotoLight}
          alt="Charles Ukasoanya photo"
          className="rounded-full w-32"
          priority
        />
      </motion.div>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I&apos;m Charles Ukasoanya{' '}
        <Image src={HandIcon} alt="hand icon" className="w-6" />
      </motion.h1>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Telecoms Engineer, IoT & Software Innovator
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I bridge the gap between telecommunications and software by crafting
        intelligent, user-centered digital solutions that enhance connectivity,
        optimize systems, and deliver impactful user experiences across
        platforms.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="cursor-pointer px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me{' '}
          <Image
            src={ArrowRightWhite}
            alt="Right arrow pointer"
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/01CHARLES UKASOANYA.pdf"
          download
          className="cursor-pointer px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume{' '}
          <Image
            src={DownloadIcon}
            alt="Resume Download icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
