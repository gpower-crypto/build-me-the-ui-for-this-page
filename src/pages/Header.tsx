import React from 'react';
import Header from '@/components/layouts/Header';

const HeaderPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1440px] mx-auto p-8">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Header Component Preview</h1>
          <p className="text-gray-600 max-w-2xl">
            This page demonstrates the replicated Header component from the Figma design. 
            The header includes the top announcement bar and the main navigation bar with 
            responsive layouts and interactive elements.
          </p>
        </div>
        
        {/* Placeholder for page content to demonstrate header scroll behavior if needed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[3/4] bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HeaderPage;
