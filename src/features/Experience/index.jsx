import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div className="bg-[#f8f8f6]">
      <div className="container mx-auto py-28 md:py-32 lg:py-40">
        <div className="flex flex-col md:flex-col lg:flex-row justify-center gap-20 md:gap-24 lg:gap-32 mx-10 md:mx-18 lg:mx-40">
          <div className="space-y-8">
            <h1 className="text-black text-7xl md:text-6xl lg:text-8xl tracking-wide">
              Experience
            </h1>
            <p className="tracking-wide">Local Sights and Activities</p>
            <p className="text-black font-serif leading-relaxed">
              Within walking distance lies the Jigokudani Monkey Park, famous
              worldwide for its endearing Troop of Japanese Macaques, nicknamed
              Snow Monkeys, who bathe in hot springs to stave off the winter
              cold. Additional nearby sights include Shiga Kogen, renowned for
              world-class skiing in winter and fantastic views year round, and
              the historic Zenkoji temple that has persisted at the heart of
              Japanese Buddhism for centuries . Additionally, don’t miss the
              charming sights of Obuse, home to chestnut sweets and the
              Katsushika Hokusai Museum. Using Hotarutei as your base, you can
              enjoy a variety of activities and experiences throughout this
              lovely region of Japan.
            </p>
          </div>
          <Image
            src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/experience/map_wide_pc_en.svg"
            height={700}
            width={700}
            alt="photo"
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}

export default Experience