import React from 'react';
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:c_ukasoanya@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col mt-10 space-y-10">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="decoration-[#B22222]/50 underline">Lets Talk.</span>
        </h4>

        <div className="ml-10 md:ml-0 space-y-10">
          <div className="flex items-center space-x-5 jsutify-center">
            <PhoneIcon className="text-[#B22222] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+234-7030832025</p>
          </div>

          <div className="flex items-center space-x-5 jsutify-center">
            <EnvelopeIcon className="text-[#B22222] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">c_ukasoanya@yahoo.com</p>
          </div>

          <div className="flex items-center space-x-5 jsutify-center">
            <MapIcon className="text-[#B22222] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Lagos, Nigeria</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-[90%] md:w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#B22222] py-5 px-10 rounded-md text-white font-bold text'lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
