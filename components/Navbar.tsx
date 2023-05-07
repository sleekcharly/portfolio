// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { SocialIcon } from 'react-social-icons';
// import { urlFor } from '../sanity';
// import { PageInfo, Project } from '../typings';
// import { motion } from 'framer-motion';

// type Props = {
//   pageInfo: PageInfo;
//   project?: Project;
//   slug?: string;
// };

// const Navbar = ({ pageInfo }: Props) => {
//   const [nav, setNav] = useState(false);
//   const [shadow, setShadow] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   useEffect(() => {
//     const handleShadow = () => {
//       if (window.scrollY >= 90) {
//         setShadow(true);
//       } else {
//         setShadow(false);
//       }
//     };

//     window.addEventListener('scroll', handleShadow);
//   }, []);

//   return (
//     <div
//       style={{ backgroundColor: `#b22222` }}
//       className={
//         shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full z-[100]'
//       }
//     >
//       <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
//         <Link href="/">
//           <motion.div
//             initial={{
//               x: -500,
//               opacity: 0,
//               scale: 0.5,
//             }}
//             animate={{
//               x: 0,
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 1.5,
//             }}
//             className="relative w-10 h-10 md:w-14 md:h-14"
//           >
//             <Image
//               src={urlFor(pageInfo.profilePic).url()}
//               alt={`${pageInfo.name}-image`}
//               fill
//               className="rounded-full"
//             />
//           </motion.div>
//         </Link>

//         <motion.nav
//           initial={{ x: 500, opacity: 0, scale: 0.5 }}
//           animate={{
//             x: 0,
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             duration: 1.5,
//           }}
//         >
//           <ul style={{ color: 'white' }} className="hidden md:flex">
//             <Link href="/">
//               <li className="ml-10 text-sm uppercase hover:border-b font-bold">
//                 Home
//               </li>
//             </Link>
//             <Link href="/#about">
//               <li className="ml-10 text-sm uppercase hover:border-b font-bold">
//                 About
//               </li>
//             </Link>
//             <Link href="/#skills">
//               <li className="ml-10 text-sm uppercase hover:border-b font-bold">
//                 Skills
//               </li>
//             </Link>
//             <Link href="/#project">
//               <li className="ml-10 text-sm uppercase hover:border-b font-bold">
//                 Projects
//               </li>
//             </Link>
//             <Link href="/#contact">
//               <li className="ml-10 text-sm uppercase hover:border-b font-bold">
//                 Contact
//               </li>
//             </Link>
//           </ul>

//           <div className="md:hidden" onClick={handleNav}>
//             <AiOutlineMenu size={25} />
//           </div>
//         </motion.nav>
//       </div>

//       <div
//         className={
//           nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
//         }
//       >
//         <div
//           className={
//             nav
//               ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-[#292929] p-10 ease-in duration-500'
//               : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
//           }
//         >
//           <div>
//             <div className="flex w-full items-center justify-between">
//               <Link href="/" onClick={() => setNav(false)}>
//                 <div className="relative w-10 h-10">
//                   <Image
//                     src={urlFor(pageInfo.profilePic).url()}
//                     alt="Charles Ukasoanya"
//                     fill
//                     className="rounded-full"
//                   />
//                 </div>
//               </Link>

//               <div
//                 onClick={handleNav}
//                 className="rounded-full shadow-lg shadow-red-600 p-3 cursor-pointer"
//               >
//                 <AiOutlineClose />
//               </div>
//             </div>

//             <div className="border-b-2 border-gray-300 my-4">
//               <p className="w-[85%] md:w-[90%] py-4 font-semibold">
//                 let&apos;s build something legendary together
//               </p>
//             </div>
//           </div>

//           <div className="py-4 flex flex-col">
//             <nav className="font-bold">
//               <ul className="uppercase">
//                 <Link href="/">
//                   <li onClick={() => setNav(false)} className="py-4 text-sm">
//                     Home
//                   </li>
//                 </Link>

//                 <Link href="/#about">
//                   <li onClick={() => setNav(false)} className="py-4 text-sm">
//                     About
//                   </li>
//                 </Link>

//                 <Link href="/#skills">
//                   <li onClick={() => setNav(false)} className="py-4 text-sm">
//                     Skills
//                   </li>
//                 </Link>

//                 <Link href="/#project">
//                   <li onClick={() => setNav(false)} className="py-4 text-sm">
//                     Projects
//                   </li>
//                 </Link>

//                 <Link href="/#contact">
//                   <li onClick={() => setNav(false)} className="py-4 text-sm">
//                     Contact
//                   </li>
//                 </Link>
//               </ul>
//             </nav>

//             <div className="mt-16">
//               <p className="uppercase text-sm text-gray-500 tracking-[15px]">
//                 Let&apos;s Connect
//               </p>

//               <div className="flex items-center justify-between my-2 w-full sm:w-[80%]">
//                 <div className="rounded-full shadow-lg shadow-red-600 cursor-pointer hover:scale-105 ease-in duration-300">
//                   <SocialIcon
//                     url="https://github.com/sleekcharly"
//                     fgColor="gray"
//                     bgColor="transparent"
//                   />
//                 </div>
//                 <div className="rounded-full shadow-lg shadow-red-600 cursor-pointer hover:scale-105 ease-in duration-300">
//                   <SocialIcon
//                     url="https://twitter.com/sleekcharly"
//                     fgColor="gray"
//                     bgColor="transparent"
//                   />
//                 </div>
//                 <div className="rounded-full shadow-lg shadow-red-600 cursor-pointer hover:scale-105 ease-in duration-300">
//                   <SocialIcon
//                     url="https://www.linkedin.com/in/ukasoanya-charles/"
//                     fgColor="gray"
//                     bgColor="transparent"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from './Icons';
import Logo from './Logo';
import useThemeSwitcher from './hooks/useThemeSwitcher';

interface CustomLinkProps {
  title: string;
  className?: string;
  href: string;
  toggle?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  title,
  className = '',
  href,
}) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-bloock bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink: React.FC<CustomLinkProps> = ({
  title,
  className = '',
  href,
  toggle,
}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle && toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}

      <span
        className={`h-[1px] inline-bloock bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, toggleMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  //   function for handling change in mode
  const modeChange = () => {
    let currentMode = mode === 'light' ? 'dark' : 'light';
    toggleMode(currentMode);
  };

  //   handle click function for hamburger menu
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="hidden lg:flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      {/* destop navigation */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          {/* <CustomLink href="/blog" title="Blog" className="ml-4" /> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/sleekcharly"
            target={'_blank'}
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            className="w-6 mx-3 bg-light dark:bg-dark rounded-full"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/sleekcharly"
            target={'_blank'}
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ukasoanya-charles/"
            target={'_blank'}
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            className="w-6 ml-3"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={modeChange}
            className={`ml-2 flex items-center justify-center rounded-full p-1 ${
              mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            {mode === 'dark' ? (
              <SunIcon className={`fill-dark`} />
            ) : (
              <MoonIcon className={`fill-dark`} />
            )}
          </button>
        </nav>
      </div>

      {/* mobile navigation */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            {/* <CustomLink href="/blog" title="Blog" className="ml-4" /> */}
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://github.com/sleekcharly"
              target={'_blank'}
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/sleekcharly"
              target={'_blank'}
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ukasoanya-charles/"
              target={'_blank'}
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={modeChange}
              className={`ml-4 sm:ml-2 flex items-center justify-center rounded-full p-1 ${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
            >
              {mode === 'dark' ? (
                <SunIcon className={`fill-dark`} />
              ) : (
                <MoonIcon className={`fill-dark`} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
