// utility function to get projects

import { Project } from '../typings';

export const fetchProjects = async () => {
  const dev = process.env.NODE_ENV !== 'production';
  const res = await fetch(
    `${
      dev ? process.env.NEXT_PUBLIC_BASE_URL : process.env.VERCEL_URL
    }/api/getProjects`,
  );

  const data = await res.json();
  const projects: Project[] = data.projects;

  // console.log('fetching', projects)

  return projects;
};
