import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

// components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

import Script from 'next/script';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrainsMono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Charles Ukasoanya',
  description: 'The personal website of software developer, Charles Ukasoanya',
  keywords: [
    'Charles Ukasoanya',
    'Software Developer',
    'Web Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
  ],
  authors: [
    { name: 'Charles Ukasoanya', url: 'https://www.devcharles.vercel.app' },
  ],
  creator: 'Charles Ukasoanya',
  openGraph: {
    title: 'Charles Ukasoanya | Software Developer',
    description:
      'Explore the portfolio of Charles Ukasoanya, a passionate software developer building modern, responsive web applications.',
    url: 'https://www.devcharles.vercel.app',
    siteName: 'Charles Ukasoanya Portfolio',
    images: [
      {
        url: 'https://devcharles.vercel.app/assets/og-image.jpg',
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
      'Visit my portfolio and see the projects I’ve built with React, Next.js, and more.',
    site: '@sleekcharly',
    creator: '@sleekcharly',
    images: ['https://devcharles.vercel.app/assets/og-image.jpg'],
  },
  metadataBase: new URL('https://www.devcharles.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          id="ld+json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Charles Ukasoanya',
              url: 'https://www.devcharles.vercel.app',
              jobTitle: 'Software Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Ping Telecoms',
              },
              sameAs: [
                'https://www.linkedin.com/in/ukasoanya-charles/',
                'https://github.com/sleekcharly',
              ],
            }),
          }}
        />
      </head>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>

        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
