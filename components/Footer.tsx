import Image from 'next/image';
import React from 'react';
import MailIcon from '@/public/icons/mail_icon.png';
import MailIconDark from '@/public/icons/mail_icon_dark.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="mt-20 flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center">
        <a href="#top" className="flex items-end cursor-pointer">
          <h2 className="text-3xl font-semibold">
            Charles <span className="text-red-800">.</span>
          </h2>
        </a>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={MailIcon}
            alt="Email Icon"
            className="w-6 dark:hidden"
            priority
          />
          <Image
            src={MailIconDark}
            alt="Email Icon"
            className="w-6 hidden dark:block"
          />
          c_ukasoanya@yahoo.com
        </div>
      </div>

      <div className="w-full max-w-[80%] text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Charles Ukasoanya. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/sleekcharly">
              <FaGithub size={25} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ukasoanya-charles/"
            >
              <FaLinkedin size={25} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/sleekcharly">
              <FaX size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
