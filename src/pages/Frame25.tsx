import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoreCard from '../components/StoreCard';

/**
 * Store Locator Page
 * 
 * Replicates Frame 25 (ID: 253:1721)
 * Displays a list of physical store locations with images and names.
 */

const Frame25: React.FC = () => {
  const stores = [
    {
      city: "SEATTLE",
      name: "University Village",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      city: "SAN FRANCISCO",
      name: "Valencia Street, San Francisco",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
    },
    {
      city: "PALO ALTO",
      name: "Stanford",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop"
    },
    {
      city: "LOS ANGELES",
      name: "Abbot Kinney",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop"
    },
    {
      city: "BOSTON",
      name: "Seaport",
      image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop"
    },
    {
      city: "NEW YORK",
      name: "Prince Street, New York",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    },
    {
      city: "BROOKLYN",
      name: "Williamsburg",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800&auto=format&fit=crop"
    },
    {
      city: "KING OF PRUSSIA",
      name: "King of Prussia",
      image: "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?q=80&w=800&auto=format&fit=crop"
    },
    {
      city: "GEORGETOWN",
      name: "Georgetown",
      image: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Maison_Neue',sans-serif]">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <section className="flex flex-col items-center self-stretch gap-[64px] px-[20px] py-[30px] md:px-[35px] lg:px-[35px]">
          
          {/* Hero / Title Section */}
          <div className="flex flex-col items-center self-stretch gap-[16px]">
            <h1 className="w-full text-center text-[32px] leading-[1.25] text-[#000000] font-normal">
              Stores
            </h1>
            <p className="w-full text-center text-[16px] leading-[1.5] tracking-[0.04em] text-[#000000]">
              Find one of our 11 stores nearest you.
            </p>
          </div>

          {/* Stores Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full max-w-[1330px]">
            {stores.map((store, index) => (
              <StoreCard 
                key={`${store.city}-${index}`}
                city={store.city}
                name={store.name}
                image={store.image}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Frame25;
