import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -150 : 150,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative rounded-full border border-gray-500 w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={urlFor(skill?.image).url()}
          alt={`${skill?.title} logo`}
          layout="fill"
          className="object-cover"
        />
      </motion.div>

      {/* for skills title on hover*/}
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xs md:text-lg font-bold text-black opacity-100">
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
