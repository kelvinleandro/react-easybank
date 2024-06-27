import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import icon_hamburger from "@/assets/icon-hamburger.svg";
import icon_close from "@/assets/icon-close.svg"

const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

type Props = {
  toggleSidebar: () => void;
  sidebarOpened: boolean;
};

const Header = ({ toggleSidebar, sidebarOpened }: Props) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 md:px-20 md:pb-0">
      <Image src={logo} alt="logo" className="cursor-pointer md:mb-3" />

      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer font-medium text-lg text-grayish-blue hover:text-dark-blue relative"
          >
            <p className="mb-6">{item}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-green to-bright-cyan scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-300"></div>
          </div>
        ))}
      </div>

      <div className="hidden md:block self-center justify-self-center md:mb-3">
        <button className=" cursor-pointer bg-gradient-to-r from-lime-green to-bright-cyan hover:from-lime-green/70 hover:to-bright-cyan/70 text-white font-bold px-5 py-3 rounded-full">
          Request Invite
        </button>
      </div>

      <Image
        src={sidebarOpened ? icon_close : icon_hamburger}
        alt={sidebarOpened ? "close sidebar menu" : "open sidebar menu"}
        className="block md:hidden cursor-pointer h-5 w-5"
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default Header;
