import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, ArrowRight, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  // Handle scroll behavior (hide/show and transparency)
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Update transparency/blur
        if (currentScrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        // Update visibility (hide on scroll down, show on scroll up)
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: 'Women', path: '/women' },
    { name: 'Men', path: '/men' },
    { name: 'About', path: '/about' },
    { name: 'Everworld Stories', path: '/stories' },
  ];

  const subNavLinks = [
    { name: 'About', path: '/about' },
    { name: 'Stores', path: '/stores' },
    { name: 'Factories', path: '/factories' },
    { name: 'Environmental Initiatives', path: '/environmental-initiatives' },
    { name: 'Our Carbon Commitment', path: '/carbon-commitment' },
    { name: 'Annual Impact Report', path: '/impact-report' },
    { name: 'Cleaner Fashion', path: '/cleaner-fashion' },
  ];

  return (
    <header 
      className={cn(
        "w-full flex flex-col items-center sticky top-0 z-50 transition-all duration-500 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      )}
    >
      {/* Top Banner - Animated subtle pulse */}
      <div className="w-full bg-[#000000] py-[7px] px-[15px] md:px-[30px] flex justify-center items-center relative overflow-hidden">
        <div className="flex items-center gap-[4px] animate-in fade-in slide-in-from-top duration-700">
          <span className="text-white text-[10px] md:text-[12px] font-semibold leading-[1.33] tracking-[0.016em]">
            Get early access on launches and offers.
          </span>
          <Link 
            to="/signup" 
            className="text-white text-[10px] md:text-[12px] underline leading-[1.33] tracking-[0.016em] hover:text-gray-300 transition-colors"
          >
            Sign Up For Texts
          </Link>
          <ArrowRight className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white animate-pulse" />
        </div>
        
        {/* Flag Decoration */}
        <div className="hidden md:flex absolute right-[30px] items-center gap-[12px]">
          <div className="w-[21px] h-[15px] bg-white relative overflow-hidden flex items-center justify-center shadow-sm">
            <div className="w-full h-full flex flex-col">
              <div className="bg-[#46467F] w-[9px] h-[7px] absolute top-0 left-0 z-10" />
              <div className="flex flex-col h-full w-full">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={cn("h-[2px] w-full", i % 2 === 0 ? 'bg-[#D02F44]' : 'bg-white')} />
                ))}
              </div>
            </div>
          </div>
          <span className="text-white text-[12px] leading-[1.33] tracking-[0.016em]">USD</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full border-b border-[#DDDBDC] px-[20px] md:px-[68px] flex justify-between items-center h-[60px] relative overflow-hidden">
        {/* Search Bar Overlay - Enhanced slide down */}
        <div 
          className={cn(
            "absolute inset-0 bg-white z-20 flex items-center px-[20px] md:px-[68px] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)",
            isSearchVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          )}
        >
          <div className="flex w-full items-center gap-4">
            <Search className="w-[20px] h-[20px] text-[#262626]" />
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search products..."
              className="flex-grow border-none focus-visible:ring-0 text-[16px] placeholder:text-gray-400 bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && toggleSearch()}
            />
            <button 
              onClick={toggleSearch}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-90"
              aria-label="Close search"
            >
              <X className="w-[20px] h-[20px] text-[#262626]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn("flex md:hidden transition-opacity duration-300", isSearchVisible ? 'opacity-0' : 'opacity-100')}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#262626] hover:bg-gray-100 rounded-full">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className="text-2xl font-medium hover:translate-x-2 transition-transform duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-gray-100 my-2" />
                {subNavLinks.slice(1, 4).map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className="text-lg text-gray-600 hover:text-black hover:translate-x-1 transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Left Nav (Desktop) */}
        <nav className={cn("hidden md:flex items-center h-full transition-opacity duration-300", isSearchVisible ? 'opacity-0' : 'opacity-100')}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path}
                to={link.path} 
                className="group relative px-[12px] py-[20px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors"
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-[12px] right-[12px] h-[2px] bg-black transition-transform duration-300 origin-left",
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Logo - Animated scale on hover */}
        <Link 
          to="/" 
          className={cn(
            "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300",
            isSearchVisible ? 'opacity-0 scale-90' : 'opacity-100 scale-100',
            "hover:scale-110 active:scale-95"
          )}
        >
          <span className="text-[16px] md:text-[18px] font-bold md:tracking-[0.2em] tracking-[0.1em] text-[#262626]">EVERLANE</span>
        </Link>

        {/* Right Icons */}
        <div className={cn("flex items-center gap-1 transition-opacity duration-300", isSearchVisible ? 'opacity-0' : 'opacity-100')}>
          <button 
            onClick={toggleSearch}
            className="p-[8px] md:p-[12px] text-[#262626] hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-90"
            aria-label="Open search"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>
          <button className="hidden sm:block p-[8px] md:p-[12px] text-[#262626] hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-90">
            <User className="w-[18px] h-[18px]" />
          </button>
          <button className="p-[8px] md:p-[12px] text-[#262626] hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-90 relative">
            <ShoppingBag className="w-[18px] h-[18px]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full border-2 border-white animate-pulse" />
          </button>
        </div>
      </div>

      {/* Sub Navigation (Desktop) - Smooth height transition */}
      <div className={cn(
        "hidden md:flex w-full justify-center items-center transition-all duration-500 overflow-hidden",
        isScrolled ? "h-0 opacity-0" : "h-[40px] opacity-100"
      )}>
        <nav className="flex items-center">
          {subNavLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className="group relative px-[12px] text-[#262626] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-[12px] right-[12px] h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
