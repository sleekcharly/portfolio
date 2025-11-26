'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ProfilePhotoLight from '@/public/images/og-image.png';
import HandIcon from '@/public/icons/hand-icon.png';
import ArrowRightWhite from '@/public/icons/right-arrow-white.png';
import DownloadIcon from '@/public/icons/download-icon.png';
import { motion } from 'motion/react';
import { HERO_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { useSidebar } from './ui/sidebar';
import { useClerk, useUser } from '@clerk/nextjs';
import { MessageCircle, X } from 'lucide-react';

type Props = { profile: HERO_QUERYResult };

const Header = ({ profile }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleSidebar, open } = useSidebar();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  return (
    <header className="relative w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* <BackgroundRippleEffect cellSize={100} /> */}

      <motion.button
        type="button"
        onClick={() => (isSignedIn ? toggleSidebar() : openSignIn())}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="relative z-10 w-48 h-48 cursor-pointer transition-transform duration-300 group-hover:scale-150"
        aria-label="Toggle AI Chat Sidebar"
      >
        <Image
          src={
            profile?.ogImage
              ? urlFor(profile.ogImage).width(200).height(200).url()
              : ProfilePhotoLight
          }
          fill
          alt="Charles Ukasoanya photo"
          className="rounded-full  object-cover"
          priority
        />

        {/* Online Badge */}
        <div className="absolute bottom-10 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2 py-1.5 rounded-full">
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
          </div>
          <span className="text-xs font-medium text-white">Online</span>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          } rounded-full`}
        >
          <div className="text-center space-y-3">
            {open ? (
              <X className="w-8 h-8 text-white mx-auto" />
            ) : (
              <MessageCircle className="w-8 h-8 text-white mx-auto" />
            )}

            <div className="text-white text-xl font-semibold">
              {open ? 'Close Chat' : 'Chat with AI Twin'}
            </div>
            <div className="text-white/80 text-sm">
              {open ? 'Click to close chat' : 'Click to open chat'}
            </div>
          </div>
        </div>
      </motion.button>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I&apos;m {profile?.firstName} {profile?.lastName}{' '}
        <Image src={HandIcon} alt="hand icon" className="w-6" />
      </motion.h1>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        {profile?.headline}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto font-Ovo"
      >
        {profile?.shortBio}
      </motion.p>
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-4">
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
