import Image from 'next/image'
import React from 'react'
import { IBlogHeroSectionDetails } from "@/types";

const BlogHeroSection = ({
    heroSectionDetails,
}:{
   heroSectionDetails: IBlogHeroSectionDetails;
}) => {
  return (
    <div className="bg-primary-gradient relative ">
        <div
        className="mx-auto max-w-8xl px-3 py-10 md:px-[68px]">
            <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
                <div className='sec-1'>
                    <h1 className='text-Display-Semibold-24 md:text-Display-Semibold-40
                    text-[1.625rem] leading-[2.375rem]t
                    md:text-[2.5rem] md:leading-[3.5rem] mb-5'>
                        {heroSectionDetails.heading}
                    </h1>
                    <p className="text-[0.875rem] leading-[1.25rem] md:text-Body-Regular-18 max-w-md text-Neutrals-900 font-normal">
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
        </div>
    </div>
  )
}

export default BlogHeroSection;