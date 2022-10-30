// import Image from 'next/image';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Project } from '../typings';
// import { urlFor } from '../sanity';

// type Props = {
//   projects: Project[];
// };

// function Projects({ projects }: Props) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
//     >
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
//         Projects
//       </h3>

//       <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#B22222]/80">
//         {/* projects */}
//         {projects?.map((project, i) => (
//           <div
//             key={i}
//             className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
//           >
//             <motion.a
//               href={project.linkToBuild}
//               target="_blank"
//               rel="noreferrer"
//               initial={{
//                 y: -300,
//                 opacity: 0,
//               }}
//               transition={{ duration: 1.5 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="relative w-[400px] h-[250px] md:w-[500px] md:h-[300px] cursor-pointer"
//             >
//               <Image
//                 src={urlFor(project.image).url()}
//                 alt={`${project.title} preview`}
//                 layout="fill"
//               />
//             </motion.a>

//             <div className="space-y-10 px-0 md:px-10 max-w-6xl">
//               <h4 className="text-4xl font-semibold text-center">
//                 <a
//                   href={project.linkToBuild}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="underline decoration-[#F7AB0A]/50"
//                 >
//                   {project.title}
//                 </a>
//               </h4>

//               <div className="flex items-center space-x-2 justify-center">
//                 {project.technologies.map((tech) => (
//                   <div key={tech._id} className="relative w-10 h-10">
//                     <Image
//                       src={urlFor(tech.image).url()}
//                       alt={`${tech.title} icon`}
//                       layout="fill"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <p className="text-lg text-center md:text-left">
//                 {project.summary}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
//     </motion.div>
//   );
// }

// export default Projects;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  projects: Project[] | any;
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="w-full" id="project">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-sm md:text-lg lg:text-xl  text-gray-500 pb-2 tracking-[15px]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <div
              className="relative m-auto flex items-center justify-center w-80 h-56 md:w-96 md:h-[234] lg:w-[450px] lg:h-[300px] xl:w-[500px] xl:h-[300px] shadow-lg shadow-red-600 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
              key={project._id}
            >
              <Image
                src={urlFor(project.image).url()}
                alt={project.title}
                fill
                className="rounded-xl group-hover:opacity-5"
              />

              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2 justify-center">
                  {project.technologies.map((tech: any) => (
                    <div
                      key={tech._id}
                      className="relative w-10 h-10 bg-gray-500 rounded-full"
                    >
                      <Image
                        src={urlFor(tech.image).url()}
                        alt={`${tech.title} icon`}
                        fill
                        className="p-1 rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <Link href={`/project/${project.slug.current}`}>
                  <p className="text-center py-1 w-32 mt-5 mr-auto ml-auto rounded-lg bg-[#b22222] text-white font-bold text-lg">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
