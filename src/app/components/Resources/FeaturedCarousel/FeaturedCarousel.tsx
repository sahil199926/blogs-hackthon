'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import './swiper.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IFeatured } from "@/types";
import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";
import DotBg from "../../common/DotBg";

const FeaturedCarousel = ({
    title,
    featuredStudies
}:IFeatured) => {
  return (
    <div className='bg-Primary-Mordor-Blue-Bg-50 relative'>
      <div className="absolute -bottom-0  md:-bottom-[8rem] left-0 z-10">
        <DotBg
          cropWidthStart={100}
          cropWidthEnd={420}
          cropHeightStart={0}
          cropHeightEnd={500}
        />
      </div>
      <div className="mx-auto max-w-8xl px-3 py-10 lg:p-10 z-20 relative">
        <div className="px-4 ">
          <h2 className="text-[1.5rem] leading-[2rem] md:text-Display-Semibold-32  mb-4">{title}</h2>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true,}}
              className="overflow-hidden"
            >
              {featuredStudies?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="grid md:grid-cols-2 bg-gray-100 overflow-hidden">
                    <div className="flex items-center justify-center bg-blue-100">
                      <Image
                        src={item.featuredImage}
                        alt={item.title}
                        width={500}
                        height={500}
                        className="w-[100%] h-auto"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <p className="text-Neutrals-800 text-Caption-Regular-14 mb-3">
                        <span className='mr-2'>
                          {item.category}
                        </span>  |   
                        <span className='ml-3 mr-2'>
                          {item.reportTitle}
                        </span>   • 
                        <span className='font-medium text-Neutrals-950 mx-2'>
                          {item.date}
                        </span>
                      </p>
                      <h3 className=" text-Display-Semibold-24 md:text-Display-Semibold-32 mb-3">{item.title}</h3>
                      <p className="text-Body-Regular-14 md:text-Body-Regular-16 text-Neutrals-900 mb-7">{item.desc}</p>
                      
                      <hr
                        className="my-4 border-1 border-Neutrals-200"
                      />
                      
                      <div className="mt-4 flex flex-row-reverse md:flex-row justify-between items-center">
                        <span className="text-Body-Medium-14 text-Neutrals-900 bg-Primary-Mordor-Blue-Bg-100 p-1 px-2">
                          {item.readTime}
                        </span>
                        <a href="#" className="text-Link-medium-16 text-Accent-Orange-950 hover:underline flex">
                          Read {item.category}
                          <ArrowUpRight
                            size={19}
                            className="ml-1"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-navigation-buttons absolute -top-10 right-16 flex space-x-2 mt-2 mr-2">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;