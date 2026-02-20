import { Infos } from "@/constants";
import Image from "next/image";
import React from "react";
import Icon1 from "../../../public/assets/icons/icon1";

const Information = () => {
  return (
    <div className="bg-[#f8f8f6]">
      <div className="container mx-auto px-4 py-40">
        <hr className="mx-2 md:mx-20 lg:mx-44" />

        <div className="flex mx-2 md:mx-6 lg:mx-44">
          <div className="flex mt-14 gap-4">
            <h1 className="[writing-mode:vertical-rl] text-6xl">Information</h1>
            <p className="[writing-mode:vertical-rl]">Latest</p>
          </div>

          <div className="flex-1 ml-20">
            {Infos.map((info) => (
              <div key={info.id}>
                <div className="flex items-center justify-between font-serif text-md mt-14 mb-2 gap-2 md:gap-0 lg:gap-0">
                  <div className="flex flex-col gap-2 md:gap-12 lg:gap-12 md:flex-row lg:flex-row">
                    <div className="flex gap-2 md:gap-12 lg:gap-12">
                      <p>{info.time}</p>
                      <p>{info.type}</p>
                    </div>
                    <div>
                      <p>{info.desc}</p>
                    </div>
                  </div>

                  <div className="-rotate-90">
                    <Icon1 />
                  </div>
                </div>
                <hr />
              </div>
            ))}

            <div className="mt-14">
              <p className="text-lg font-semibold underline-offset-auto ">
                View All
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
