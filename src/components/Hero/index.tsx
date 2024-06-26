import React from "react";
import Image from "next/image";
import bg_mobile from "@/assets/bg-intro-mobile.svg";
import bg_desktop from "@/assets/bg-intro-desktop.svg";
import mockups from "@/assets/image-mockups.png";

const Hero = () => {
  return (
    <div className="relative w-full bg-very-light-gray flex flex-col md:flex-row-reverse md:items-center">
      <div className="relative">
        <Image
          src={bg_mobile}
          alt=""
          className="block md:hidden w-full h-full"
        />
        <Image src={bg_desktop} alt="" className="hidden md:block" />

        <Image src={mockups} alt="" className="absolute top-0 left-0 z-10" />
      </div>

      <div className="flex flex-col px-9 md:px-20 gap-5 md:items-start">
        <h1 className="text-bold text-center md:text-left text-5xl md:text-7xl text-dark-blue">Next generation digital banking</h1>

        <h2 className="text-lg text-center md:text-left md:text-2xl text-grayish-blue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </h2>

        <button className="self-center md:self-auto cursor-pointer bg-gradient-to-r from-lime-green to-bright-cyan hover:from-lime-green/70 hover:to-bright-cyan/70 text-white font-bold px-5 py-3 rounded-full">
          Request Invite
        </button>
      </div>
    </div>
  );
};

export default Hero;
