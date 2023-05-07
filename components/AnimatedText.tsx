import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  initial: {
    opacity: number;
    y?: number;
  };
  animate: {
    opacity: number;
    y?: number;
    transition: {
      delay?: number;
      staggerChildren?: number;
      duration?: number;
    };
  };
};

const quote: Props = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.5, staggerChildren: 0.08 },
  },
};

const singleWord: Props = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl  dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
