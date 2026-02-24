import React from "react";
import Icon1 from "../../../public/assets/icons/icon1";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import Timeline from "../../components/Timeline";
import Link from "next/link";

const Overview = () => {
  return (
    <div className="bg-[#f8f8f6] py-12">
      <div className="container mx-auto px-4 ">
        <div className="mt-20 mx-1 md:mx-2 lg:mx-40 flex flex-col gap-6">
          <h1 className="text-7xl tracking-wider">Overview</h1>
          <div className="flex items-center gap-2">
            <div className="-rotate-90">
              <Icon1 />
            </div>
            <h3 className="text-xl">About Hotarutei</h3>
          </div>
          <div className="md:pr-12 lg:pr-44 my-4">
            <p className="font-serif text-sm md:text-base leading-relaxed tracking-wide">
              Hotarutei is centered around a two-story, wooden farmhouse that
              boasts a floor space of over 660 square meters. Constructed with
              substantial beams and pillars, and furnished with a large Zelkova
              wood main pillar, it exudes a sense of quiet dignity that will
              captivate any onlooker.
              <br />
              Built in the 1850s, only a few short years before the fall of the
              Shogun, this farmhouse originally served as the residence of a
              family of wealthy farmers in Tokamachi City, Niigata - one of the
              snowiest regions in Japan. However, in April 1987, the house was
              relocated to its current location in Kanbayashi Onsen, Nagano.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-24">
            <div className="">
              <Link href="#" className="flex gap-4 items-center text-xl font-semibold underline">
                View Detail
                <div className="-rotate-90">
                  <Icon1 />
                </div>
              </Link>
            </div>
            <Image
              src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/overview/exterior.webp"
              width={800}
              height={800}
              alt="photo"
              loading="eager"
              unoptimized
              className="border border-black p-2"
            />
          </div>
        </div>
        <Timeline />
        <div className="flex flex-col items-center py-6">
          <Image
            src="/assets/images/map.svg"
            width={1000}
            height={1000}
            alt="Overview"
          />
        </div>
        <div className="flex items-center justify-between mx-2 md:mx-8 lg:mx-60">
          <div className="flex items-center gap-4">
            <MoveLeft size={10} />
            <p className="text-sm">
              Entry to the Snow Monkey Park Walking Trail (8 mins. on foot)
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm">
              Snow Monkey Park Bus Stop (2 mins. on foot)
            </p>
            <MoveRight size={10} />
          </div>
        </div>
        <div className="flex justify-center my-24">
          <iframe width="1186" height="666" src="https://www.youtube.com/embed/skc5t1G5rFU" title="穂垂亭 (HOTARUTEI)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Overview;
