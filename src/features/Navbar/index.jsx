import Buttons from "@/data/buttons.json";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 items-center py-4 bg-[#f8f8f6]">
      <div className="flex flex-col lg:flex-row md:flex-row items-center gap-2 lg:gap-10">
        <Image
          src="/assets/hotarutei.png"
          width={145}
          height={145}
          alt="Hotarutei"
          loading="eager"
          unoptimized
        />
        <p className="font-semibold text-lg">Embrace 170 years of tradition</p>
      </div>
      <div className="hidden lg:flex gap-2 font-serif ">
        {Buttons.map((button) => (
          <div key={button.id}>
            <button className="border-2 border-black px-2 tracking-wider">
              {button.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
