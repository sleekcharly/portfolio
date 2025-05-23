import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// components
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import Link from 'next/link';

export const metadata = {
  title: 'Charles Ukasoanya | Telecommunications & Software Engineer',
  description:
    'Portfolio of Charles Ukasoanya – bridging telecommunications and software engineering with innovative, user-centric digital solutions.',
  keywords: [
    'Charles Ukasoanya',
    'Telecommunications Engineer',
    'Software Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Frontend Developer',
  ],
};

export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full max-w-[85%]">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <header className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Telecommunications & Software Engineer
            </span>
            <h1 className="h1 mb-6 mt-6">
              Hello, I&apos;m
              <br /> <span className="text-accent">Charles Ukasoanya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I bridge the gap between telecommunications and software by
              crafting intelligent, user-centered digital solutions that enhance
              connectivity, optimize systems, and deliver impactful user
              experiences across platforms.
            </p>

            {/* Btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="/charles-ukasoanya-cv.pdf"
                target={`_blank`}
                download={true}
              >
                <Button
                  className="uppercase flex items-center gap-2 cursor-pointer"
                  size="lg"
                  variant="outline"
                  aria-label="Download Charles Ukasoanya CV"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </header>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </main>
  );
}
