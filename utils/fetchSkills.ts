// utility function for getting skills
import { Skill } from '../typings';

export const fetchSkills = async () => {
  const dev = process.env.NODE_ENV !== 'production';
  const res = await fetch(
    `${
      dev ? process.env.NEXT_PUBLIC_BASE_URL : process.env.VERCEL_URL
    }/api/getSkills`,
  );

  const data = await res.json();
  const skills: Skill[] = data.skills;

  // console.log('fetching', skills)

  return skills;
};
