import { defineQuery } from 'next-sanity';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Services from '../../components/Services';
import Work from '../../components/Work';
import { sanityFetch } from '@/sanity/lib/live';

// groq sanity query
const HERO_QUERY = defineQuery(`*[_id == "singleton-profile"][0]{
    firstName,
    lastName,
    headline,
    shortBio,
    ogImage,
    extendedBio,
    fullBio,
    profileImage,
    profileImageDark
}`);

export default async function Home() {
  const { data: profile } = await sanityFetch({ query: HERO_QUERY });

  if (!profile) {
    return null;
  }

  return (
    <main>
      <Header profile={profile} />
      <About profile={profile} />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}
