import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// set motion element for link
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex itemscenter justify-center mt-2">
      <MotionLink
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        href="/"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { dureation: 1, repeat: Infinity },
        }}
      >
        UC
      </MotionLink>
    </div>
  );
};

export default Logo;
