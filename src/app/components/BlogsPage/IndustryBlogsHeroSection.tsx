import React from 'react';
import Image from 'next/image';
import {  IIndustryBlogsHeroDetails } from "@/types";
import DotBg from '../common/DotBg';

const IndustryBlogsHeroSection = ({
    heroSectionDetails,
}:{
   heroSectionDetails:  IIndustryBlogsHeroDetails;
}) => {
  return (
    <div className="relative flex justify-center
     bg-primary-gradient">
      <section className='container w-full max-w-[1440px]'>
            <div className='flex flex-col-reverse justify-between items-center md:flex-row p-4 md:px-[68px] md:py-20'>
                <div className='flex-[0_1_48%]'>
                    <h1 className='text-Display-Semibold-24 md:text-Display-Semibold-40
                    text-[1.625rem] leading-[2.375rem]t
                    md:text-[2.5rem] md:leading-[3.5rem] mb-5'>
                        {heroSectionDetails.heading}
                    </h1>
                    <p className="text-[0.875rem] leading-[1.25rem] md:text-Body-Regular-18  text-Neutrals-900 font-normal">
                       {heroSectionDetails.desc}
                    </p>
                </div>
                <div className="sec-2 mb-8">
                                    <Image 
                                    src={heroSectionDetails.image.link} 
                                    alt={heroSectionDetails.image.altText} 
                                    title={heroSectionDetails.image.title} 
                                    width={600} 
                                    height={600} />
                </div>
            </div>
          </section>
       <div className="absolute left-0  -bottom-20 md:-bottom-40 z-10">  
        <DotBg
          cropWidthStart={756}
          cropWidthEnd={1156}
          cropHeightStart={0}
          cropHeightEnd={500}
        />
      </div>
    </div>
  )
}

export default IndustryBlogsHeroSection;