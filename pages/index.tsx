// import type { GetStaticProps } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import About from '../components/About';
// import ContactMe from '../components/ContactMe';
// import WorkExperience from '../components/Experience';
// import Header from '../components/Header';
// import Hero from '../components/Hero';
// import Projects from '../components/Projects';
// import Skills from '../components/Skills';
// import profilePic from '../public/images/charles2.jpg';
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
//     <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#B22222]">
//       <Head>
//         <title>Charles Ukasoanya</title>
//         <meta
//           name="description"
//           content="The personal website of software developer, Charles Ukasoanya"
//         />
//         <link rel="icon" href={urlFor(pageInfo.profilePic).url()} />
//       </Head>

//       {/* Header */}
//       <Header socials={socials} />

//       {/* Hero */}
//       <section id="hero" className="snap-start">
//         <Hero pageInfo={pageInfo} />
//       </section>

//       {/* About */}
//       <section id="about" className="snap-center">
//         <About pageInfo={pageInfo} />
//       </section>

//       {/* Experience */}
//       <section id="experience" className="snap-center">
//         <WorkExperience experiences={experiences} />
//       </section>

//       {/* Skills */}
//       <section id="skills" className="snap-start">
//         <Skills skills={skills} />
//       </section>

//       {/* Projects */}
//       <section id="projects" className="snap-start">
//         <Projects projects={projects} />
//       </section>

//       {/* Contact Me */}
//       <section id="contact" className="snap-start">
//         <ContactMe />
//       </section>

//       <Link href="#hero">
//         <footer className="sticky bottom-5 w-full cursor-pointer">
//           <div className="flex items-center justify-center">
//             <div className="relative w-10 h-10 cursor-pointer">
//               <Image
//                 src={profilePic}
//                 alt="Charles Ukasoanya"
//                 layout="fill"
//                 className="rounded-full filter grayscale hover:grayscale-0"
//               />
//             </div>
//           </div>
//         </footer>
//       </Link>
//     </div>
//   );
// };

// export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
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
import About from '../components/About';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

// create types for props
type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Head>
        <title>Charles Ukasoanya</title>
        <meta
          name="description"
          content="The personal website of software developer, Charles Ukasoanya"
        />
        <link rel="icon" href="/images/charles2.jpg" />
      </Head>

      <Navbar />
      <Main />
      <About />
    </>
  );
};

export default Home;
