import React from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const articles = [
  {
    id: 1,
    title: 'How To Style Winter Whites',
    category: 'Style',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'We Won A Glossy Award',
    category: 'Transparency',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Coordinate Your Style: Matching Outfits for Everyone',
    category: 'Style',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Black Friday Fund 2023',
    category: 'Transparency',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'What to Wear this Season: Holiday Outfits & Ideas',
    category: 'Style',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Thanksgiving Outfit Ideas',
    category: 'Style',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop',
  },
];

const progressItems = [
  {
    id: 1,
    title: 'Carbon Commitment',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Environmental Initiatives',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Better Factories',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&auto=format&fit=crop',
  },
];

const Blog = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-['Maison_Neue']">
      <Header />

      <main className="flex-1">
        {/* Section 01: Hero */}
        <section className="w-full py-[64px] px-[60px] flex flex-col gap-[8px]">
          <div className="w-full h-[14px] bg-[#262626]"></div>
          <div className="flex flex-col">
            <h1 className="text-[160px] font-semibold leading-[1.1] text-[#000000] lowercase">
              everworld
            </h1>
            <p className="text-[24px] leading-[1.385] text-[#000000] mt-[8px] max-w-[900px]">
              We’re on a mission to clean up a dirty industry.<br />
              These are the people, stories, and ideas that will help us get there.
            </p>
          </div>
        </section>

        {/* Section 02: The Latest */}
        <section className="w-full py-[120px] px-[60px] flex flex-col gap-[12px]">
          <h2 className="text-[54px] font-semibold leading-[1.333] text-[#000000]">
            The Latest
          </h2>
          
          <div className="flex flex-col items-center gap-[40px] mt-[40px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[120px] w-full">
              {articles.map((article) => (
                <div key={article.id} className="flex flex-col gap-[20px]">
                  <div className="w-full aspect-[1/1.2] overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="text-[32px] leading-[1.25] text-[#000000] font-normal">
                      {article.title}
                    </h3>
                    <div className="flex">
                      <Badge variant="outline" className="rounded-full px-[20px] py-[4px] border-[#DDDBDC] text-[12px] font-semibold text-[#000000] uppercase tracking-wider">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="w-[240px] h-[54px] bg-[#262626] text-white rounded-[8px] text-[14px] font-semibold uppercase tracking-[0.03em] hover:bg-black transition-colors"
            >
              Load more Articles
            </Button>
          </div>
        </section>

        {/* Full Width Image Section */}
        <section className="w-full h-[225px]">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&auto=format&fit=crop" 
            alt="Everworld banner" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* Section 03: Our Progress */}
        <section className="w-full py-[120px] px-[60px] flex flex-col gap-[12px]">
          <h2 className="text-[54px] font-semibold leading-[1.333] text-[#000000]">
            Our Progress
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[40px]">
            {progressItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-[12px]">
                <div className="w-full h-[306px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[32px] leading-[1.25] text-[#000000] font-normal">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Social CTA */}
        <section className="w-full py-[90px] px-[60px] bg-[#000000] flex flex-col items-center gap-[32px]">
          <h2 className="text-[54px] font-semibold leading-[1.333] text-white text-center">
            Follow us on social for more
          </h2>
          <Button 
            className="w-[240px] h-[54px] bg-white text-[#000000] rounded-[8px] text-[14px] font-semibold uppercase tracking-[0.03em] hover:bg-[#DDDBDC] transition-colors"
          >
            @Everlane Instagram
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
