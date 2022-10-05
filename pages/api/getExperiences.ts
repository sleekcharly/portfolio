import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Experience } from '../../typings';

// groq query to get experience from sanity
// do this way for fields with referencies
const query = groq`
    *[_type == 'experience'] {
        ...,
        technologies[]->
    }
`;

// type for Experience
// type for Experience need to be defined in typings.d.ts file
type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const experiences: Experience[] = await sanityClient.fetch(query);

  // return experience
  res.status(200).json({ experiences });
}
