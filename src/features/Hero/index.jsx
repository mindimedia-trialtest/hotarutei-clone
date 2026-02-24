import React from "react";

const Hero = () => {
  return (
    <div className=" w-full h-125 border-2 p-2">
      <video
        src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/visual/main.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default Hero;
