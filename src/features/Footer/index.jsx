import { Buttons, FooterItems, Menus, SocialMedia } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6E726C] text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8 lg:p-24 border">
          <div className="font-serif text-sm space-y-10">
            <div>
              <p>380-0401</p>
              <p>Nagano, Shimotakai district, Yamanouchi, Hirao 1398-1</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-lg">Tel. 0269-38-0741</p>
              <p className="text-xs">(09:00–18:00)</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {SocialMedia.map((item) => (
                <p
                  key={item.id}
                  className="text-sm cursor-pointer hover:opacity-70 flex items-center"
                >
                  {item.title} <span>{item.icon}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="hidden md:flex flex-wrap gap-3">
              {Buttons.map((button) => (
                <button
                  key={button.id}
                  className="border-2 border-black bg-white text-[#6E726C] cursor-pointer px-3 py-1 text-sm tracking-wider hover:bg-black hover:text-white transition duration-700 font-serif"
                >
                  {button.title}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 text-md font-serif">
              {Menus.map((item) => (
                <p key={item.id} className="cursor-pointer hover:opacity-70">
                  {item.title}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-serif">
              {FooterItems.map((item) => (
                <button key={item.id} className="hover:opacity-70">
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
