import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { PageInfo } from '../../typings';

// groq query to get pageInfo from sanity
// do this way for fields with referencies
const query = groq`
    *[_type == 'pageInfo'][0]
`;

// type for Project
// type for Project need to be defined in typings.d.ts file
type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  // return projects
  res.status(200).json({ pageInfo });
}
