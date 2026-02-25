import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />
      <main className="flex-grow flex flex-col items-center w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
