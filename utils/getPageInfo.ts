// utility function to get pageInfo

import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
  const dev = process.env.NODE_ENV !== 'production';
  const res = await fetch(
    `${
      dev ? process.env.NEXT_PUBLIC_BASE_URL : process.env.VERCEL_URL
    }/api/getPageInfo`,
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  // console.log('fetching', pageInfo)

  return pageInfo;
};
