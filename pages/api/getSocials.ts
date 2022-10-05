import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Social } from '../../typings';

// groq query to get socials from sanity
const query = groq`
    *[_type == 'social']
`;

// type for social
// type for Social need to be defined in typings.d.ts file
type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const socials: Social[] = await sanityClient.fetch(query);

  // return socials
  res.status(200).json({ socials });
}
