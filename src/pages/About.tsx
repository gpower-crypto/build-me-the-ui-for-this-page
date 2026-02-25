import React from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';

const About: React.FC = () => {
  return (
    <PageLayout>
      {/* Section 01: Hero */}
      <HeroSection 
        title={"We believe\nwe can all make\na difference."}
        subtitle={"Our way: Exceptional quality.\nEthical factories. Radical Transparency."}
        backgroundImage="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1400&auto=format"
      />

      {/* Section 02: Intro Text */}
      <section className="w-full py-[60px] md:py-[100px] px-[20px] md:px-[258px] flex justify-center bg-gradient-to-b from-white to-[#FDFBF9]">
        <p className="text-[#000000] text-[24px] md:text-[38px] font-normal leading-[1.4] tracking-[0.0053em] text-center max-w-[884px] animate-in fade-in slide-in-from-bottom-4 duration-1000">
          At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.
        </p>
      </section>

      {/* Section 03: Factories */}
      <section className="w-full flex flex-col md:flex-row md:h-[600px] bg-gradient-to-br from-[#F5F2F0] via-[#E6DED8] to-[#D9D1C9] relative overflow-hidden">
        {/* Radiant highlight */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="w-full md:flex-1 h-[300px] md:h-full relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558444479-c8f010524f06?w=800&auto=format" 
            alt="Our Factories" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="w-full md:flex-1 flex flex-col justify-center items-start p-[40px] md:px-[70px] gap-[20px] relative z-10">
          <div className="flex flex-col gap-[8px]">
            <span className="text-[#000000] text-[12px] font-semibold leading-[1.33] tracking-[0.016em] uppercase">Our Factories</span>
            <h2 className="text-[#000000] text-[32px] md:text-[40px] font-normal leading-[1.2] tracking-[0.005em]">Our ethical approach.</h2>
          </div>
          <p className="text-[#000000]/80 text-[14px] md:text-[15px] leading-[1.6] tracking-[0.02em] max-w-[450px]">
            We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.
          </p>
        </div>
      </section>

      {/* Big Image 1 */}
      <section className="w-full h-[400px] md:h-[637px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?w=1400&auto=format" 
          alt="Fabric detail" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* Section 04: Quality */}
      <section className="w-full flex flex-col-reverse md:flex-row md:h-[600px] bg-gradient-to-bl from-[#F5F2F0] via-[#E6DED8] to-[#D9D1C9] relative overflow-hidden">
        {/* Radiant highlight */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="w-full md:flex-1 flex flex-col justify-center items-start p-[40px] md:px-[70px] gap-[20px] relative z-10">
          <div className="flex flex-col gap-[8px]">
            <span className="text-[#000000] text-[12px] font-semibold leading-[1.33] tracking-[0.016em] uppercase">Our Quality</span>
            <h2 className="text-[#000000] text-[32px] md:text-[40px] font-normal leading-[1.2] tracking-[0.005em] whitespace-pre-line">
              {"Designed\nto last."}
            </h2>
          </div>
          <p className="text-[#000000]/80 text-[14px] md:text-[15px] leading-[1.6] tracking-[0.02em] max-w-[450px]">
            At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.
          </p>
        </div>
        <div className="w-full md:flex-1 h-[300px] md:h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format" 
            alt="Our Quality" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* Big Image 2 */}
      <section className="w-full h-[400px] md:h-[560px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1400&auto=format" 
          alt="People wearing Everlane" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* Section 05: Prices */}
      <section className="w-full flex flex-col md:flex-row md:h-[600px] bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,242,240,0.5),transparent_70%)]" />
        
        <div className="w-full md:flex-1 h-[300px] md:h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1556742049-02e49f30b46c?w=800&auto=format" 
            alt="Our Prices" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="w-full md:flex-1 flex flex-col justify-center items-start p-[40px] md:px-[70px] gap-[20px] relative z-10">
          <div className="flex flex-col gap-[8px]">
            <span className="text-[#000000] text-[12px] font-semibold leading-[1.33] tracking-[0.016em] uppercase">Our Prices</span>
            <h2 className="text-[#000000] text-[32px] md:text-[40px] font-normal leading-[1.2] tracking-[0.005em]">Radically Transparent.</h2>
          </div>
          <p className="text-[#000000]/80 text-[14px] md:text-[15px] leading-[1.6] tracking-[0.02em] max-w-[450px]">
            We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.
          </p>
        </div>
      </section>

      {/* Section 06: More to Explore */}
      <section className="w-full py-[60px] md:py-[100px] px-[20px] md:px-[200px] flex flex-col items-center gap-[40px] bg-gradient-to-t from-[#FDFBF9] to-white">
        <h2 className="text-[#000000] text-[28px] md:text-[32px] font-normal leading-[1.25] text-center">More to Explore</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          {/* Card 1 */}
          <div className="flex flex-col gap-[16px] group cursor-pointer">
            <div className="w-full h-[250px] overflow-hidden bg-gray-100 rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&auto=format" 
                alt="Our Products" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#262626] text-[16px] font-semibold leading-[1.5] tracking-[0.0125em]">Our Products</h3>
              <div className="w-0 h-[1px] bg-black group-hover:w-8 transition-all duration-300" />
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-[16px] group cursor-pointer">
            <div className="w-full h-[250px] overflow-hidden bg-gray-100 rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&auto=format" 
                alt="Our Stores" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#262626] text-[16px] font-semibold leading-[1.5] tracking-[0.0125em]">Our Stores</h3>
              <div className="w-0 h-[1px] bg-black group-hover:w-8 transition-all duration-300" />
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-[16px] group cursor-pointer">
            <div className="w-full h-[250px] overflow-hidden bg-gray-100 rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1521737703345-bc469827ce93?w=400&auto=format" 
                alt="Careers" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#262626] text-[16px] font-semibold leading-[1.5] tracking-[0.0125em]">Careers</h3>
              <div className="w-0 h-[1px] bg-black group-hover:w-8 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
