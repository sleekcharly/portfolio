// import React from 'react';
// import { motion } from 'framer-motion';
// import Skill from './Skill';
// import { Skill as SkillType } from '../typings';

// type Props = {
//   skills: SkillType[];
// };

// function Skills({ skills }: Props) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
//     >
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
//         Skills
//       </h3>

//       <div className="grid grid-cols-4 gap-5 md:mt-32">
//         {skills?.slice(0, skills.length / 2).map((skill) => (
//           <Skill key={skill._id} skill={skill} />
//         ))}

//         {skills?.slice(skills.length / 2, skills.length).map((skill) => (
//           <Skill key={skill._id} skill={skill} directionLeft />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// export default Skills;

import Image from 'next/image';
import React from 'react';
import { urlFor } from '../sanity';
import { Skill as SkillType } from '../typings';

type Props = { skills: SkillType[] };

const Skills = ({ skills }: Props) => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* loop over skills */}
          {skills?.map((skill) => (
            <div
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              key={skill._id}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={urlFor(skill?.image).url()}
                    width={64}
                    height={64}
                    alt={`${skill?.title} logo`}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill?.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
