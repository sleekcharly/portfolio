import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '../components/AnimatedText';
import HireMe from '../components/HireMe';
import { LinkArrow } from '../components/Icons';
import Layout from '../components/Layout';
import TransitionEffect from '../components/TransitionEffect';
import profilePic from '../public/images/profile/profile1.png';
import lightBulb from '../public/images/svgs/miscellaneous_icons_1.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Charles Ukasoanya | Portfolio</title>
        <meta
          name="description"
          content="The personal website of software developer, Charles Ukasoanya"
        />
      </Head>

      <TransitionEffect />

      <main className="flex items-center dark:text-light text-dark w-full">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Charles Ukasoanya"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px)100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision into reality With Code."
                className="!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                A skilled full-stack developer with strong Background in
                Information and Communication Technology and ability as a self
                taught devloper (frontend-heavy and sufficient back-end
                proficiency), allowing me to create everything from small
                business websites to custom web applications.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/01Charles_Ukasoanya.pdf"
                  target={`_blank`}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-white hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>

                <Link
                  href="mailto:c_ukasoanya@yahoo.com"
                  target={`_blank`}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Charles ukasoanya"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
