'use client';

import About from '../../components/About';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Services from '../../components/Services';
import Work from '../../components/Work';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
