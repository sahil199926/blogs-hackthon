"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Calendar, MapPin } from "lucide-react";
import { IEvent } from "@/types";
import DotBg from "../common/DotBg";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const UpcomingEventsCarousel = ({ events }: { events: IEvent[] }) => {
  return (
    <div className="relative bg-Neutrals-white">
      <div className="absolute -bottom-16 right-0 z-10 md:-bottom-[8rem]">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={420}
          cropHeightStart={0}
          cropHeightEnd={500}
        />
      </div>
      <div className="relative z-20 mx-auto max-w-8xl px-3 lg:px-10">
        <div>
          <h2 className="mb-8 mt-8 text-left text-Display-Semibold-24 md:text-Display-Semibold-32">
            Upcoming Events
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
            pagination={{
              clickable: true,
              el: ".swiper-pagination.custom-pagination",
            }}>
            {events?.map((event, index) => (
              <SwiperSlide
                key={index}
                className="rounded-lg border bg-white p-4 shadow-lg">
                <section className="sec-1 mb-3 flex flex-row items-center">
                  <Image
                    src={`https://s3.mordorintelligence.com/static/jd32.webp`}
                    alt={event.title}
                    className="mr-3 h-12 w-12 rounded-full"
                    width={50} // Adjust width as needed
                    height={50} // Adjust height as needed
                  />
                  <h3 className="text-Display-Semibold-20">{event.title}</h3>
                </section>
                <p className="mb-4 text-Body-Regular-14 text-Neutrals-800">
                  {event.description}
                </p>
                <div className="flex items-center">
                  <p className="mr-4 flex items-center text-Body-Medium-14 text-Neutrals-950">
                    <Calendar className="mr-1 inline-block h-5 w-5 text-Accent-Orange-950" />
                    {event.date}
                  </p>

                  <p className="text-Body-Medium-14 text-Neutrals-950">
                    <MapPin className="mr-1 inline-block h-5 w-5 text-Accent-Orange-950" />
                    {event.organizer}
                  </p>
                </div>
                <hr className="border-1 my-4 border-Neutrals-200" />
                <div className="mb-6 flex items-center">
                  <Image
                    src={event.author.pic}
                    alt={event.author.name}
                    className="mr-3 h-12 w-12 rounded-full"
                    width={50} // Adjust width as needed
                    height={50} // Adjust height as neededimg
                  />
                  <div>
                    <p className="text-Display-Semibold-16 text-Neutrals-950">
                      {event.author.name}
                    </p>
                    <p className="text-Caption-Regular-14 text-Neutrals-800">
                      {event.author.designation}
                    </p>
                  </div>
                </div>
                <hr className="border-1 my-4 border-Neutrals-200" />
                <div className="mt-4"></div>

                <div className="mt-4 flex items-center justify-between md:flex-row">
                  <span className="rounded-lg bg-Accent-Orange-50 p-1 px-2 text-Body-Medium-14 text-Neutrals-900">
                    {event.slotsLeft} slots left
                  </span>
                  <button className="bg-Primary-Blue-950 p-3 text-white hover:bg-Primary-Blue-800">
                    Register For The Event
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination custom-pagination md:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsCarousel;
