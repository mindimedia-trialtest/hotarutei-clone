import Image from "next/image";
import React from "react";

const Stay = () => {
  return (
    <div className="py-22 lg:flex justify-center bg-[#6E726C]">
      <div className="text-white flex flex-col gap-4 pl-4 ">
        <h1 className="text-8xl">Stay</h1>
        <p>Private Villa</p>
      </div>

      <div className="flex flex-col ml-4 md:ml-24 lg:ml-96 my-12 gap-12">
        <div className="py-2 pl-2 border-white border-2">
          <Image
            src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/stay/pic01.webp"
            alt="Villa"
            width={1000}
            height={1000}
            unoptimized
          />
        </div>
        <div className="text-white space-y-6  max-w-3xl lg:max-w-3xl">
          <h1 className="font-serif font-semibold tracking-widest text-sm md:text-base lg:text-base">
            Experience a stay in a private villa complete with a natural hot
            spring bath.
          </h1>
          <p className="font-serif tracking-wide text-sm md:text-base lg:text-base">
            Inside the historical grounds of Hotarutei, we have recently added
            two new luxurious private villas. Constructed in March 2023, these
            private retreats each boast 100 square meters of space for you to
            relax and enjoy fresh air from the mountains. Equipped with a
            balcony overlooking the mountains of Shiga Kogen and a natural
            outdoor hot spring bath, you can enjoy the best of both - the simple
            and the luxurious during your stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stay;
