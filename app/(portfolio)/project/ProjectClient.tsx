'use client';

import { use } from 'react';
import Image from 'next/image';
import { workData } from '@/assets/data';
import { FaGithub, FaLink } from 'react-icons/fa';
import Projects from '@/components/Projects';
import { motion } from 'motion/react';

export default function ProjectClient({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const pageProject = workData.find((project) => project.slug === slug);
  if (!pageProject) return null;

  return (
    <div className="flex flex-col lg:flex-row items-center w-full max-w-[1400px] mx-auto px-5">
      <div className="w-full">
        <div className="w-11/12 max-w-7xl mx-auto md:pt-20 h-screen flex flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-fit flex items-center gap-3 mb-10"
          >
            <div className="w-3 bg-red-500 h-full"></div>
            <h1 className="text-2xl md:text-3xl font-extrabold">
              {pageProject.full_title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative w-full max-w-4xl"
          >
            <Image
              src={pageProject.projImage}
              alt="project image"
              priority
              className="w-full object-cover"
            />
          </motion.div>

          {pageProject.url && (
            <div className="flex items-center gap-5">
              <motion.a
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                target="_blank"
                href={`${pageProject.url}`}
                className="border-2 p-2 rounded-full"
              >
                <FaLink size={30} />
              </motion.a>
              {pageProject.github && (
                <motion.a
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  target="_blank"
                  href={`${pageProject.github}`}
                  className="border-2 p-2 rounded-full"
                >
                  <FaGithub size={30} />
                </motion.a>
              )}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-6xl mx-auto -mt-35 sm:-mt-20 px-[12%] py-10 scroll-mt-20 text-justify"
          dangerouslySetInnerHTML={{ __html: pageProject.text ?? '' }}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Recent Projects</h2>
        <div className="flex items-center flex-wrap xl:flex-col gap-5 w-full lg:max-w-[400px] mx-auto">
          {workData
            .filter((project) => project.slug !== slug)
            .map((project, index) => (
              <Projects project={project} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
