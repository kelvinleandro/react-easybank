import React from "react";
import Image from "next/image";
import img_online from "@/assets/icon-online.svg";
import img_budgeting from "@/assets/icon-budgeting.svg";
import img_onboarding from "@/assets/icon-onboarding.svg";
import img_api from "@/assets/icon-api.svg";

const reasons = [
  {
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    img: img_online,
  },
  {
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    img: img_budgeting,
  },
  {
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    img: img_onboarding,
  },
  {
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    img: img_api,
  },
];

const WhyEasybank = () => {
  return (
    <div className="w-full px-9 py-8 md:py-24 md:px-28 bg-light-grayish-blue flex flex-col gap-14 items-center md:items-start">
      <div className="flex flex-col gap-5 max-w-[50%] items-center md:items-start">
        <h1 className="text-bold text-center md:text-left text-4xl text-dark-blue">
          Why choose Easybank?
        </h1>
        <p className="text-lg text-center md:text-left text-grayish-blue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-5 md:gap-8">
        {reasons.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 items-center md:items-start md:justify-start text-center md:text-left">
            <Image src={item.img} alt="" />
            <p className="text-dark-blue text-xl">{item.title}</p>
            <p className="text-grayish-blue text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyEasybank;
