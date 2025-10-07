import type { Metadata } from 'next';
import { Outfit as OutfitFont, Ovo as OvoFont } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

const outfit = OutfitFont({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const ovo = OvoFont({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio - Charles Ukasoanya',
  description: 'The personal website of software developer, Charles Ukasoanya',
  keywords: [
    'Charles Ukasoanya',
    'Software Developer',
    'Technology Leader',
    'Portfolio',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Django',
    'Machine Learning',
    'AI',
    'Cloud Computing',
    'AWS',
    'Azure',
    'DevOps',
    'Docker',
    'Kubernetes',
    'IoT & Software Innovator',
    'Digital Transformation',
    'Tech Enthusiast',
    'Coding',
    'Programming',
    'Software Engineer',
    'Tech Portfolio',
    'Web Applications',
    'Mobile Apps',
    'Open Source Contributor',
    'Tech Blog',
    'Software Projects',
    'Tech Resume',
    'Career in Tech',
    'Tech Skills',
    'Problem Solver',
    'Innovative Solutions',
    'Tech Community',
    'Software Architecture',
    'System Design',
    'Web Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Charles Ukasoanya', url: 'https://www.devcharles.com' }],
  creator: 'Charles Ukasoanya',
  openGraph: {
    title: 'Charles Ukasoanya | Software Developer',
    description:
      'Dynamic technology leader with a rare blend of Petroleum Engineering, Telecommunications, and Software Development expertise.Proven record of delivering large-scale infrastructure projects and creating real-time IoT/Software solutions for critical operations. Skilled at bridging hardware systems, cloud platforms, and business strategy to drive digital transformation and growth.',
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
      'Dynamic technology leader with a rare blend of Petroleum Engineering, Telecommunications, and Software Development expertise.Proven record of delivering large-scale infrastructure projects and creating real-time IoT/Software solutions for critical operations. Skilled at bridging hardware systems, cloud platforms, and business strategy to drive digital transformation and growth.',
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
              url: 'https://www.devcharles.com',
              jobTitle: 'Senior Operations Manager',
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
      <ThemeProvider>
        <body
          className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
        >
          {children}
        </body>
      </ThemeProvider>
      <Toaster position="bottom-right" richColors />
    </html>
  );
}
