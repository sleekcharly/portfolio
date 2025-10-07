import { workData } from '@/assets/data';
import Image from 'next/image';
import React from 'react';
import SendIcon from '@/public/icons/send-icon.png';

// type Props = {}

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio! Explore a collection of projects showcasing my
        expertise!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage.src})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 right-2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={SendIcon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">Show more <Image src={RightArrow} alt="Right arrow" className="w-4"/></a> */}
    </div>
  );
};

export default Work;
