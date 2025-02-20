import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { IPricingTopSection } from "@/types";
import DotBg from "../common/DotBg";

const TopSection = (topSection: IPricingTopSection) => {
  return (
    <section className="flex flex-col">
      {/* “Back” Link */}
      <Link href="/" className="mx-auto w-[95%] min-w-max max-w-[1440px] py-3 flex flex-row items-center space-x-1 text-gray-700 hover:text-gray-900">
        <ChevronLeft size={20} />
        <span className="text-Display-Semibold-14 text-neutral-900">Back</span>
      </Link>
      
      <hr className="w-full border-b-[1px] border-gray-200" />

      <div className="relative">
        {/* Title and Logos */}
      <div className="mx-auto w-[95%] max-w-[1440px] py-12 flex flex-col md:flex-row justify-between md:items-center gap-14">
        <h1 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-neutral-950">{topSection.heading}</h1>
        <div className="z-10 flex flex-row gap-5">
          {topSection.logoList.map((logo, index) => (
              <Image
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              height={100}
              width={100}
              className="object-contain w-[70px] md:w-[140px] h-[80px] md:h-[140px]"
            />
          ))}
        </div>
      </div>

      {/* Dots & Lines background, cropped */}
      <div className="absolute top-0 right-0 h-full">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={250}
          cropHeightStart={245}
          cropHeightEnd={489} 
        />
      </div>
      </div>
    </section>
  );
};

export default TopSection;