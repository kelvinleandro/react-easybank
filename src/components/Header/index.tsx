import React from "react";
import icon_hamburger from "@/assets/icon-hamburger.svg";
import logo from "@/assets/logo.svg";
import Image from "next/image";

const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 md:px-20">
      <Image src={logo} alt="logo" className="cursor-pointer" />

      <div className="hidden md:flex gap-6">
        {navItems.map((item, index) => (
          <div key={index} className="group cursor-pointer font-medium text-grayish-blue hover:text-dark-blue relative">
            <p className="mb-5">{item}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-green to-bright-cyan scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-300 mt-4"></div>
          </div>
        ))}
      </div>

      <button className="hidden md:block cursor-pointer bg-gradient-to-r from-lime-green to-bright-cyan hover:from-lime-green/70 hover:to-bright-cyan/70 text-white font-bold px-5 py-3 rounded-full">
        Request Invite
      </button>

      <Image
        src={icon_hamburger}
        alt="hamburger menu"
        className="block md:hidden cursor-pointer"
      />
    </div>
  );
};

export default Header;
