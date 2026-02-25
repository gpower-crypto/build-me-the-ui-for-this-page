import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section 
      className="w-full h-[691px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Radiant Overlays */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
      
      <div className="relative z-10 w-full max-w-[90%] md:w-[600px] flex flex-col items-center gap-[16px] text-center px-4">
        <h1 className="text-white text-[48px] md:text-[70px] font-normal leading-[1.1] md:leading-[1.2] tracking-[0.0028em] whitespace-pre-line drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-[18px] md:text-[24px] font-normal leading-[1.385] whitespace-pre-line drop-shadow-sm opacity-90">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
