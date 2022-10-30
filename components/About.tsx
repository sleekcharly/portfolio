// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { PageInfo } from '../typings';
// import { urlFor } from '../sanity';

// type Props = {
//   pageInfo: PageInfo;
// };

// function About({ pageInfo }: Props) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
//     >
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
//         About
//       </h3>

//       <motion.div
//         initial={{
//           x: -200,
//           opacity: 0,
//         }}
//         transition={{
//           duration: 1.2,
//         }}
//         whileInView={{ opacity: 1, x: 0 }} // image slides in only when in view
//         viewport={{ once: true }}
//         className="relative -mb-20 mt-20  md:mt-0 xl:mt-60 sm:-mb-10 md:mb-0 flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-95 xl:w-[450px] xl:h-[550px]"
//       >
//         <Image
//           src={urlFor(pageInfo?.profilePic).url()}
//           alt="Profile picture of Charles Ukasoanya"
//           layout="fill"
//           className="rounded-full object-cover md:rounded-lg"
//         />
//       </motion.div>

//       <div className="space-y-10 px-0 md:px-10 md:mt-32">
//         <h4 className="text-2xl lg:text-4xl font-semibold">
//           Here is a <span className="myHighlight">little</span> background
//         </h4>
//         <p className="hidden md:block text-lg lg:text-xl">
//           I&apos;m Charles Ukasoanya, a passionate{' '}
//           <span className="myHighlight font-semibold">frontend developer</span>.
//           My biggest motivation comes from the thought that with just some key
//           strokes on the keyboard of my computer I can do amazing things, well
//           in reality thats a lot of keystrokes. I enjoy creating fast, clean,
//           and maintainable web applications, ready to scale from few users to
//           thousands. My past work experience as a{' '}
//           <span className="myHighlight font-semibold">Crew Trainer</span> in the
//           ever fast pace McDonalds fast food chain ensures that I can deliver a
//           seamless and engaging experience to your users. Background in{' '}
//           <span className="myHighlight font-semibold">
//             Information and Communication Technology
//           </span>{' '}
//           and ability as a self taught devloper (frontend-heavy and sufficient
//           back-end proficiency), allow me to create everything from small
//           business websites to custom web applications. I am{' '}
//           <span className="myHighlight font-semibold">
//             an avid podcast listener
//           </span>
//           where I stay up to date with fresh and upcoming technologies in
//           fullstack software development. It is an exciting time to be a
//           developer and I look forward to the opportunities ahead and the
//           products that have yet to be built.
//         </p>
//         <p className="md:hidden text-base">
//           I&apos;m Charles Ukasoanya, a passionate{' '}
//           <span className="myHighlight font-semibold">frontend developer</span>.
//           My biggest motivation comes from the thought that with just some key
//           strokes on the keyboard of my computer I can do amazing things, well
//           in reality thats a lot of keystrokes. I enjoy creating fast, clean,
//           and maintainable web applications, ready to scale from few users to
//           thousands. I am{' '}
//           <span className="myHighlight font-semibold">
//             an avid podcast listener
//           </span>{' '}
//           where I stay up to date with fresh and upcoming technologies in
//           fullstack software development. It is an exciting time to be a
//           developer and I look forward to the opportunities ahead and the
//           products that have yet to be built.
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// export default About;

import Image from 'next/image';
import React from 'react';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="'w-full md:h-screen p-2 flex items-center py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-sm md:text-lg lg:text-xl  text-gray-500 pb-2 tracking-[15px]">
            About
          </p>
          <h2 className="py-2 text-white">Here is a little background</h2>
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
          <p className="py-2 text-gray-200 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
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
    </div>
  );
};

export default About;
