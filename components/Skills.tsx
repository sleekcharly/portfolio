// import Image from 'next/image';
// import React from 'react';
// import { urlFor } from '../sanity';
// import { Skill as SkillType } from '../typings';

// type Props = { skills: SkillType[] };

// const Skills = ({ skills }: Props) => {
//   return (
//     <section className="w-full lg:h-screen p-2" id="skills">
//       <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
//         <h2 className="uppercase text-sm md:text-lg lg:text-xl  text-gray-500 pb-2 tracking-[15px]">
//           Skills
//         </h2>
//         <h3 className="py-4 text-lg md:text-xl">What I Can Do</h3>
//         <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {/* loop over skills */}
//           {skills?.map((skill) => (
//             <div
//               className="md:p-3 lg:p-6 bg-gray-800 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
//               key={skill._id}
//             >
//               <div className="md:grid md:grid-cols-2 md:gap-4 justify-center items-center">
//                 <div className="relative m-auto w-10 h-10 md:w-16 md:h-16">
//                   <Image
//                     src={urlFor(skill?.image).url()}
//                     fill
//                     alt={`${skill?.title} logo`}
//                     className="object-cover"
//                   />
//                 </div>

//                 <div className="hidden md:flex flex-col items-center justify-center">
//                   <h3>{skill?.title}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { dureation: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkLMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Material UI" x="15vw" y="-16vw" />
        <Skill name="NodeJS" x="32vw" y="-5vw" />
        <Skill name="GIT" x="-30vw" y="-4vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Typescript" x="18vw" y="18vw" />
        <Skill name="Tailwind CSS" x="16vw" y="-7vw" />
        <Skill name="MongoDB" x="-0vw" y="-20vw" />
      </div>
    </>
  );
};

export default Skills;
