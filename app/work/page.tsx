'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Fr Stanley Foundation Website',
    description:
      'Built a dynamic and responsive website for the Fr Stanley Ukasoanya Foundation using React and Firebase for seamless frontend and backend integration. Integrated Paystack for secure donation processing and deployed a clean, user-friendly interface to support the foundation’s mission and outreach efforts.',
    stack: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Firebase' },
      { name: 'Paystack' },
    ],
    ongoing: false,
    image: '/assets/work/frstanleyfdn.png',
    live: 'https://www.frstanleyfdn.org/',
    github: 'https://github.com/sleekcharly/frStanleyUkasoanyaFoundation',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'PingTelecoms',
    description:
      'Redesigned and developed the official website for Ping Telecommunications using Next.js, Tailwind CSS, and Framer Motion for a seamless and dynamic user experience.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind' },
      { name: 'AWS' },
      { name: 'Sanity' },
    ],
    ongoing: false,
    image: '/assets/work/pingtel.png',
    live: 'https://www.pingtelecoms.net/',
    github: 'https://github.com/sleekcharly/ping_telecoms',
  },

  {
    num: '03',
    category: 'fullstack',
    title: 'Real-Time Weather Dashboard',
    description:
      'Developing a full-stack weather application using Python to scrape live data from on-site weather station sensors. Integrated Firebase for real-time data storage and built a responsive frontend dashboard using Next.js, Tailwind CSS, and Framer Motion to visualize atmospheric conditions for aviation and operational efficiency.',
    stack: [
      { name: 'Next.js' },
      { name: 'Python' },
      { name: 'Framer Motion' },
      { name: 'Firebase' },
    ],
    ongoing: true,
    image: '/assets/work/cnlawos2.png',
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'Catalyst Xpresx Logistics',
    description:
      'A dynamic logistics platform built with Next.js, Tailwind CSS, Framer Motion, and Firebase, designed to streamline package deliveries via dispatch bikes and bicycles. It features real-time booking, Google Maps integration for route tracking, and secure online payment functionality for a seamless delivery experience.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind' },
      { name: 'Framer Motion' },
      { name: 'Firebase' },
      { name: 'Map' },
    ],
    ongoing: true,
    image: '/assets/work/catalyst.png',
    live: '',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  interface Project {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: { name: string }[];
    image: string;
    live: string;
    github: string;
  }

  interface SwiperInstance {
    activeIndex: number;
  }

  const handleSlideChange = (swiper: SwiperInstance): void => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project {project.ongoing && '(ongoing)'}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4  flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20" />

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-hover" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github project button */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent-hover" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project: Project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[200px] sm:h-[320px] md:h-[390px] lg:h-[480px] xl:h-[310px] 2xl:h-[390px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* swiper buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
