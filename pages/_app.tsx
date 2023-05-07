// import '../styles/globals.css';
// import type { AppProps } from 'next/app';
// import { Toaster } from 'react-hot-toast';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Toaster />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

import React from 'react';
import '../styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

// set montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

const _app = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
};

export default _app;
