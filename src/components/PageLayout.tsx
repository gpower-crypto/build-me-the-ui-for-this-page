import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden relative">
      {/* Radiant Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-[#F5F2F0]/60 blur-[120px] animate-pulse transition-opacity duration-1000" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-[#E6DED8]/40 blur-[100px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-[30%] right-[15%] w-[30%] h-[30%] rounded-full bg-[#FDFBF9]/80 blur-[80px]" />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
