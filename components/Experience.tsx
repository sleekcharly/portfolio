import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

interface DetailsProps {
  position?: string;
  company?: string;
  companyLink?: string;
  time?: string;
  address?: string;
  work?: string;
}

// details component
const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>

        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] lg-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Senior Operations Manager / FullStack Developer"
            company="Ping Telecoms"
            companyLink="https://www.pingtelecoms.net"
            time="2018 - present"
            address="Lagos,  Nigeria"
            work="Implemented the re-development of the Ping Telecommunications website using JavaScript, Typescript, React.Js, Next.Js, Tailwind, AWS, and Sanity. Responsible for bug fixes and feature enhancement of the Ping Telecommunications website."
          />

          <Details
            position="FullStack Developer / Founder"
            company="Gistoracle Limited"
            companyLink="https://www.gistoracle.com"
            time="2019 - present"
            address="Lagos,  Nigeria"
            work="Created the Gistoracle Application using JavaScript, React, Next.Js, Tailwind, Material-UI, Firebase, and Algolia."
          />

          <Details
            position="Field Support Engineer / Front-end Engineer"
            company="Ping Telecoms"
            companyLink="https://www.pingtelecoms.net"
            time="2014 - 2016"
            address="Lagos,  Nigeria"
            work="Developed and deployed the company's website using HTML, CSS, JavaScript, and PHP. Maintained Automatic Weather Observation System for Airstrips, Oil production swamps, and Offshore Oil production platforms ensuring effective flight advisory plans."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
