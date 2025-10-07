import { serviceData } from '@/assets/data';
import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I help organizations bridge the gap between engineering operations,
        telecommunications, and software systems.
        {/*With experience leading major
        ICT and weather monitoring installations for Chevron facilities across
        Nigeria, I bring proven expertise in delivering reliable infrastructure.
        Beyond field operations, I develop custom software and web applications
        that enable real-time data visualization and smarter decision-making. My
        focus is on driving digital transformation and operational efficiency
        through innovative, end-to-end technology solutions. */}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, iconDark, title, description }, index) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
