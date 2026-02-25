import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, ArrowRight } from 'lucide-react';

const Logo = () => (
  <svg
    width="128"
    height="14"
    viewBox="0 0 128 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14px] w-auto"
  >
    {/* Simplified logo representation based on Figma vectors */}
    <path
      d="M0 0.05H11.06V13.93H0V0.05ZM14.91 0.01H28.93V14H14.91V0.01ZM32.82 0.03H43.85V13.95H32.82V0.03ZM49.52 0V14H61.75V0H49.52ZM67.05 0.05H77.14V13.95H67.05V0.05ZM80.2 -0.01H94.14V14H80.2V-0.01ZM98.32 0.01H110.77V14H98.32V0.01ZM116.59 0.07H127.63V13.96H116.59V0.07Z"
      fill="#262626"
    />
  </svg>
);

const Header = () => {
  return (
    <header className="w-full flex flex-col bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#000000] px-[30px] py-[7px] flex items-center justify-between text-white">
        <div className="flex-1" />
        <div className="flex items-center justify-center gap-[4px]">
          <span className="text-[12px] font-semibold leading-[1.33em] tracking-[0.016em] uppercase">
            Get early access on launches and offers.
          </span>
          <Link
            to="/signup"
            className="text-[12px] font-normal leading-[1.33em] tracking-[0.016em] underline hover:opacity-80 transition-opacity"
          >
            Sign Up For Texts
          </Link>
          <ArrowRight className="w-[14px] h-[14px]" strokeWidth={1} />
        </div>
        <div className="flex-1 flex justify-end items-center gap-[12px]">
          <div className="flex items-center gap-[4px]">
            <div className="w-[21px] h-[15px] relative bg-white overflow-hidden rounded-[2px]">
              {/* Simplified US Flag representation */}
              <div className="absolute inset-0 bg-[#D02F44]" />
              <div className="absolute top-0 left-0 w-[9px] h-[7px] bg-[#46467F]" />
              <div className="absolute top-[1px] left-[1px] w-[7px] h-[5px] flex flex-wrap gap-[1px] p-[0.5px]">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="w-[1px] h-[1px] bg-white rounded-full" />
                ))}
              </div>
            </div>
            <span className="text-[12px] font-normal leading-[1.33em] tracking-[0.016em]">
              USD
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-[64px] px-[68px] flex items-center justify-between border-b border-[#DDDBDC] relative">
        {/* Left Links */}
        <nav className="flex items-center">
          {[
            { label: 'Women', active: false },
            { label: 'Men', active: false },
            { label: 'About', active: true },
            { label: 'Everworld Stories', active: false },
          ].map((item) => (
            <Link
              key={item.label}
              to={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative px-[12px] py-[20px] flex flex-col items-center group"
            >
              <span
                className={`text-[12px] font-normal leading-[1.33em] tracking-[0.016em] ${
                  item.active ? 'text-[#262626]' : 'text-[#262626] opacity-70 group-hover:opacity-100'
                } transition-opacity`}
              >
                {item.label}
              </span>
              {item.active && (
                <div className="absolute bottom-0 left-[12px] right-[12px] h-[2px] bg-[#262626]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center">
          <button className="p-[12px] hover:bg-gray-50 transition-colors rounded-full">
            <Search className="w-[16px] h-[16px] text-[#262626]" strokeWidth={2} />
          </button>
          <button className="p-[12px] hover:bg-gray-50 transition-colors rounded-full">
            <User className="w-[16px] h-[16px] text-[#262626]" strokeWidth={2} />
          </button>
          <button className="p-[12px] hover:bg-gray-50 transition-colors rounded-full">
            <ShoppingCart className="w-[16px] h-[16px] text-[#262626]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <nav className="w-full flex justify-center items-center py-[10px]">
        {[
          'About',
          'Stores',
          'Factories',
          'Environmental Initiatives',
          'Our Carbon Commitment',
          'Annual Impact Report',
          'Cleaner Fashion',
        ].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-[12px] py-[10px] text-[12px] font-normal text-[#262626] opacity-70 hover:opacity-100 transition-opacity"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
