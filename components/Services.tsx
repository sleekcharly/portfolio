'use client';

import { serviceData } from '@/assets/data';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I help organizations bridge the gap between engineering operations,
        telecommunications, and software systems.
        {/*With experience leading major
        ICT and weather monitoring installations for Chevron facilities across
        Nigeria, I bring proven expertise in delivering reliable infrastructure.
        Beyond field operations, I develop custom software and web applications
        that enable real-time data visualization and smarter decision-making. My
        focus is on driving digital transformation and operational efficiency
        through innovative, end-to-end technology solutions. */}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, iconDark, title, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[var(--box-shadow-black)] cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-[var(--box-shadow-white)]"
          >
            {iconDark ? (
              <Image
                src={iconDark}
                alt={`${title} icon`}
                className="w-10"
                priority
              />
            ) : (
              <Image
                src={icon}
                alt={`${title} icon`}
                className="w-10"
                priority
              />
            )}

            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            {/* <a href={link}>
                        Read more
                    </a> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
