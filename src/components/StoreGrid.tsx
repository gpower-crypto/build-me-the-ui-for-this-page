import React from 'react';
import StoreCard from './StoreCard';

/**
 * StoreGrid Component
 * 
 * Replicates the stores grid section from Figma.
 * Uses the StoreCard component to display individual store locations.
 * 
 * Figma Node ID: 10:768 (Section)
 */

interface StoreData {
  city: string;
  name: string;
  image: string;
}

const stores: StoreData[] = [
  {
    city: 'SEATTLE',
    name: 'University Village',
    image: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=800&auto=format&fit=crop',
  },
  {
    city: 'SAN FRANCISCO',
    name: 'Valencia Street, San Francisco',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop',
  },
  {
    city: 'PALO ALTO',
    name: 'Stanford',
    image: 'https://images.unsplash.com/photo-1533632359083-0185df1be85d?q=80&w=800&auto=format&fit=crop',
  },
  {
    city: 'LOS ANGELES',
    name: 'Abbot Kinney',
    image: 'https://images.unsplash.com/photo-1542736663-56019970deee?q=80&w=800&auto=format&fit=crop',
  },
  {
    city: 'BOSTON',
    name: 'Seaport',
    image: 'https://images.unsplash.com/photo-1501973906020-64358897ed5f?q=80&w=800&auto=format&fit=crop',
  },
  {
    city: 'NEW YORK',
    name: 'Prince Street, New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop',
  },
  {
    city: 'BROOKLYN',
    name: 'Williamsburg',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
  },
  {
    city: 'KING OF PRUSSIA',
    name: 'King of Prussia',
    image: 'https://images.unsplash.com/photo-1519451241324-207602394a45?q=80&w=800&auto=format&fit=crop',
  },
  {
    city: 'GEORGETOWN',
    name: 'Georgetown',
    image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?q=80&w=800&auto=format&fit=crop',
  },
];

const StoreGrid: React.FC = () => {
  return (
    <section 
      className="flex flex-col items-center w-full bg-white px-[35px] py-[30px] gap-[64px]"
      aria-labelledby="stores-heading"
    >
      {/* Header Section - Node ID: 10:734 */}
      <div className="flex flex-col items-center gap-[16px] w-full max-w-[1330px]">
        <h2 
          id="stores-heading"
          className="font-['Maison_Neue',sans-serif] text-[32px] leading-[1.25] text-[#000000] text-center"
        >
          Stores
        </h2>
        <p className="font-['Maison_Neue',sans-serif] text-[16px] leading-[1.5] tracking-[0.04em] text-[#000000] text-center md:text-left w-full md:w-auto">
          Find one of our 11 stores nearest you.
        </p>
      </div>

      {/* Grid Section - Composed of nodes 10:751, 10:752, 10:769 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[64px] w-full max-w-[1330px]">
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
  );
};

export default StoreGrid;
