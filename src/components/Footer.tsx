import React from 'react';
import { Separator } from "@/components/ui/separator";

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3.75 12H20.25"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 5.25L20.25 12L13.5 18.75"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F5F4F4] pt-[40px] px-[72px] flex flex-col items-center">
      {/* Main Footer Content */}
      <div className="w-full flex flex-row justify-between items-start mb-[40px]">
        {/* Account Column */}
        <div className="flex flex-col gap-[20px] p-[20px] flex-1">
          <h4 className="text-[#262626] font-semibold text-[16px] leading-[1.5em] tracking-[0.0125em]">
            Acount
          </h4>
          <div className="flex flex-col gap-[10px]">
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Log In</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Sign Up</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Redeem a Gift Card</a>
          </div>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-[20px] p-[20px] flex-1">
          <h4 className="text-[#262626] font-semibold text-[16px] leading-[1.5em] tracking-[0.0125em]">
            Company
          </h4>
          <div className="flex flex-col gap-[10px]">
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">About</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Environmental Initiatives</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Factories</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">DEI</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Careers</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">International</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Accessibility</a>
          </div>
        </div>

        {/* Get Help Column */}
        <div className="flex flex-col gap-[20px] p-[20px] flex-1">
          <h4 className="text-[#262626] font-semibold text-[16px] leading-[1.5em] tracking-[0.0125em]">
            Get Help
          </h4>
          <div className="flex flex-col gap-[10px]">
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Help Center</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Return Policy</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Shipping Info</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Bulk Orders</a>
          </div>
        </div>

        {/* Connect Column */}
        <div className="flex flex-col gap-[20px] p-[20px] flex-1">
          <h4 className="text-[#262626] font-semibold text-[16px] leading-[1.5em] tracking-[0.0125em]">
            Connect
          </h4>
          <div className="flex flex-col gap-[10px]">
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Facebook</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Instagram</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Twitter</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Affiliates</a>
            <a href="#" className="text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] hover:text-[#262626] transition-colors">Out Stores</a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="p-[20px] flex flex-row items-start">
          <div className="w-[388px] h-[56px] bg-white border border-[#DDDBDC] px-[15px] flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-none outline-none text-[#737373] text-[14px] leading-[1.2em] tracking-[0.1em] placeholder:text-[#737373]"
            />
          </div>
          <button className="h-[56px] px-[14px] bg-[#262626] border border-[#262626] flex items-center justify-center text-white hover:bg-black transition-colors">
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <Separator className="bg-[#DDDBDC]" />

      {/* Bottom Footer Section */}
      <div className="w-full flex flex-col items-center py-[16px] gap-[16px]">
        <div className="w-full flex flex-row justify-center items-center gap-[24px]">
          <a href="#" className="text-[#737373] text-[12px] leading-[1.333em] tracking-[0.0166em] hover:text-[#262626] transition-colors">Privacy Policy</a>
          <a href="#" className="text-[#737373] text-[12px] leading-[1.333em] tracking-[0.0166em] hover:text-[#262626] transition-colors">Terms of Service</a>
          <a href="#" className="text-[#737373] text-[12px] leading-[1.333em] tracking-[0.0166em] hover:text-[#262626] transition-colors">Do Not Sell or Share My Personal Information</a>
          <a href="#" className="text-[#737373] text-[12px] leading-[1.333em] tracking-[0.0166em] hover:text-[#262626] transition-colors">CS Supply Chain Transparency</a>
          <a href="#" className="text-[#737373] text-[12px] leading-[1.333em] tracking-[0.0166em] hover:text-[#262626] transition-colors">Vendor Code of Conduct</a>
          <a href="#" className="text-[#737373] text-[12px] leading-[1.333em] tracking-[0.0166em] hover:text-[#262626] transition-colors">Sitemap Pages</a>
          <a href="#" className="text-[#737373] text-[12px] leading-[1.333em] tracking-[0.0166em] hover:text-[#262626] transition-colors">Sitemap Products</a>
        </div>
        <div className="text-[#737373] text-[12px] leading-[1.333em] tracking-[0.0166em]">
          © 2023 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
