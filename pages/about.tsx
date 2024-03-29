import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import AnimatedText from '../components/AnimatedText';
import Education from '../components/Education';
import Experience from '../components/MyExperience';
import Layout from '../components/Layout';
import Skills from '../components/Skills';
import TransitionEffect from '../components/TransitionEffect';
import profilePic from '../public/images/profile/profile2.jpg';

const About = () => {
  return (
    <>
      <Head>
        <title>Charles | About</title>
        <meta
          name="description"
          content="I'm Charles Ukasoanya, a passionate frontend developer. My biggest motivation comes from the thought that with just some key strokes on the keyboard of my computer I can do amazing things, well in reality thats a lot of keystrokes."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="flex md:flex-col-reverse items-center justify-between w-full gap-8">
            <div className="flex flex-col items-start justify-start w-1/2 self-center lg:w-full">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Here is a little background
              </h2>

              <p className="font-medium">
                I'm Charles Ukasoanya, a passionate frontend developer. My
                biggest motivation comes from the thought that with just some
                key strokes on the keyboard of my computer I can do amazing
                things, well in reality thats a lot of keystrokes.
              </p>

              <p className="font-medium my-4">
                Background in Information and Communication Technology and
                ability as a self taught devloper (frontend-heavy and sufficient
                back-end proficiency), allow me to create everything from small
                business websites to custom web applications.
              </p>

              <p className="font-medium">
                I am an avid podcast listener where I stay up to date with fresh
                and upcoming technologies in fullstack software development. It
                is an exciting time to be a developer and I look forward to the
                opportunities ahead and the products that have yet to be built.
              </p>
            </div>

            <div className="relative h-max rounded-2xl border-2  border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Charles Ukasoanya"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px)100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>

          <Skills />

          <Experience />

          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
