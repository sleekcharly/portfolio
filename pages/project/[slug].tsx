import { groq } from 'next-sanity';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '../../components/Navbar';
import { sanityClient, urlFor } from '../../sanity';
import { PageInfo, Project } from '../../typings';
import { fetchPageInfo } from '../../utils/getPageInfo';

type Props = {
  pageInfo: PageInfo;
  project: Project;
  slug: string;
};

const ProjectDetails = ({ pageInfo, project, slug }: Props) => {
  const techs = project.technologies.map((tech) => `${tech.title} `);
  let techString = techs.join(' ').replace(/\s+/g, ' / ');
  techString = techString.slice(0, techString.length - 2);

  return (
    <>
      <Head>
        <title>{`Charles Ukasoanya - ${project.title}`}</title>
        <meta
          name="description"
          content={`${project.title} project built by Charles Ukasoanya. ${project.summary}`}
        />
        <link rel="icon" href={urlFor(pageInfo.profilePic).url()} />
      </Head>
      <Navbar pageInfo={pageInfo} project={project} slug={slug} />
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            src={urlFor(project.image).url()}
            alt={`${project.title}-hero-image`}
            fill
            className="absolute z-1 object-cover"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h1 className="py-2">{project.title}</h1>
            <h3>{techString}</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="md:col-span-3 xl:col-span-4">
            <h2 className="uppercase text-sm md:text-lg lg:text-xl  text-gray-500 pb-2 tracking-[15px]">
              Project
            </h2>
            <h3 className="py-2 text-lg md:text-xl">Overview</h3>
            <p>{project.summary}</p>

            <a href={project.linkToBuild} target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            </a>

            <a href={project.linkToCode} target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4">Code</button>
            </a>
          </div>

          <div className="md:col-span-2 xl:col-span-1 shadow-lg shadow-red-600 rounded-xl p-4 md:w-64">
            <h3 className="uppercase mt-5 md:mt-0 md:text-center font-bold pb-2 mb-2 tracking-[4px] ">
              Technologies
            </h3>

            <div className="grid grid-cols-3 md:flex flex-col">
              {project.technologies.map((tech) => (
                <div
                  key={tech._id}
                  className="flex items-center space-x-2 py-2"
                >
                  <div className="relative w-5 h-5 md:w-10 md:h-10">
                    <Image
                      src={urlFor(tech.image).url()}
                      alt={tech.title}
                      fill
                    />
                  </div>{' '}
                  <p className="text-gray-300 py-2 flex items-center">
                    {tech.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href="/#project">
          <p className="underline cursor-pointer font-bold max-w-[1240px] ml-5 lg:ml-auto mr-auto  mt-8 px-6 py-6 md:p-0">
            Back
          </p>
        </Link>
      </div>
    </>
  );
};

export default ProjectDetails;

export const getStaticPaths = async () => {
  const query = groq`*[_type == "project"] {
        slug {
            current
        }
    }`;

  const projects: any = await sanityClient.fetch(query);

  const paths = projects.map((project: any) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const pageInfo: PageInfo = await fetchPageInfo();
  //   const experiences: Experience[] = await fetchExperiences();
  //   const skills: Skill[] = await fetchSkills();
  //   const projects: Project[] = await fetchProjects();
  //   const socials: Social[] = await fetchSocials();

  const query = groq`*[_type == 'project' && slug.current == '${slug}'][0]{
    ...,
    technologies[]->
  }`;

  const project: Project = await sanityClient.fetch(query);

  return {
    props: {
      pageInfo,
      project,
      slug,
      //   experiences,
      //   skills,
      //   projects,
      //   socials,
    },

    // Next.js will attempt to re-generate the page:
    // when a request comes in
    // at most once every 10 seconds
    revalidate: 10,
  };
};
