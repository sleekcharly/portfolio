// utility function to get experiences

import { Experience } from '../typings';

export const fetchExperiences = async () => {
  const dev = process.env.NODE_ENV !== 'production';
  const res = await fetch(
    `${
      dev ? process.env.NEXT_PUBLIC_BASE_URL : process.env.VERCEL_URL
    }/api/getExperiences`,
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  // console.log('fetching', experiences)
  return experiences;
};
