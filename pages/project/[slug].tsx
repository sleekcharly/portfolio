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
};

const ProjectDetails = ({ pageInfo, project }: Props) => {
  const techs = project.technologies.map((tech) => `${tech.title} `);
  let techString = techs.join(' ').replace(/\s+/g, ' / ');
  techString = techString.slice(0, techString.length - 2);

  return (
    <>
      <Head>
        <title>{`Charles Ukasoanya - ${project.title}`}</title>
        <meta
          name="description"
          content={`${project.title} project built by Charles Ukasoanya`}
        />
        <link rel="icon" href={urlFor(pageInfo.profilePic).url()} />
      </Head>
      <Navbar pageInfo={pageInfo} />
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
            <h2 className="py-2">{project.title}</h2>
            <h3>{techString}</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>{project.summary}</p>

            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            <button className="px-8 py-2 mt-4">Code</button>
          </div>

          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <p className="text-center font-bold pb-2">Technologies</p>

            <div className="grid grid-cols-3 md:grid-cols-1">
              {project.technologies.map((tech) => (
                <div key={tech._id} className="flex items-center">
                  <div className="relative w-5 h-5">
                    <Image
                      src={urlFor(tech.image).url()}
                      alt={tech.title}
                      fill
                    />
                  </div>{' '}
                  <p className="text-gray-600 py-2 flex items-center">
                    {tech.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/#project">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
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
