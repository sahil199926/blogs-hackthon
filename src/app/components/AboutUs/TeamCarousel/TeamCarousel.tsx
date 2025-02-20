"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ITeamSection } from "@/types";

const TeamCarousel = ({ title, teamMember, CTA, background }: ITeamSection) => {
  return (
    <section className={"mx-auto max-w-8xl px-3 py-10 lg:p-10 relative "+ (background || "")}>
      <div className="text-center">
        <h2 className="text-[1.5rem] leading-[2rem] md:text-Display-Semibold-32 text-Neutrals-950 font-semibold mb-1 md:mb-4 text-left ">
          {title}
        </h2>

        <div className="mt-4 text-left md:hidden">
          <a
            href={CTA.link}
            className="inline-block bg-transparent text-Primary-Blue-950 px-4 py-2 hover:bg-Primary-Blue-800 transition border-2 border-Primary-Blue-950 mb-7"
          >
            {CTA.title}
          </a>
        </div>

        {/* Swiper Container */}
        <div className="relative swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 3.5 },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            className="pb-10"
          >
            {teamMember.map((member, index) => (
              <SwiperSlide key={index} className="p-2">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.link}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="w-full object-cover"
                  />
                  <div id="member-details" className="absolute bottom-0 left-0 right-0 p-4 text-left text-white">
                    <h3 className="text-Display-Semibold-24">{member.name}</h3>
                    <p className="text-Body-Medium-14">{member.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination md:hidden mt-4"></div>
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute -top-10 right-16 flex space-x-2 mt-2 hidden md:block">
            <button aria-label="Previous" className="swiper-button-next bg-white p-2 rounded-full shadow-md flex items-center justify-center w-10 h-10">
              <ChevronLeft width={16} height={16} />
          </button>
          <button
          aria-label="Next"
          className="swiper-button-prev bg-white p-2 rounded-full shadow-md flex items-center justify-center w-10 h-10">
            <ChevronRight width={16} height={16} />
          </button>
          </div>
        </div>

        {/* Call To Action */}
        <div className="hidden md:block">
          <a
            href={CTA.link}
            className="inline-block bg-transparent text-Primary-Blue-950 px-6 py-3 hover:bg-Primary-Blue-950 hover:text-white transition border-2 border-Primary-Blue-950"
          >
            {CTA.title}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;