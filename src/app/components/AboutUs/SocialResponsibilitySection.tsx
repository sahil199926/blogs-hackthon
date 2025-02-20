import React from "react";
import {  ISocialResponsibility } from "@/types";
import Image from "next/image";
import Link from "next/link";


export default function SocialResponsibilitySection({
  heading,
  bgImage,
  title,
  desc,
  CTA
}:ISocialResponsibility) {
  return (
    <div className="relative w-full h-full">
        {/* Background Image */}
     <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="center"
          title={heading}
        />
        <div className="absolute inset-0 bg-[#006FABCC]"></div>
      </div>


      {/* Content */}
      <div className="relative container flex flex-col lg:flex-row gap-10 justify-between max-w-[1000px] mx-auto px-4 md:px-10 xl:px-[88px] py-10 md:py-[110px] text-center">

        {/* Left Section */}
        <div className="flex flex-col gap-4 w-full text-Neutrals-white">
          <h2 className="uppercase text-Display-FullCaps-16 md:text-Display-FullCaps-18">{heading}</h2>
          <div className="flex flex-col gap-2 mb-4">
              <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-32 mb-4">{title}</h3>
              <p className="text-Body-Regular-14 md:text-Body-Regular-16">{desc}</p>
          </div>
          <div className='w-full'>
           <Link
                className="hero-section-btn w-[144px] bg-Primary-Blue-50 text-sm font-medium text-Primary-Blue-950 hover:bg-Primary-Blue-100 lg:py-[11px] lg:text-[16px] lg:leading-6"
                href={CTA.link}
                target="_blank"
              >
                {CTA.title}
          </Link>
          </div>
        </div>

        

        {/* Right Section */}
        
      </div>
    </div>
  );
}
