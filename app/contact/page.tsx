'use client';

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+234) 803 786 6963',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'c_ukasoanya@yahoo.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Lagos, Nigeria',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form*/}
          <ContactForm />

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]" aria-hidden="true">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{item.title}</h3>

                      {item.title === 'Email' ? (
                        <a
                          href="mailto:c_ukasoanya@yahoo.com"
                          className="text-white/70 hover:underline"
                        >
                          {item.description}
                        </a>
                      ) : item.title === 'Phone' ? (
                        <a
                          href="tel:+2348037866963"
                          className="text-white/70 hover:underline"
                        >
                          {item.description}
                        </a>
                      ) : (
                        <address className="not-italic text-white/70">
                          {item.description}
                        </address>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
