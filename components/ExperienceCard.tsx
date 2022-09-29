import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gistoracle from '../public/images/gistoracle.png';
import react_logo from '../public/images/react_logo.png';
import next_logo from '../public/images/nextjs_logo.png';
import firebase_logo from '../public/images/firebase_logo.png';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] mt-10 xl:mt-[250px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative w-28 h-28 xl:w-[200px] xl:h-[200px]"
      >
        <Image
          src={gistoracle}
          alt="Gistoracle logo"
          layout="fill"
          className="rounded-full object-cover object-center"
        />
      </motion.div>

      <div className="md:px-10">
        <h4 className="text-2xl xl:text-4xl font-light">CEO of GISTORACLE</h4>
        <p className="font-bold text-lg xl:text-2xl mt-1">GISTORACLE</p>
        <div className="flex space-x-2 my-2">
          <div className="relative w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]">
            <Image
              src={react_logo}
              alt="React JS logo"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]">
            <Image
              src={next_logo}
              alt="Next JS"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]">
            <Image
              src={firebase_logo}
              alt="firebase"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        <p className="uppercase py-5 text-gray-300">Started work at</p>

        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li className="w-[300px] md:w-[400px] xl:w-[500px] break-words">
            postspostspostspostspostspostspostspostsposts
          </li>
          <li>posts</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
