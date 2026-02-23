import { ReservationItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Reservation = () => {
  return (
    <div className="bg-[#f8f8f6]">
      <div className="container mx-auto px-4 ">
        <div className=" md:flex lg:flex justify-center gap-32 hidden">
          {ReservationItems.map((info) => (
            <div
              key={info.id}
              className="flex justify-center items-center rounded-full border-2 border-black w-28 h-28 md:w-36 md:h-36 lg:w-55 lg:h-55 font-serif"
            >
              <Link href="#">{info.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
