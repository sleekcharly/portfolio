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
    <section className="w-full" id="project">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="uppercase text-sm md:text-lg lg:text-xl  text-gray-500 pb-2 tracking-[15px]">
          Projects
        </h2>
        <h3 className="py-4 text-lg md:text-xl">What I&apos;ve Built</h3>

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
                    Learn More
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
