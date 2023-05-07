// // import type { GetStaticProps } from 'next';
// // import Head from 'next/head';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import About from '../components/About';
// // import ContactMe from '../components/ContactMe';
// // import WorkExperience from '../components/Experience';
// // import Header from '../components/Header';
// // import Hero from '../components/Hero';
// // import Projects from '../components/Projects';
// // import Skills from '../components/Skills';
// // import profilePic from '../public/images/charles2.jpg';
// // import { urlFor } from '../sanity';
// // import { Experience, PageInfo, Project, Skill, Social } from '../typings';
// // import { fetchExperiences } from '../utils/fetchExperiences';
// // import { fetchSkills } from '../utils/fetchSkills';
// // import { fetchSocials } from '../utils/fetchSocials';
// // import { fetchPageInfo } from '../utils/getPageInfo';
// // import { fetchProjects } from '../utils/getProjects';

// // // create types for props
// // type Props = {
// //   pageInfo: PageInfo;
// //   experiences: Experience[];
// //   skills: Skill[];
// //   projects: Project[];
// //   socials: Social[];
// // };

// // const Home = ({ projects, skills, socials, experiences, pageInfo }: Props) => {
// //   return (
// //     <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#B22222]">
// //       <Head>
// //         <title>Charles Ukasoanya</title>
// //         <meta
// //           name="description"
// //           content="The personal website of software developer, Charles Ukasoanya"
// //         />
// //         <link rel="icon" href={urlFor(pageInfo.profilePic).url()} />
// //       </Head>

// //       {/* Header */}
// //       <Header socials={socials} />

// //       {/* Hero */}
// //       <section id="hero" className="snap-start">
// //         <Hero pageInfo={pageInfo} />
// //       </section>

// //       {/* About */}
// //       <section id="about" className="snap-center">
// //         <About pageInfo={pageInfo} />
// //       </section>

// //       {/* Experience */}
// //       <section id="experience" className="snap-center">
// //         <WorkExperience experiences={experiences} />
// //       </section>

// //       {/* Skills */}
// //       <section id="skills" className="snap-start">
// //         <Skills skills={skills} />
// //       </section>

// //       {/* Projects */}
// //       <section id="projects" className="snap-start">
// //         <Projects projects={projects} />
// //       </section>

// //       {/* Contact Me */}
// //       <section id="contact" className="snap-start">
// //         <ContactMe />
// //       </section>

// //       <Link href="#hero">
// //         <footer className="sticky bottom-5 w-full cursor-pointer">
// //           <div className="flex items-center justify-center">
// //             <div className="relative w-10 h-10 cursor-pointer">
// //               <Image
// //                 src={profilePic}
// //                 alt="Charles Ukasoanya"
// //                 layout="fill"
// //                 className="rounded-full filter grayscale hover:grayscale-0"
// //               />
// //             </div>
// //           </div>
// //         </footer>
// //       </Link>
// //     </div>
// //   );
// // };

// // export default Home;

// // export const getStaticProps: GetStaticProps<Props> = async () => {
// //   const pageInfo: PageInfo = await fetchPageInfo();
// //   const experiences: Experience[] = await fetchExperiences();
// //   const skills: Skill[] = await fetchSkills();
// //   const projects: Project[] = await fetchProjects();
// //   const socials: Social[] = await fetchSocials();

// //   return {
// //     props: {
// //       pageInfo,
// //       experiences,
// //       skills,
// //       projects,
// //       socials,
// //     },

// //     // Next.js will attempt to re-generate the page:
// //     // when a request comes in
// //     // at modt once every 10 seconds
// //     revalidate: 10,
// //   };
// // };

// import Head from 'next/head';
// import About from '../components/About';
// import ContactMe from '../components/ContactMe';
// import Main from '../components/Main';
// import Navbar from '../components/Navbar';
// import Projects from '../components/Projects';
// import Skills from '../components/Skills';
// import { urlFor } from '../sanity';
// import { Experience, PageInfo, Project, Skill, Social } from '../typings';
// import { fetchExperiences } from '../utils/fetchExperiences';
// import { fetchSkills } from '../utils/fetchSkills';
// import { fetchSocials } from '../utils/fetchSocials';
// import { fetchPageInfo } from '../utils/getPageInfo';
// import { fetchProjects } from '../utils/getProjects';

// // create types for props
// type Props = {
//   pageInfo: PageInfo;
//   experiences: Experience[];
//   skills: Skill[];
//   projects: Project[];
//   socials: Social[];
// };

// const Home = ({ projects, skills, socials, experiences, pageInfo }: Props) => {
//   return (
//     <>
//       <Head>
//         <title>Charles Ukasoanya</title>
//         <meta
//           name="description"
//           content="The personal website of software developer, Charles Ukasoanya"
//         />
//         <link rel="icon" href={urlFor(pageInfo.profilePic).url()} />
//       </Head>

//       <Navbar pageInfo={pageInfo} />
//       <Main />
//       <About pageInfo={pageInfo} />
//       <Skills skills={skills} />
//       <Projects projects={projects} />
//       <ContactMe pageInfo={pageInfo} />
//     </>
//   );
// };

// export default Home;

// export const getStaticProps = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials,
//     },

//     // Next.js will attempt to re-generate the page:
//     // when a request comes in
//     // at modt once every 10 seconds
//     revalidate: 10,
//   };
// };

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '../components/AnimatedText';
import HireMe from '../components/HireMe';
import { LinkArrow } from '../components/Icons';
import Layout from '../components/Layout';
import TransitionEffect from '../components/TransitionEffect';
import profilePic from '../public/images/profile/profile1.png';
import lightBulb from '../public/images/svgs/miscellaneous_icons_1.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Charles Ukasoanya | Portfolio</title>
        <meta
          name="description"
          content="The personal website of software developer, Charles Ukasoanya"
        />
      </Head>

      <TransitionEffect />

      <main className="flex items-center dark:text-light text-dark w-full">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Charles Ukasoanya"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px)100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision into reality With Code."
                className="!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                A skilled full-stack developer with strong Background in
                Information and Communication Technology and ability as a self
                taught devloper (frontend-heavy and sufficient back-end
                proficiency), allowing me to create everything from small
                business websites to custom web applications.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/01Charles_Ukasoanya.pdf"
                  target={`_blank`}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-white hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>

                <Link
                  href="mailto:c_ukasoanya@yahoo.com"
                  target={`_blank`}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Charles ukasoanya"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
