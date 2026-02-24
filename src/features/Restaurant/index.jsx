import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon1 from "../../../public/assets/icons/icon1";

const Restaurant = () => {
  return (
    <div className="bg-[#f8f8f6]">
      <div className="container mx-auto py-28 md:py-32 lg:py-40">
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-center gap-20 md:gap-24 lg:gap-32 mx-10 md:mx-18 lg:mx-40">
          <Image
            src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/restaurant/pic01.webp"
            height={600}
            width={500}
            alt="photo"
            className="border border-black p-2"
            loading="eager"
            unoptimized
          />
          <div className="space-y-8">
            <h1 className="text-black text-7xl md:text-6xl lg:text-8xl tracking-wide">
              Restaurant
            </h1>
            <p className="tracking-wide">Japanese Restaurant</p>
            <p className="text-black font-serif leading-relaxed">
              Hotarutei is a Japanese restaurant housed in a historic 170-year
              old farmhouse that has been faithfully renovated with a modern
              touch. Situated in Kanbayashi Onsen, we would like for our guests
              to enjoy both the food and the atmosphere we have worked hard to
              provide.
            </p>
            <Link href="" className="flex gap-4 items-center underline text-xl font-semibold">
              View Detail
              <div className="-rotate-90">
                <Icon1 />
              </div>
            </Link>
            <div className="relative w-full h-100">
              <Image
                src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/restaurant/pic02.webp"
                width={300}
                height={300}
                alt="photo"
                unoptimized
                className="absolute bottom-0 right-0 border border-black p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-2">
        <Image
          src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/restaurant/pic03.webp"
          width={1000}
          height={1000}
          alt="photo"
          unoptimized
          className="object-cover w-full py-4"
        />
      </div>
    </div>
  );
};

export default Restaurant;
