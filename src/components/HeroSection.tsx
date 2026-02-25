import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="w-full h-[691px] flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background with subtle parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out scale-110"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset * 0.2}px) scale(1.1)` 
        }}
      />
      
      {/* Radiant Overlays */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
      
      <div className="relative z-10 w-full max-w-[90%] md:w-[800px] flex flex-col items-center gap-[24px] text-center px-4">
        <h1 className="text-white text-[48px] md:text-[70px] font-normal leading-[1.1] md:leading-[1.2] tracking-[0.0028em] whitespace-pre-line drop-shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-[18px] md:text-[24px] font-normal leading-[1.385] whitespace-pre-line drop-shadow-md opacity-0 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-forwards">
            {subtitle}
          </p>
        )}
        
        <div className="mt-8 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards">
          <button className="px-8 py-4 bg-white text-black text-[14px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl">
            Shop the Collection
          </button>
        </div>
      </div>
      
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-white text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
