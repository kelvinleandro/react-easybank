import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import IconFacebook from "@/components/Icons/IconFacebook"
import IconYoutube from "../Icons/IconYoutube";
import IconTwitter from "../Icons/IconTwitter";
import IconPinterest from "../Icons/IconPinterest";
import IconInstagram from "../Icons/IconInstagram";

const icons = [IconFacebook, IconYoutube, IconTwitter, IconPinterest, IconInstagram]

const links = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:justify-between px-9 py-8 md:py-14 md:px-28 bg-dark-blue">
      <div className="md:flex gap-24 items-center">
        <div className="flex flex-col gap-5">
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer"
            objectFit="cover"
          />
          <div className="flex items-center gap-4">
            {icons.map((Icon, index) => (
                <Icon
                  key={index}
                  className="cursor-pointer text-white hover:text-lime-green"
                  width="24"
                  height="24"
                />
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-1 md:gap-y-2 md:gap-x-24 my-4 md:my-0 text-center md:text-left">
            {
              links.map((item, index) => (
                <p key={index} className="cursor-pointer text-base text-white hover:text-lime-green">{item}</p>
              ))
            }
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <button className="self-center cursor-pointer bg-gradient-to-r from-lime-green to-bright-cyan hover:from-lime-green/70 hover:to-bright-cyan/70 text-white font-bold px-5 py-3 rounded-full">
          Request Invite
        </button>
        <p className="text-center text-grayish-blue">
          © Easybank. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
