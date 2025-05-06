'use client';

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('Sending ...');

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
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: '',
      });

      toast.success('Your message has been sent.');
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="xl:h-[54%] order-2 xl:order-none">
      <form
        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
        onSubmit={handleSubmit}
      >
        <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
        <p className="text-white/60">
          Have a project in mind or just want to say hello? I&apos;m always open
          to new opportunities and collaborations. Feel free to reach out!
        </p>
        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="text"
            placeholder="First name"
            name="first_name"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            disabled={status === 'Sending ...'}
          />
          <Input
            type="text"
            placeholder="Last name"
            name="last_name"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            disabled={status === 'Sending ...'}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'Sending ...'}
          />
          <Input
            type="tel"
            placeholder="Phone number"
            name="phone_number"
            id="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            disabled={status === 'Sending ...'}
          />
        </div>

        {/* textarea */}
        <Textarea
          className="h-[200px]"
          placeholder="Type your message here."
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'Sending ...'}
        />
        {/* btn */}
        <Button size="md" className="max-w-40 cursor-pointer" type="submit">
          {status === 'Sending ...' ? status : 'Send message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
