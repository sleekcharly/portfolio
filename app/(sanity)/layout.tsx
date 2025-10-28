import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - Charles Ukasoanya',
  description:
    'The personal website of Charles Ukasoanya — a software developer with a unique blend of telecommunications, petroleum engineering, and cloud technology expertise. Explore projects, experience, and insights at the intersection of hardware and software.',
  keywords: [
    'Charles Ukasoanya',
    'Software Developer',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'Cloud Computing',
    'IoT',
    'Full Stack Developer',
    'Web Development Portfolio',
    'Open Source Projects',
    'Frontend Developer',
  ],
  authors: [{ name: 'Charles Ukasoanya', url: 'https://www.devcharles.com' }],
  creator: 'Charles Ukasoanya',
  openGraph: {
    title: 'Charles Ukasoanya | Software Developer',
    description:
      'Software developer with a unique blend of telecommunications, petroleum engineering, and cloud expertise. Building scalable IoT and software solutions that bridge hardware, cloud, and business strategy.',
    url: 'https://www.devcharles.com',
    siteName: 'Charles Ukasoanya Portfolio',
    images: [
      {
        url: 'https://devcharles.com/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Charles Ukasoanya Portfolio Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charles Ukasoanya | Software Developer',
    description:
      'Software developer with a unique blend of telecommunications, petroleum engineering, and cloud expertise. Building scalable IoT and software solutions that bridge hardware, cloud, and business strategy.',
    site: '@sleekcharly',
    creator: '@sleekcharly',
    images: ['https://devcharles.com/assets/og-image.png'],
  },
  metadataBase: new URL('https://www.devcharles.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Charles Ukasoanya',
              jobTitle: 'Software Developer & Technology Leader',
              url: 'https://www.devcharles.com',
              sameAs: [
                'https://twitter.com/sleekcharly',
                'https://www.linkedin.com/in/charles-ukasoanya',
                'https://github.com/sleekcharly',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Ping Telecommunications Resources Limited',
              },
              alumniOf: 'Anglia Ruskin University, Cambridge United Kingdom',
              nationality: 'Nigerian',
              knowsAbout: [
                'Software Engineering',
                'IoT Systems',
                'Meteorological Installations',
                'Web Development',
                'Next.js',
                'Cloud Computing',
                'AWOS',
              ],
            }),
          }}
        />
      </head> */}

      <body>{children}</body>
    </html>
  );
}
