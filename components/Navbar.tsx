import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

const Navbar = ({ pageInfo }: Props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="relative w-10 h-10 md:w-14 md:h-14">
          <Image
            src={urlFor(pageInfo.profilePic).url()}
            alt="/"
            fill
            className="rounded-full"
          />
        </div>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="relative w-10 h-10">
                <Image
                  src={urlFor(pageInfo.profilePic).url()}
                  alt="/"
                  fill
                  className="rounded-full"
                />
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                let&apos;s build something legendary together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-28">
              <p className="'uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>

              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SocialIcon
                    url="https://github.com/sleekcharly"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SocialIcon
                    url="https://twitter.com/sleekcharly"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SocialIcon
                    url="https://www.linkedin.com/in/ukasoanya-charles/"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300">
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
