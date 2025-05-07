import Link from 'next/link';
import { Button } from './ui/button';

// components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto max-w-[85%] flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Charles<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="cursor-pointer">Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
