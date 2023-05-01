import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import AnimatedText from '../components/AnimatedText';
import { GithubIcon } from '../components/Icons';
import Layout from '../components/Layout';
import project1 from '../public/images/gistoracle_preview.png';

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
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>

          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon />
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

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Gistoracle"
                summary="The Gistoracle application was built using Javascript, CSS3, SASS, Next js (a React.js framework), Firebase, Material-UI & Tailwind. The app features a sign-in, and sign-up, homepage with news feeds, community pages, category pages, a user proﬁle page, and a settings page."
                link="https://www.gistoracle.com"
                type="Featured Project"
                githubLink="https://github.com/sleekcharly/gistoracle-v2"
                img={project1}
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Gistoracle"
                link="https://www.gistoracle.com"
                type="Featured Project"
                githubLink="https://github.com/sleekcharly/gistoracle-v2"
                img={project1}
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Gistoracle"
                link="https://www.gistoracle.com"
                type="Featured Project"
                githubLink="https://github.com/sleekcharly/gistoracle-v2"
                img={project1}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Gistoracle"
                summary="The Gistoracle application was built using Javascript, CSS3, SASS, Next js (a React.js framework), Firebase, Material-UI & Tailwind. The app features a sign-in, and sign-up, homepage with news feeds, community pages, category pages, a user proﬁle page, and a settings page."
                link="https://www.gistoracle.com"
                type="Featured Project"
                githubLink="https://github.com/sleekcharly/gistoracle-v2"
                img={project1}
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Gistoracle"
                link="https://www.gistoracle.com"
                type="Featured Project"
                githubLink="https://github.com/sleekcharly/gistoracle-v2"
                img={project1}
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Gistoracle"
                link="https://www.gistoracle.com"
                type="Featured Project"
                githubLink="https://github.com/sleekcharly/gistoracle-v2"
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
