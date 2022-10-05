import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import firebase_logo from '../public/images/firebase_logo.png';
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
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative rounded-full border border-gray-500 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={urlFor(skill.image).url()}
          alt={`${skill.title} logo`}
          layout="fill"
          className="object-cover"
        />
      </motion.div>

      {/* for skills title on hover*/}
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
