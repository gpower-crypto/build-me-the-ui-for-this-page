import React from 'react';
import Footer from '@/components/layouts/Footer';

const FooterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Spacer to push footer to bottom if content is short */}
      <main className="flex-grow flex items-center justify-center bg-white p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#262626] mb-4">Footer Component Preview</h1>
          <p className="text-[#737373]">Scroll down to see the footer implementation.</p>
        </div>
      </main>
      
      {/* The Footer Component */}
      <Footer />
    </div>
  );
};

export default FooterPage;
