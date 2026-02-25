import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F5F4F4] pt-[40px] px-[20px] md:px-[72px] flex flex-col items-center">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[40px] mb-[40px]">
        {/* Account */}
        <div className="flex flex-col gap-[20px]">
          <h4 className="text-[#262626] text-[16px] font-semibold leading-[1.5] tracking-[0.0125em]">Account</h4>
          <div className="flex flex-col gap-[10px]">
            <Link to="/login" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Log In</Link>
            <Link to="/signup" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Sign Up</Link>
            <Link to="/gift-cards" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Redeem a Gift Card</Link>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-[20px]">
          <h4 className="text-[#262626] text-[16px] font-semibold leading-[1.5] tracking-[0.0125em]">Company</h4>
          <div className="flex flex-col gap-[10px]">
            <Link to="/about" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">About</Link>
            <Link to="/environmental-initiatives" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Environmental Initiatives</Link>
            <Link to="/factories" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Factories</Link>
            <Link to="/dei" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">DEI</Link>
            <Link to="/careers" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Careers</Link>
            <Link to="/international" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">International</Link>
            <Link to="/accessibility" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Accessibility</Link>
          </div>
        </div>

        {/* Get Help */}
        <div className="flex flex-col gap-[20px]">
          <h4 className="text-[#262626] text-[16px] font-semibold leading-[1.5] tracking-[0.0125em]">Get Help</h4>
          <div className="flex flex-col gap-[10px]">
            <Link to="/help" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Help Center</Link>
            <Link to="/returns" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Return Policy</Link>
            <Link to="/shipping" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Shipping Info</Link>
            <Link to="/bulk" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Bulk Orders</Link>
          </div>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-[20px]">
          <h4 className="text-[#262626] text-[16px] font-semibold leading-[1.5] tracking-[0.0125em]">Connect</h4>
          <div className="flex flex-col gap-[10px]">
            <a href="https://facebook.com" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Facebook</a>
            <a href="https://instagram.com" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Instagram</a>
            <a href="https://twitter.com" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Twitter</a>
            <Link to="/affiliates" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Affiliates</Link>
            <Link to="/stores" className="text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] hover:text-black transition-colors">Our Stores</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex items-start lg:justify-end">
          <div className="flex items-center w-full max-w-[388px]">
            <div className="flex-grow flex items-center bg-white border border-[#DDDBDC] px-[15px] py-[18px]">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full text-[#737373] text-[14px] leading-[1.2] tracking-[0.1em] outline-none"
              />
            </div>
            <button className="bg-[#262626] border border-[#262626] p-[14.5px] hover:bg-black transition-colors shrink-0">
              <ArrowRight className="w-[24px] h-[24px] text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full flex flex-col items-center gap-[16px] py-[16px] border-t border-[#DDDBDC]">
        <div className="flex justify-center gap-[16px] md:gap-[24px] flex-wrap text-center">
          <Link to="/privacy" className="text-[#737373] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-[#737373] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Terms of Service</Link>
          <Link to="/do-not-sell" className="text-[#737373] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors text-center">Do Not Sell or Share My Personal Information</Link>
          <Link to="/transparency" className="text-[#737373] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">CS Supply Chain Transparency</Link>
          <Link to="/conduct" className="text-[#737373] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Vendor Code of Conduct</Link>
          <Link to="/sitemap-pages" className="text-[#737373] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Sitemap Pages</Link>
          <Link to="/sitemap-products" className="text-[#737373] text-[12px] leading-[1.33] tracking-[0.016em] hover:text-black transition-colors">Sitemap Products</Link>
        </div>
        <span className="text-[#737373] text-[12px] leading-[1.33] tracking-[0.016em]">
          © 2023 All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
