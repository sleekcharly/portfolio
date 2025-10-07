'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ArrowRightWhite from '@/public/icons/right-arrow-white.png';

// type Props = {}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const { success } = await res.json();

      if (success) {
        setStatus('Message sent successfully!');

        setFormData({
          name: '',
          email: '',
          message: '',
        });

        //   toast.success('Your message has been sent.');
      }
    } catch (e) {
      console.error('error: ', e);
      setLoading(false);
      setStatus('Failed to send message.');
    } finally {
      setLoading(false);
      setStatus('');
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;m always happy to connect! Feel free to reach out with any
        questions, comments, or feedback using the form below.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            disabled={status === 'Sending...'}
          />
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90"
            disabled={status === 'Sending...'}
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter your message"
          id="message"
          value={formData.message}
          name="message"
          onChange={handleChange}
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90"
          disabled={status === 'Sending...'}
        />

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now{' '}
          <Image
            src={ArrowRightWhite}
            alt="Summit button arrow"
            className="w-4"
            priority
          />
        </button>

        <p className="mt-4">{status}</p>
      </form>
    </div>
  );
};

export default Contact;
