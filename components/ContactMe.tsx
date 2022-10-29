// import React from 'react';
// import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
// import { useForm, SubmitHandler } from 'react-hook-form';

// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// type Props = {};

// function ContactMe({}: Props) {
//   const { register, handleSubmit } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (formData) => {
//     window.location.href = `mailto:c_ukasoanya@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
//   };

//   return (
//     <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
//         Contact
//       </h3>

//       <div className="flex flex-col mt-10 space-y-10">
//         <h4 className="text-xl md:text-4xl font-semibold text-center">
//           I have got just what you need.{' '}
//           <span className="decoration-[#B22222]/50 underline">Lets Talk.</span>
//         </h4>

//         <div className="ml-10 md:ml-0 space-y-10">
//           <div className="flex items-center space-x-5 jsutify-center">
//             <PhoneIcon className="text-[#B22222] h-7 w-7 animate-pulse" />
//             <p className="text-lg md:text-2xl">+234-7030832025</p>
//           </div>

//           <div className="flex items-center space-x-5 jsutify-center">
//             <EnvelopeIcon className="text-[#B22222] h-7 w-7 animate-pulse" />
//             <p className="text-lg md:text-2xl">c_ukasoanya@yahoo.com</p>
//           </div>

//           <div className="flex items-center space-x-5 jsutify-center">
//             <MapIcon className="text-[#B22222] h-7 w-7 animate-pulse" />
//             <p className="text-lg md:text-2xl">Lagos, Nigeria</p>
//           </div>
//         </div>

//         <form
//           className="flex flex-col space-y-2 w-[90%] md:w-fit mx-auto"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="flex flex-col space-y-2 md:flex-row md:space-x-2">
//             <input
//               {...register('name')}
//               placeholder="Name"
//               className="contactInput"
//               type="text"
//             />
//             <input
//               {...register('email')}
//               placeholder="Email"
//               className="contactInput"
//               type="email"
//             />
//           </div>

//           <input
//             {...register('subject')}
//             placeholder="Subject"
//             className="contactInput"
//             type="text"
//           />

//           <textarea
//             {...register('message')}
//             placeholder="Message"
//             className="contactInput"
//           />
//           <button
//             type="submit"
//             className="bg-[#B22222] py-5 px-10 rounded-md text-white font-bold text'lg"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactMe;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  return (
    <div className="w-full lg:h-screen" id="contact">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="md:grid md:grid-cols-5 gap-8">
          {/* left */}
          <div className="md:col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <div className="relative w-80 h-56">
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
                <p>SOFTWARE ENGINEER</p>
                <p className="py-4">
                  I have got just what you need. Contact me and let&apos;s talk
                </p>
              </div>
              <div>
                <p className="uppercase">Connect with me.</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
                    <SocialIcon
                      url="https://github.com/sleekcharly"
                      fgColor="gray"
                      bgColor="transparent"
                    />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
                    <SocialIcon
                      url="https://twitter.com/sleekcharly"
                      fgColor="gray"
                      bgColor="transparent"
                    />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
                    <SocialIcon
                      url="https://www.linkedin.com/in/ukasoanya-charles/"
                      fgColor="gray"
                      bgColor="transparent"
                    />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-300">
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

          {/* right */}
          <div className="md:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="flex flex-col py-2 md:flex-row md:justify-between gap-5">
                  <div className="flex flex-col md:flex-1 py-2">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col md:flex-1 py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={6}
                  ></textarea>
                </div>

                <button className="w-full text-gray-100 p-4 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4">
        <Link href="/">
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
    </div>
  );
};

export default ContactMe;
