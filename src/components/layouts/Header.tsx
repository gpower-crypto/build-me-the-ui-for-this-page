import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, ArrowRight, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col items-center bg-white sticky top-0 z-50">
      {/* Top Banner */}
      <div className="w-full bg-[#000000] py-[7px] px-[15px] md:px-[30px] flex justify-center items-center relative">
        <div className="flex items-center gap-[4px]">
          <span className="text-white text-[10px] md:text-[12px] font-semibold leading-[1.33] tracking-[0.016em]">
            Get early access on launches and offers.
          </span>
          <Link to="/signup" className="text-white text-[10px] md:text-[12px] underline leading-[1.33] tracking-[0.016em]">
            Sign Up For Texts
          </Link>
          <ArrowRight className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white" />
        </div>
        <div className="hidden md:flex absolute right-[30px] items-center gap-[12px]">
          <div className="w-[21px] h-[15px] bg-white relative overflow-hidden flex items-center justify-center">
            <div className="w-full h-full flex flex-col">
              <div className="bg-[#46467F] w-[9px] h-[7px] absolute top-0 left-0" />
              <div className="flex flex-col h-full w-full">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`h-[2px] w-full ${i % 2 === 0 ? 'bg-[#D02F44]' : 'bg-white'}`} />
                ))}
              </div>
            </div>
          </div>
          <span className="text-white text-[12px] leading-[1.33] tracking-[0.016em]">USD</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full border-b border-[#DDDBDC] px-[20px] md:px-[68px] flex justify-between items-center h-[60px] relative">
        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#262626]">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/women" className="text-lg font-medium">Women</Link>
                <Link to="/men" className="text-lg font-medium">Men</Link>
                <Link to="/about" className="text-lg font-medium">About</Link>
                <Link to="/stories" className="text-lg font-medium">Everworld Stories</Link>
                <hr />
                <Link to="/stores" className="text-base">Stores</Link>
                <Link to="/factories" className="text-base">Factories</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Left Nav (Desktop) */}
        <nav className="hidden md:flex items-center h-full">
          <Link to="/women" className="px-[12px] py-[20px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Women</Link>
          <Link to="/men" className="px-[12px] py-[20px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Men</Link>
          <div className="flex flex-col items-center gap-[18px] px-[12px] pt-[20px] h-full relative">
            <Link to="/about" className="text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em]">About</Link>
            <div className="absolute bottom-0 w-[calc(100%-24px)] h-[2px] bg-[#262626]" />
          </div>
          <Link to="/stories" className="px-[12px] py-[20px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Everworld Stories</Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 top-[21px]">
          <span className="text-[16px] md:text-[18px] font-bold md:tracking-[0.2em] tracking-[0.1em] text-[#262626]">EVERLANE</span>
        </Link>

        {/* Right Icons */}
        <div className="flex items-center">
          <button className="p-[8px] md:p-[12px] text-[#262626] hover:bg-gray-50 rounded-full transition-colors">
            <Search className="w-[16px] h-[16px]" />
          </button>
          <button className="hidden sm:block p-[8px] md:p-[12px] text-[#262626] hover:bg-gray-50 rounded-full transition-colors">
            <User className="w-[16px] h-[16px]" />
          </button>
          <button className="p-[8px] md:p-[12px] text-[#262626] hover:bg-gray-50 rounded-full transition-colors">
            <ShoppingBag className="w-[16px] h-[16px]" />
          </button>
        </div>
      </div>

      {/* Sub Navigation (Desktop) */}
      <div className="hidden md:flex w-full justify-center items-center py-[10px]">
        <nav className="flex items-center">
          <Link to="/about" className="px-[12px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">About</Link>
          <Link to="/stores" className="px-[12px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Stores</Link>
          <Link to="/factories" className="px-[12px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Factories</Link>
          <Link to="/environmental-initiatives" className="px-[12px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Environmental Initiatives</Link>
          <Link to="/carbon-commitment" className="px-[12px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Our Carbon Commitment</Link>
          <Link to="/impact-report" className="px-[12px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Annual Impact Report</Link>
          <Link to="/cleaner-fashion" className="px-[12px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Cleaner Fashion</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
