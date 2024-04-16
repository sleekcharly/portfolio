import { motion } from 'framer-motion';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import AnimatedText from '../components/AnimatedText';
import { GithubIcon } from '../components/Icons';
import Layout from '../components/Layout';
import TransitionEffect from '../components/TransitionEffect';
import project1 from '../public/images/wander_wise.png';
import project2 from '../public/images/pingtelecoms_preview.webp';
import project3 from '../public/images/fit_club.webp';
import project4 from '../public/images/react_admin.webp';
import project5 from '../public/images/pride_land.webp';
import project6 from '../public/images/vision_call.png';

const FramerImage = motion(Image);

interface ProjectProps {
  type: string;
  title: string;
  summary?: string;
  img: StaticImageData;
  link: string;
  githubLink: string;
}

const FeaturedProject: React.FC<ProjectProps> = ({
  type,
  title,
  summary,
  img,
  link,
  githubLink,
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px)100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon className="" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project: React.FC<ProjectProps> = ({
  type,
  title,
  img,
  link,
  githubLink,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>

          <Link href={githubLink} target="_blank" className="w-8 md:w-6">
            <GithubIcon className="" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Charles | Projects</title>
        <meta
          name="description"
          content="Projects built by Charles Ukasoanya including a wide variety of technologies such a Typescript, React, NextJS, NodeJS, Firebase, Python, MongoDB and many more."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="WANDER WISE"
                summary="Wander Wise is a sophisticated travel companion application that leverages the power of Google Maps to enhance users' travel experiences. The app integrates advanced geolocation features, allowing users to pinpoint their location and navigate their surroundings effortlessly. By harnessing the Google Maps API, Wander Wise provides seamless searching for places and destinations, offering users instant access to nearby restaurants, hotels, and attractions. The application utilizes specialized Rapid APIs to fetch detailed data about local amenities, ensuring users receive tailored recommendations based on their preferences and location"
                link="https://wander-wisee.netlify.app/"
                type="Web App"
                githubLink="https://github.com/sleekcharly/WanderWise"
                img={project1}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Ping TELECOMS "
                link="https://www.pingtelecoms.net"
                type="Official Website"
                githubLink="https://github.com/sleekcharly/ping_telecoms"
                img={project2}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Fit Club"
                link="https://fit-club-one.vercel.app/"
                type="Fitness Web App"
                githubLink="https://github.com/sleekcharly/fit-club"
                img={project3}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="ADMIN DASHBOARD APP"
                summary="Here is an awesome generic company admin platforms to manage activities around an organization. Built purely with React and Material UI."
                link="https://react-admin-sepia-ten.vercel.app/"
                type="WEB APP"
                githubLink="https://github.com/sleekcharly/react-admin"
                img={project4}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PrideLand"
                link="https://prideland.netlify.app/login"
                type="Photo Web App"
                githubLink="https://github.com/sleekcharly/prideland"
                img={project5}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="VISION CALL"
                link="https://vision-call.vercel.app/"
                type="Video Conferencing"
                githubLink="https://github.com/sleekcharly/vision-call"
                img={project6}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
