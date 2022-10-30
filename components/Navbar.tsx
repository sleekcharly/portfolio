import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';
import { urlFor } from '../sanity';
import { PageInfo, Project } from '../typings';
import { motion } from 'framer-motion';
type Props = {
  pageInfo: PageInfo;
  project?: Project;
  slug?: string;
};

const Navbar = ({ pageInfo }: Props) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `#b22222` }}
      className={
        shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="relative w-10 h-10 md:w-14 md:h-14"
          >
            <Image
              src={urlFor(pageInfo.profilePic).url()}
              alt={`${pageInfo.name}-image`}
              fill
              className="rounded-full"
            />
          </motion.div>
        </Link>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <ul style={{ color: 'white' }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                Skills
              </li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                Contact
              </li>
            </Link>
          </ul>

          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </motion.div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-[#292929] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <div className="relative w-10 h-10">
                  <Image
                    src={urlFor(pageInfo.profilePic).url()}
                    alt="/"
                    fill
                    className="rounded-full"
                  />
                </div>
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-red-600 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b-2 border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-semibold">
                let&apos;s build something legendary together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <nav className="font-bold">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>

                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>

                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>

                <Link href="/#project">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>

                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>

            <div className="mt-16">
              <p className="uppercase text-sm text-gray-500 tracking-[15px]">
                Let&apos;s Connect
              </p>

              <div className="flex items-center justify-between my-2 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-red-600 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SocialIcon
                    url="https://github.com/sleekcharly"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>
                <div className="rounded-full shadow-lg shadow-red-600 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SocialIcon
                    url="https://twitter.com/sleekcharly"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>
                <div className="rounded-full shadow-lg shadow-red-600 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SocialIcon
                    url="https://www.linkedin.com/in/ukasoanya-charles/"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>
                <div className="rounded-full shadow-lg shadow-red-600  cursor-pointer hover:scale-105 ease-in duration-300">
                  <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
