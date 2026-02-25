import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoreGrid from '../components/StoreGrid';

/**
 * Stores Page Component
 * 
 * This page represents the Store Locator flow.
 * It assembles the Header, StoreGrid (which includes the hero text and store list), and Footer.
 * 
 * Figma Node ID: 10:906
 */
const Stores: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Maison_Neue',sans-serif]">
      {/* Header - Node ID: 10:785 */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* StoreGrid - Node ID: 10:768 (Section) */}
        {/* This component contains the title "Stores", subtitle, and the responsive grid of store locations. */}
        <StoreGrid />
      </main>

      {/* Footer - Node ID: 10:855 */}
      <Footer />
    </div>
  );
};

export default Stores;
