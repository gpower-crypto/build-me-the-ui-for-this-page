import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F4F4] pt-[40px] px-[72px] flex flex-col items-center">
      <div className="w-full flex justify-between border-b border-[#DDDBDC] pb-[40px]">
        <div className="grid grid-cols-4 flex-1 gap-[40px]">
          {/* Account */}
          <div className="flex flex-col gap-[20px] p-[20px]">
            <h4 className="text-[16px] font-semibold text-[#262626]">Account</h4>
            <div className="flex flex-col gap-[10px]">
              <Link to="/login" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Log In</Link>
              <Link to="/signup" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Sign Up</Link>
              <Link to="/redeem" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Redeem a Gift Card</Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-[20px] p-[20px]">
            <h4 className="text-[16px] font-semibold text-[#262626]">Company</h4>
            <div className="flex flex-col gap-[10px]">
              <Link to="/about" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">About</Link>
              <Link to="/environmental" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Environmental Initiatives</Link>
              <Link to="/factories" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Factories</Link>
              <Link to="/dei" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">DEI</Link>
              <Link to="/careers" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Careers</Link>
              <Link to="/international" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">International</Link>
              <Link to="/accessibility" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Accessibility</Link>
            </div>
          </div>

          {/* Get Help */}
          <div className="flex flex-col gap-[20px] p-[20px]">
            <h4 className="text-[16px] font-semibold text-[#262626]">Get Help</h4>
            <div className="flex flex-col gap-[10px]">
              <Link to="/help" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Help Center</Link>
              <Link to="/returns" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Return Policy</Link>
              <Link to="/shipping" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Shipping Info</Link>
              <Link to="/bulk" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Bulk Orders</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-[20px] p-[20px]">
            <h4 className="text-[16px] font-semibold text-[#262626]">Connect</h4>
            <div className="flex flex-col gap-[10px]">
              <a href="#" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Facebook</a>
              <a href="#" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Instagram</a>
              <a href="#" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Twitter</a>
              <Link to="/affiliates" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Affiliates</Link>
              <Link to="/stores" className="text-[14px] text-[#737373] hover:text-black transition-colors tracking-[0.1em]">Our Stores</Link>
            </div>
          </div>
        </div>

        {/* Email Signup */}
        <div className="flex items-start p-[20px]">
          <div className="flex items-center">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-[388px] h-[54px] px-[15px] border border-[#DDDBDC] bg-white text-[14px] text-[#737373] focus:outline-none focus:border-[#262626] transition-colors"
            />
            <button className="h-[54px] w-[54px] bg-[#262626] flex items-center justify-center text-white hover:bg-black transition-colors border border-[#262626]">
              <ArrowRight className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full py-[16px] flex flex-col items-center gap-[16px]">
        <div className="flex justify-center gap-[24px]">
          <Link to="/privacy" className="text-[12px] text-[#737373] hover:text-black transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-[12px] text-[#737373] hover:text-black transition-colors">Terms of Service</Link>
          <Link to="/privacy-choices" className="text-[12px] text-[#737373] hover:text-black transition-colors">Do Not Sell or Share My Personal Information</Link>
          <Link to="/transparency" className="text-[12px] text-[#737373] hover:text-black transition-colors">CS Supply Chain Transparency</Link>
          <Link to="/vendor-conduct" className="text-[12px] text-[#737373] hover:text-black transition-colors">Vendor Code of Conduct</Link>
          <Link to="/sitemap-pages" className="text-[12px] text-[#737373] hover:text-black transition-colors">Sitemap Pages</Link>
          <Link to="/sitemap-products" className="text-[12px] text-[#737373] hover:text-black transition-colors">Sitemap Products</Link>
        </div>
        <span className="text-[12px] text-[#737373]">© 2023 All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
