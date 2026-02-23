import { AccessItems } from "@/constants";
import { RectangleHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon1 from "../../../public/assets/icons/icon1";

const Access = () => {
  return (
    <div className="bg-[#f8f8f6]">
      <div className="container mx-auto py-28 md:py-12 lg:py-12">
        <div className="flex flex-col md:flex-col lg:flex-row gap-20 md:gap-24 lg:gap-2 mx-10 md:mx-18 lg:mx-52">
          <div className="space-y-12">
            <h1 className="text-black text-7xl md:text-6xl lg:text-8xl tracking-wide">
              Access
            </h1>
            <div className="space-y-2">
              <p className="font-serif text-lg font-semibold tracking-wide">
                Nagano, Shimotakai district, Yamanouchi, Hirao 1398-1
              </p>
              <Link
                href="https://www.google.com/maps/place/%E7%A9%82%E5%9E%82%E4%BA%AD+HOTARU-TEI/@36.728816,138.4403543,17z/data=!3m1!4b1!4m6!3m5!1s0x601df38375455523:0x3d82fda34626a4c6!8m2!3d36.728816!4d138.442543!16s%2Fg%2F11fjsch86p?output=search&q=%E7%A9%82%E5%9E%82%E4%BA%AD&sa=X&ved=2ahUKEwiMhcOs74OAAxUXtlYBHfbyAQUQ0pQJegQIDRAB&entry=tts&shorturl=1"
                target="_blank"
                className="flex items-center gap-4 text-lg hover:text-gray-400 duration-500"
              >
                Google Maps
                <RectangleHorizontal size={15} />
              </Link>
            </div>
            <div className="space-y-2">
              {AccessItems.map((item) => (
                <p
                  className="text-black font-serif tracking-wide"
                  key={item.id}
                >
                  {item.desc}
                </p>
              ))}
              <div className="flex items-center gap-4">
                <p className="hover:text-gray-400 duration-500 text-lg">
                  View Detail
                </p>
                <div className="-rotate-90">
                  <Icon1/>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/common/access/map.svg"
            height={350}
            width={350}
            alt="photo"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Access;
