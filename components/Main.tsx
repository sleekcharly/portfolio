import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';

type Props = {};

const Main = (props: Props) => {
  // use the useTypewriter hook to set up the phrases
  const [text, count] = useTypewriter({
    words: [
      'FRONT END DEVELOPER',
      'Aviation Enthusiast',
      '<Passionate Man United fan />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="w-full h-screen text-center" id="home">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <header>
          <p className="uppercase text-sm  text-gray-500 pb-2 tracking-[15px]">
            SOFTWARE ENGINEER
          </p>
          <h1 className="py-4 text-white">Hi, I am Charles</h1>
          <h2 className="py-2 text-white text-lg md:text-3xl lg:text-6xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="#f7AB0A" />
          </h2>
          <p className="py-4 text-gray-300 max-w-[70%] m-auto">
            A strong Background in Information and Communication Technology and
            ability as a self taught devloper (frontend-heavy and sufficient
            back-end proficiency), allow me to create everything from small
            business websites to custom web applications.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-red-700 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
              <SocialIcon
                url="https://github.com/sleekcharly"
                fgColor="white"
                bgColor="transparent"
              />
            </div>
            <div className="rounded-full shadow-lg shadow-red-700 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
              <SocialIcon
                url="https://twitter.com/sleekcharly"
                fgColor="white"
                bgColor="transparent"
              />
            </div>
            <div className="rounded-full shadow-lg shadow-red-700 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
              <SocialIcon
                url="https://www.linkedin.com/in/ukasoanya-charles/"
                fgColor="white"
                bgColor="transparent"
              />
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Main;
