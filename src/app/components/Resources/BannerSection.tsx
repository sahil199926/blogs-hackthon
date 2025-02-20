import Image from 'next/image'
import React from 'react'

const BannerSection = ({
    heading,
    desc,
    headerImage,
}:{
    heading: string;
    desc: string;
    headerImage: string;
}) => {
  return (
    <div className="bg-primary-gradient relative ">
        <div
        className="mx-auto max-w-8xl px-3 lg:px-10">
            <div className='flex flex-col flex-col-reverse md:flex-row justify-between items-center '>
                <div className='sec-1'>
                    <h1 className='text-Display-Semibold-16
                    text-[1.625rem] leading-[2.375rem]t
                    md:text-[2.5rem] md:leading-[3.5rem] mb-5'>
                        {heading}
                    </h1>
                    <p className="text-[0.875rem] leading-[1.25rem] md:text-Body-Regular-18 max-w-xl text-Neutrals-900 font-normal">
                       {desc}
                    </p>
                </div>

                <div className="sec-2 mb-8 md:mb-0">
                    <Image
                    title={heading}
                    src={headerImage} 
                    alt="contact-us-banner" 
                    width={500} 
                    height={500} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSection