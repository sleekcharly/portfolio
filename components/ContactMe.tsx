import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { animateScroll as scroll } from 'react-scroll';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  // scroll to top of age
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [error, setError] = useState('');

  //  function for handling messages
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(form.current?.user_name.value);
    if (
      form.current?.user_name.value &&
      form.current?.user_email.value &&
      form.current?.subject.value &&
      form.current?.message.value
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY,
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current?.reset();
            scrollToTop();
            setError('');
            toast.success('Email sent successfully');
          },
          (error) => {
            console.log(error.text);
          },
        );
    } else {
      console.log('no form data to send');
      setError('Please fill in all fields of the form!');
      return;
    }
  };

  return (
    <section className="w-full lg:h-screen" id="contact">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className="uppercase text-sm md:text-lg lg:text-xl  text-gray-500 pb-2 tracking-[15px]">
          Contact
        </h2>
        <h3 className="py-4 text-lg md:text-xl">Get In Touch</h3>
        <div className="md:grid md:grid-cols-5 gap-8">
          {/* left */}
          <section className="md:col-span-2 w-full h-full shadow-lg shadow-red-600 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <div className="relative w-80 h-56 md:w-[250px] md:h-[140px] lg:w-[330px] lg:h-[210px] xl:w-[420px] xl:h-[280px]">
                  <Image
                    src={urlFor(pageInfo.contactImage).url()}
                    alt="field lights theme wallpaper"
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    fill
                  />
                </div>
              </div>

              <div>
                <h2 className="py-2">{pageInfo.name}</h2>
                <h3>SOFTWARE ENGINEER</h3>
                <p className="py-4">
                  I have got just what you need. Contact me and let&apos;s talk
                </p>
              </div>
              <div>
                <p className="uppercase">Connect with me.</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-red-600 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
                    <SocialIcon
                      url="https://github.com/sleekcharly"
                      fgColor="gray"
                      bgColor="transparent"
                    />
                  </div>
                  <div className="rounded-full shadow-lg shadow-red-600 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
                    <SocialIcon
                      url="https://twitter.com/sleekcharly"
                      fgColor="gray"
                      bgColor="transparent"
                    />
                  </div>
                  <div className="rounded-full shadow-lg shadow-red-600 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
                    <SocialIcon
                      url="https://www.linkedin.com/in/ukasoanya-charles/"
                      fgColor="gray"
                      bgColor="transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* right */}
          <section className="md:col-span-3 w-full h-auto shadow-lg shadow-red-600 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col py-2 md:grid md:grid-cols-2 md:justify-between gap-5">
                  <div className="flex flex-col md:flex-1 py-2">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      name="user_name"
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-800 font-semibold"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col md:flex-1 py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      name="user_email"
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-800 font-semibold"
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-800 font-semibold"
                    type="text"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300 text-gray-800 font-semibold"
                    rows={6}
                  ></textarea>
                </div>

                <button className="w-full text-gray-100 p-4 mt-4">
                  <input type="submit" value="Send Message" />
                </button>

                {error && <p className="mt-5 text-white">*** {error} ***</p>}
              </form>
            </div>
          </section>
        </div>
      </div>

      <div className="flex justify-center py-4">
        <Link href="/" onClick={() => scrollToTop()}>
          <div className="relative w-10 h-10">
            <Image
              src={urlFor(pageInfo.profilePic).url()}
              alt="charles-photo scroll to top button"
              fill
              className="rounded-full shadow-lg shadow-gray-400 hover:scale-110 ease-in duration-300"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ContactMe;
