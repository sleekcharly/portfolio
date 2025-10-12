'use client';

import { motion } from 'motion/react';

import SendIcon from '@/public/icons/send-icon.png';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

type Props = {
  project: {
    title: string;
    description: string;
    full_title: string;
    github?: string;
    projImage: StaticImageData;
    bgImage: StaticImageData;
    slug: string;
    url?: string;
  };
};

const Projects = ({ project }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-full sm:w-[280px] md:w-[230px] lg:w-[300px] aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group h-[200px]"
      style={{ backgroundImage: `url(${project.bgImage.src})` }}
    >
      <Link
        href={`/project/${project.slug}`}
        className="bg-white w-10/12 rounded-md absolute bottom-5 right-2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 dark:text-black"
      >
        <div>
          <h2 className="text-sm">{project.title}</h2>
        </div>

        <div className="border rounded-full border-black w-5 aspect-square flex items-center justify-center shadow-[1px_1px_0_#000] group-hover:bg-lime-300 transition cursor-pointer">
          <Image src={SendIcon} alt="send icon" className="w-3" />
        </div>
      </Link>
    </motion.div>
  );
};

export default Projects;
