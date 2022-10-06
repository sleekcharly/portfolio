import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] xl:w-[600px] mt-[7rem]  snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative w-28 h-28 xl:w-[120px] xl:h-[120px]"
      >
        <Image
          src={urlFor(experience?.companyImage).url()}
          alt={`${experience?.company} logo`}
          layout="fill"
          className="rounded-full object-cover object-center"
        />
      </motion.div>

      <div className="pr-5">
        <h4 className="text-2xl xl:text-3xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-lg xl:text-xl mt-1">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((tech) => (
            <div
              key={tech._id}
              className="relative w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]"
            >
              <Image
                src={urlFor(tech.image).url()}
                alt={`${tech.title} logo`}
                layout="fill"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <div className="max-h-56 pr-5 overflow-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#B22222]/80 ">
          <ul className="list-disc space-y-4 ml-5 text-base md:text-lg max-w-[450px] lg:max-w-full]">
            {experience.points.map((point, index) => (
              <li key={index} className=" break-words">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
