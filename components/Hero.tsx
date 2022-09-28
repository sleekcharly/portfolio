import React from 'react';
// Bring in react-simple-typewriter methods
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import BackgroundCircles from './BackgroundCircles';
import profilePic from '../public/images/charles.jpg';
import Link from 'next/link';

type Props = {};

function Hero({}: Props) {
  // use the useTypewriter hook to set up the phrases
  const [text, count] = useTypewriter({
    words: [
      'Hi, I am Charles Ukasoanya',
      'FRONT END DEVELOPER',
      'Aviation Enthusiast',
      '<Passionate Man United fan />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative w-32 h-32 mx-auto ">
        <Image
          src={profilePic}
          alt="Picture of Charles Ukasoanya"
          layout="fill"
          className="rounded-full object-cover"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          software engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
