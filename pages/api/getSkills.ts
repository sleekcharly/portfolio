import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Skill } from '../../typings';

// groq query to get skills from sanity
const query = groq`
    *[_type == 'skill']
`;

// type for skill
// type for Skill need to be defined in typings.d.ts file
type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const skills: Skill[] = await sanityClient.fetch(query);

  // return socials
  res.status(200).json({ skills });
}
