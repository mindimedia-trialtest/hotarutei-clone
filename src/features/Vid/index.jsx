import Image from "next/image";
import React from "react";

const Show = () => {
  return (
    <div className="bg-[#6E726C] flex flex-col md:flex-row-reverse lg:flex-row-reverse md:justify-center lg:justify-center gap-4 md:gap-10 lg:gap-18 h-screen">
      <video
        src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/stay/movie01.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full md:w-1/2 lg:w-1/2 h-fit border border-white p-2 m-2"
      ></video>
      <div className="lg:mt-40 md:mt-20 mt-0">
        <Image
          src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/stay/pic03.webp"
          unoptimized
          width={300}
          height={500}
          alt="photo"
          className="border-2 border-white p-2 ml-2"
        />
      </div>
    </div>
  );
};

export default Show;
