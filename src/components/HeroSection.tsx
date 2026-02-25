import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section 
      className="w-full h-[691px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 w-[488px] flex flex-col items-center gap-[16px] text-center">
        <h1 className="text-white text-[70px] font-normal leading-[1.2] tracking-[0.0028em] whitespace-pre-line">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-[24px] font-normal leading-[1.385] whitespace-pre-line">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
