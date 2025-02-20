import React from "react";
import { IAwards } from "@/types";
import Image from "next/image";



const awardsData:IAwards = {
  kicker: "awards",
  heading: "You are in Safe Hands",
  text: "Trusted by brands across industries, geographies, and sizes.",
  logoList: [
    {"title": "MRSI","src":"https://s3.mordorintelligence.com/static/MRSI.webp","alt": "MRSI award logo"},
    {
      "title": "ESOMAR",
      "src": "https://s3.mordorintelligence.com/static/ESOMAR.webp",
      "alt": "ESOMAR award logo"
    },
    {
      "title": "GPTW",
      "src": "https://s3.mordorintelligence.com/static/d3e.webp",
      "alt": "Great Place To Work award logo"
    },
    {
      "title": "ISO",
      "src": "https://s3.mordorintelligence.com/static/iso32e.webp",
      "alt": "ISO logo"
    }
  ],
  bgImg: {
        "title": "Awards Background",
        "src": "https://s3.mordorintelligence.com/static/awards-Bg.webp",
        "alt": "Awards background image"
      }
}


export default function CommonawardsDataSection() {
  return (
    <div className="relative w-full h-full">
        {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          title={awardsData.bgImg.title}
          src={awardsData.bgImg.src}
          alt={awardsData.bgImg.alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="center"
        />
      </div>

      {/* Content */}
      <div className="relative container flex flex-col lg:flex-row gap-10 justify-between max-w-[1440px] mx-auto px-4 md:px-10 xl:px-[88px] py-10 md:py-[110px]">

        {/* Left Section */}
        <div className="flex flex-col gap-4 w-full text-Neutrals-white">
          <h2 className="uppercase text-Display-FullCaps-16 md:text-Display-FullCaps-18">{awardsData.kicker}</h2>
          <div className="flex flex-col gap-2">
              <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-32">{awardsData.heading}</h3>
              <p className="text-Body-Regular-14 md:text-Body-Regular-16">{awardsData.text}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-between sm:justify-start gap-6 sm:gap-[60px] w-full items-center">
          {awardsData.logoList.map((logo) => (
            <div key={logo.src} className="flex justify-center items-center max-w-[136px] max-h-[100px]">
                <Image
                  title={logo.title}
                  src={logo.src}
                  alt={logo.alt}
                  objectFit="none"
                  height={100}
                  width={70}
                  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
