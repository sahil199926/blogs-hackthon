"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { ICaseStudiesCard, IContentCard, IEmployeeStoryCard } from "@/types";
import CaseStudyCard from "../UISections/OurImpact/CaseStudyCard";
import ContentCard from "../../HomePage/WhatsNewSection/ContentCard";
import EmployeeStoryCard from "../../CareersLandingPage/EmployeeStoriesSection/EmployeeStoryCard";

import { EffectCards, Pagination, Autoplay } from "swiper/modules";
function CardSwiper({
  dataList,
  from,
}: {
  dataList: (ICaseStudiesCard | IContentCard | IEmployeeStoryCard)[];
  from: string;
}) {
  /**
   * CardSwiper component renders a Swiper with card effect and pagination.
   *
   * @component
   * @example
   * return (
   *   <CardSwiper />
   * )
   *
   * @returns {JSX.Element} A Swiper component with multiple slides.
   *
   * @remarks
   * - The Swiper changes direction based on screen width breakpoints.
   * - Uses `EffectCards`, `Pagination`, and `Autoplay` modules from Swiper.
   * - Autoplay is set with a delay of 20000ms and does not disable on interaction.
   *
   * @see https://swiperjs.com/react for more information on Swiper.
   */
  return (
    <>
      <Swiper
        effect={"cards"}
        loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        cardsEffect={{
          rotate: false,
          perSlideRotate: 0,
          perSlideOffset: 1,
        }}
        direction="horizontal"
        breakpoints={{
          1024: {
            direction: "vertical",
            cardsEffect: {
              perSlideOffset: 16, // Offset for screens >= 1024px
            },
          },
        }}
        grabCursor={true}
        modules={[EffectCards, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className="mySwiper swiper flex overflow-hidden">
        {dataList.map((data, index) => {
          if (from === "landing-page/our-impact") {
            return (
              <SwiperSlide
                key={index}
                className="flex max-h-[171px] gap-0 bg-white px-6 py-6 shadow-mordorCustom md:max-h-[180px] lg:gap-8">
                <CaseStudyCard key={index} data={data as ICaseStudiesCard} />
              </SwiperSlide>
            );
          } else if (from === "landing-page/whats-new") {
            return (
              <SwiperSlide
                key={index}
                className="flex max-h-[171px] md:max-h-[180px]">
                <ContentCard key={index} data={data as IContentCard} />
              </SwiperSlide>
            );
          }
          else if (from === "careers-landing-page/employee-stories") {
            return (
              <SwiperSlide
                key={index}
                className="flex  md:max-h-[236px] gap-0 bg-white px-6 py-5 shadow-mordorCustom lg:gap-8">
                <EmployeeStoryCard key={index} data={data as IEmployeeStoryCard} />
              </SwiperSlide>
            );
          }
          else if (from === "industry-page/industry-details") {
            return (
              <SwiperSlide
                key={index}
                className="flex max-h-[171px] md:max-h-[180px] shadow-mordorCustom">
                <ContentCard key={index} data={data as IContentCard} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
}

export default CardSwiper;
