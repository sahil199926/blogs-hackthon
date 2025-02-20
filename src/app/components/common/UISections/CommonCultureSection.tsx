import { ICultureSection } from "@/types";
import Image from "next/image";
import Link from "next/link";

const cultureData :ICultureSection = {
  bgColor: "#FFFFFF",
  kicker: "Culture",
  heading: "It's all About the People",
  description: "Mordor's people-first culture continues to inspire our employees to reach their full potential through courage, agility, creativity, independence, learning, and collaboration.",
  cta: {
    title: "Join Our Team",
    link: "#"
  },
  galleryImages: "https://s3.mordorintelligence.com/static/d3weGallery.webp"
}


function CommonCultureSection() {
  return (
    <section style={{ backgroundColor: cultureData.bgColor }} className="flex justify-center ">
      <div className="container max-w-[1440px] flex flex-col gap-12 pb-14 md:pb-0 pt-10 md:pt-12">

        {/* Upper Div - Text & Button*/}
        <div className="flex flex-col items-center gap-8 px-4 sm:px-10 md:px-[88] z-20">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-Display-FullCaps-18 text-Neutrals-900 uppercase">{cultureData.kicker}</h2>
    
            <div className="flex flex-col gap-4 items-center max-w-[820px]">
              <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-32 ">{cultureData.heading}</h3>
              <p className="text-Body-Regular-14 md:text-Body-Regular-16 text-Neutrals-900 text-center">{cultureData.description}</p>
            </div>
          </div>
  
          <button className="bg-Primary-Blue-950 hover:bg-Primary-Blue-800 self-centre">
            <Link href={cultureData.cta.link}>
              <h2 className="px-4 py-3 text-Link-medium-16 text-Neutrals-white">{cultureData.cta.title}</h2>
            </Link>
          </button>
        </div>

        {/* Lower Div - Image */}
        <div className="relative flex h-[320px] md:h-[420px] justify-center overflow-hidden mb-0 md:mb-8">
          <Image src={cultureData.galleryImages} width={1750} height={420} alt="Culture Image" className="absolute min-w-[1750px]"/>
        </div>

      </div>
    </section>
    );
}

export default CommonCultureSection;
