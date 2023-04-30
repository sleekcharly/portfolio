import React from 'react';

interface LayoutProps {
  className?: string;
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
