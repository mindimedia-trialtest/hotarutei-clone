import Image from "next/image";
import React from "react";
import Icon1 from "../../../public/assets/icons/icon1";

const Stay = () => {
  return (
    <div className="py-22  bg-[#6E726C]">
      <div className="flex flex-col lg:flex-row lg:justify-end gap-8 md:lg-32 lg:gap-52 ml-8">
        <div className="text-white space-y-8">
          <h1 className="text-8xl">Stay</h1>
          <div className="flex items-center gap-4">
            <div className="-rotate-90">
              <Icon1 />
            </div>
            <p className="text-xl">Private Villa</p>
          </div>
        </div>

        <div className="space-y-8 my-12 gap-12">
          <div className="border border-white p-2">
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
            <p className="font-serif tracking-wider text-sm md:text-base lg:text-base leading-relaxed">
              Inside the historical grounds of Hotarutei, we have recently added
              two new luxurious private villas. Constructed in March 2023, these
              private retreats each boast 100 square meters of space for you to
              relax and enjoy fresh air from the mountains. Equipped with a
              balcony overlooking the mountains of Shiga Kogen and a natural
              outdoor hot spring bath, you can enjoy the best of both - the
              simple and the luxurious during your stay.
            </p>
            <p className="text-xl font-semibold">View Detail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stay;
