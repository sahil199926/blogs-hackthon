import CustomLinkTag from '@/components/Tags/CustomLinkTag';
import Image from 'next/image'
import React from 'react'

const BannerSection = ({
    heading,
    desc,
    headerImage,
    ctaLink,
    ctaTitle,
    certification,
}:{
    heading: string;
    desc: string;
    headerImage: string;
    ctaTitle:string;
    ctaLink:string;
    certification:string[];
}) => {
  return (
    <div className="bg-primary-gradient relative ">
        <div
        className="mx-auto max-w-8xl px-3 py-10 lg:p-10">
            <div className='flex flex-col flex-col-reverse md:flex-row justify-between items-center '>
                <div className='sec-1'>
                    <h1 className='text-Display-Semibold-16
                    text-[1.625rem] leading-[2.375rem]t
                    md:text-[2.5rem] md:leading-[3.5rem] mb-5'>
                        {heading}
                    </h1>
                    <p className="text-[0.875rem] leading-[1.25rem] md:text-Body-Regular-18 max-w-md text-Neutrals-900 font-normal mb-8">
                       {desc}
                    </p>


                    <div className='flex flex-col-reverse md:flex-col'>
                    {/* Add CTA */}
                    <div id='cta' className='mb-8'>
                        <CustomLinkTag
                        href={ctaLink}
                        className="hero-section-btn min-w-max bg-Primary-Blue-950 text-sm font-medium text-Primary-Blue-50 hover:bg-Primary-Blue-800 lg:py-[11px] lg:text-[16px] lg:leading-6"
                        >
                            {ctaTitle}
                        </CustomLinkTag>
                    </div>

                    {/* Add Certification */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {certification.map((cert, index) => (
                            <Image 
                            key={index}
                            src={cert}
                            alt="certification"
                            title={certification+ ' '+index}
                            width={55}
                            height={55} />
                        ))}
                    </div>
                    </div>
                </div>

                <div className="sec-2 mb-8">
                    <Image 
                    src={headerImage} 
                    alt="contact-us-banner" 
                    title={heading}
                    width={500} 
                    height={500} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSection