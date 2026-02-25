import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * StoreCard Component
 * 
 * Replicates the store card design from Figma.
 * Uses shadcn/ui Card and Button components as per specification.
 * 
 * Figma Node ID: 10:740 (and similar instances in 10:768)
 */

interface StoreCardProps {
  city: string;
  name: string;
  image: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ city, name, image }) => {
  return (
    <div className="flex flex-col gap-[8px] w-full group animate-in fade-in duration-500">
      {/* Card wrapper for the image section */}
      <Card className="border-none shadow-none bg-transparent overflow-hidden rounded-none">
        <div className="h-[280px] w-full overflow-hidden">
          <img 
            src={image} 
            alt={`${city} - ${name}`} 
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Card>

      {/* Text content section */}
      <div className="flex flex-col gap-[4px] w-full">
        {/* City name - Text/100 style */}
        <span className="font-['Maison_Neue',sans-serif] text-[10px] leading-[1.6] tracking-[0.1em] text-[#000000] uppercase">
          {city}
        </span>

        {/* Store name - Text/400 style, using Button component for interactivity */}
        <Button 
          variant="ghost" 
          className="p-0 h-auto justify-start font-['Maison_Neue',sans-serif] text-[16px] leading-[1.5] tracking-[0.04em] text-[#000000] hover:bg-transparent hover:underline text-left whitespace-normal font-normal"
        >
          {name}
        </Button>
      </div>
    </div>
  );
};

export default StoreCard;
