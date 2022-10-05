import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import gistoraclePreview from '../public/images/gistoraclePrev.png';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* projects */}
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-[400px] h-[250px] md:w-[500px] md:h-[300px]"
            >
              <Image
                src={urlFor(project.image).url()}
                alt={`${project.title} preview`}
                layout="fill"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {project.title}
                </span>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((tech) => (
                  <div key={tech._id} className="relative w-10 h-10">
                    <Image
                      src={urlFor(tech.image).url()}
                      alt={`${tech.title} icon`}
                      layout="fill"
                    />
                  </div>
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                Netflix 2.0 app that has a Log In and Log out Authentication
                with Google. It has a beautiful Home Screen with all the movies
                looking just like Netflix. There is also a subscription page
                where you can see your active monthly subscription. We also use
                Stripe Payments for the monthly Netflix Subscriptions!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
