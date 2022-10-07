// utility function to get socials

import { Social } from '../typings';

export const fetchSocials = async () => {
  const dev = process.env.NODE_ENV !== 'production';
  const res = await fetch(
    `${
      dev ? process.env.NEXT_PUBLIC_BASE_URL : process.env.VERCEL_URL
    }/api/getSocials`,
  );

  const data = await res.json();
  const socials: Social[] = data.socials;

  // console.log('fetching', socials)

  return socials;
};
