"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";

const Gallery = () => {
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    const getPhotos = async() => {
      const res = await axios.get("/api/gallery");
      const data = await res.data
      setGallery(data);
    }
    getPhotos();
  }, []);
  return (
    <div className="bg-[#f8f8f6]">
      <div className="flex border py-2 pr-2 mr-6 md:mr-6 lg:mr-56">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={1}
          loop={true}
          autoplay={{ delay: 1, disableOnInteraction: false, reverseDirection: true }}
          speed={2000}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {[...gallery, ...gallery].map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-50 sm:h-62.5 md:h-70 lg:h-75">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
