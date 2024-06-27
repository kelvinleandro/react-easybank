import React from "react";
import Image from "next/image";
import img_confetti from "@/assets/image-confetti.jpg";
import img_currency from "@/assets/image-currency.jpg";
import img_plane from "@/assets/image-plane.jpg";
import img_restaurant from "@/assets/image-restaurant.jpg";

const articles = [
  {
    author: "Claire Robinson",
    about: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    image: img_currency,
  },
  {
    author: "Wilson Hutton",
    about: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    image: img_restaurant,
  },
  {
    author: "Wilson Hutton",
    about: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
    image: img_plane,
  },
  {
    author: "Claire Robinson",
    about: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
    image: img_confetti,
  },
];

const LatestArticles = () => {
  return (
    <div className="w-full px-9 py-8 md:py-24 md:px-28">
      <h1 className="text-bold text-center md:text-left text-4xl text-dark-blue mb-5">
        Latest Articles
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
        {
          articles.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden border-2">
              <div className="w-full relative h-60 md:h-48">
                <Image src={item.image} alt="" layout="fill" objectFit="cover" />
              </div>
              <div className="text-left flex flex-col gap-2 p-8">
                <p className="text-sm text-grayish-blue font-light">By {item.author}</p>
                <p className="text-dark-blue hover:text-bright-cyan text-lg cursor-pointer">{item.about}</p>
                <p className="text-grayish-blue text-sm">{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default LatestArticles;
