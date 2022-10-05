import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Project } from '../../typings';

// groq query to get projects from sanity
// do this way for fields with referencies
const query = groq`
    *[_type == 'project'] {
        ...,
        technologies[]->
    }
`;

// type for Project
// type for Project need to be defined in typings.d.ts file
type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const projects: Project[] = await sanityClient.fetch(query);

  // return projects
  res.status(200).json({ projects });
}
