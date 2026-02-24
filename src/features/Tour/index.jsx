"use client";
import { GalleryPhotos } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import axios from "axios";

const Tour = () => {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/tour");
        const data = response.data;
        setTour(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="bg-[#f8f8f6]">
      <div className="flex pl-2 ml-6 md:ml-6 lg:ml-56">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
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
          {tour.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className=" relative border py-2 gap-40 w-full h-62.5 md:h-70 lg:h-75">
                <Image
                  src={photo.img}
                  alt={photo.title}
                  fill
                  loading="eager"
                  className="p-2 object-cover transition-transform duration-500 hover:scale-105"
                  unoptimized
                />
                <div className="absolute bottom-2 bg-[#f8f8f6] px-3 py-1">
                  <p className="text-sm font-serif font-medium">{photo.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tour;
