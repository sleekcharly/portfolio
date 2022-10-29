import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';

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
    <div className="w-full h-screen text-center" id="home">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            SOFTWARE ENGINEER
          </p>
          <h1 className="py-4 text-gray-700">Hi, I am Charles</h1>
          <h2 className="py-2 text-gray-700">
            <span>{text}</span>
            <Cursor cursorColor="#f7AB0A" />
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            A strong Background in Information and Communication Technology and
            ability as a self taught devloper (frontend-heavy and sufficient
            back-end proficiency), allow me to create everything from small
            business websites to custom web applications.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
              <SocialIcon
                url="https://github.com/sleekcharly"
                fgColor="gray"
                bgColor="transparent"
              />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
              <SocialIcon
                url="https://twitter.com/sleekcharly"
                fgColor="gray"
                bgColor="transparent"
              />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
              <SocialIcon
                url="https://www.linkedin.com/in/ukasoanya-charles/"
                fgColor="gray"
                bgColor="transparent"
              />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
              <SocialIcon
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
