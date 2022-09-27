import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Charles Ukasoanya</title>
        <meta
          name="description"
          content="The personal website of software developer, Charles Ukasoanya"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-blue-800">My Awesome portfolio!</h1>
    </div>
  );
};

export default Home;
