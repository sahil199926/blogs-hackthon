import { IWhatWeDo } from '@/types'
import React from 'react'
import DotBg from '../common/DotBg'

export const WhatWeDoSection = ({
    heading,
    title,
    desc,
    steps
}:IWhatWeDo) => {
  return (
    <div className='bg-white hidden md:block relative'>
        <div className="z-0 absolute right-0 bottom-0 hidden md:block">
           <DotBg
            cropWidthStart={50}
            cropWidthEnd={480}
            cropHeightStart={0}
            cropHeightEnd={180}
          />
      </div>    
        <div
        className="mx-auto max-w-8xl px-3 py-10 lg:p-10"
        >
            <section className="">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
        {/* Left Content */}
        <div className="lg:w-1/3 space-y-4">
          <h2 className="text-Display-FullCaps-16 
        md:text-[1.125rem] md:leading-[1.688rem]
        font-medium uppercase text-Neutrals-900 mb-5">
            {heading}
          </h2>
          <h3 className="text-[1.5rem] leading-[2rem] md:text-Display-Semibold-32 mb-4 text-Neutrals-950 font-semibold">
            {title}
          </h3>
          <p className="text-Neutrals-900 text-Body-Regular-14 md:text-Body-Regular-16 ">{desc}</p>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/3 grid grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <a
              key={index}
              href={step.link}
              className="text-Body-Medium-16 text-Primary-Blue-950 flex justify-between md:justify-normal items-center space-x-2 hover:underline border-b border-[#008FDB33] sm:last:border-none md:border-none py-1 md:py-0"
            >
              <span className="text-sm font-medium">{step.text}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
        </div>
    </div>
  )
}
