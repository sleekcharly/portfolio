import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <section
      className="'w-full md:h-screen p-2 flex items-center py-16"
      id="about"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase text-sm md:text-lg lg:text-xl  text-gray-500 pb-2 tracking-[15px]">
            About
          </h2>
          <h3 className="py-2 md:text-lg text-white">
            Here is a little background
          </h3>
          <p className="py-2 text-gray-300">
            I&apos;m Charles Ukasoanya, a passionate frontend developer. My
            biggest motivation comes from the thought that with just some key
            strokes on the keyboard of my computer I can do amazing things, well
            in reality thats a lot of keystrokes.
          </p>

          <p className="py-2 text-gray-300">
            Background in Information and Communication Technology and ability
            as a self taught devloper (frontend-heavy and sufficient back-end
            proficiency), allow me to create everything from small business
            websites to custom web applications.
          </p>
          <p className="py-2 text-gray-300">
            I am an avid podcast listenerwhere I stay up to date with fresh and
            upcoming technologies in fullstack software development. It is an
            exciting time to be a developer and I look forward to the
            opportunities ahead and the products that have yet to be built.
          </p>

          <Link href="/#project">
            <p className="py-2 text-gray-200 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-auto h-auto m-auto shadow-lg shadow-red-600 rounded-xl flex items-center justify-center  hover:scale-105 ease-in duration-300">
          <div className="relative w-[300px] h-[270px]  xl:w-[450px] xl:h-[400px]">
            <Image
              src={urlFor(pageInfo?.heroImage).url()}
              alt="charles ukasoanya"
              fill
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
