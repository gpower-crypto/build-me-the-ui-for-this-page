import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center bg-white">
      {/* Top Bar */}
      <div className="w-full bg-[#000000] text-white py-[7px] px-[30px] flex justify-between items-center relative min-h-[32px]">
        <div className="flex-1 flex justify-center items-center gap-[4px]">
          <span className="text-[12px] font-semibold tracking-[0.016em]">
            Get early access on launches and offers.
          </span>
          <Link to="/signup" className="text-[12px] underline tracking-[0.016em]">
            Sign Up For Texts
          </Link>
          <ArrowRight className="w-[14px] h-[14px]" />
        </div>
        <div className="absolute right-[30px] flex items-center gap-[12px]">
          <div className="w-[21px] h-[15px] bg-white flex items-center justify-center overflow-hidden rounded-[2px]">
             {/* Simple US Flag representation */}
             <div className="w-full h-full flex flex-col">
                <div className="h-1/2 bg-[#B12537]"></div>
                <div className="h-1/2 bg-white"></div>
             </div>
          </div>
          <span className="text-[12px] tracking-[0.016em]">USD</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full border-b border-[#DDDBDC] px-[68px] flex justify-between items-center h-[64px]">
        <nav className="flex items-center">
          <Link to="/women" className="px-[12px] py-[20px] text-[12px] text-[#262626] hover:text-black transition-colors">
            Women
          </Link>
          <Link to="/men" className="px-[12px] py-[20px] text-[12px] text-[#262626] hover:text-black transition-colors">
            Men
          </Link>
          <Link to="/about" className="px-[12px] py-[20px] text-[12px] text-[#262626] hover:text-black transition-colors">
            About
          </Link>
          <Link to="/blog" className="px-[12px] pt-[20px] flex flex-col items-center gap-[18px] relative">
            <span className="text-[12px] text-[#262626] font-medium">Everworld Stories</span>
            <div className="absolute bottom-0 left-[12px] right-[12px] h-[2px] bg-[#262626]"></div>
          </Link>
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="flex items-center">
            <span className="text-[20px] font-bold tracking-widest text-[#262626]">EVERLANE</span>
          </Link>
        </div>

        <div className="flex items-center gap-[0px]">
          <button className="p-[12px] text-[#262626] hover:opacity-70 transition-opacity">
            <Search className="w-[16px] h-[16px]" />
          </button>
          <button className="p-[12px] text-[#262626] hover:opacity-70 transition-opacity">
            <User className="w-[16px] h-[16px]" />
          </button>
          <button className="p-[12px] text-[#262626] hover:opacity-70 transition-opacity">
            <ShoppingCart className="w-[16px] h-[16px]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
