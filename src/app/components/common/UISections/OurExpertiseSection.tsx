import { IOurExpertise } from '@/types'
import { ChevronRightIcon } from 'lucide-react'
import React from 'react'
import DotBg from '../DotBg'

const OurExpertiseSection = ({
    title,
    desc,
    steps
}:IOurExpertise) => {
  return (
    <div className='bg-Primary-Mordor-Green-Bg-50 relative'>
      <div className="z-10 absolute top-1 right-0 hidden md:block">
           <DotBg
            cropWidthStart={0}
            cropWidthEnd={280}
            cropHeightStart={0}
            cropHeightEnd={400}
          />
      </div>
        <div className='mx-auto max-w-8xl px-3 py-10 lg:p-10'>
            <section className="text-center">
      <div className="text-center mb-8">
        <h2 className="text-[1.5rem] leading-[2rem] md:text-Display-Semibold-32 mb-4 text-Neutrals-950 font-semibold">{title}</h2>
        <p className="text-Neutrals-900 text-Body-Regular-14 md:text-Body-Regular-16 max-w-3xl mx-auto">{desc}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 flex-col md:flex-row">
        {steps.map((step, index) => (
          <a
            key={index}
            href={step.link}
            className="text-Body-Medium-16 text-Primary-Blue-950 flex justify-between md:justify-normal items-center space-x-2 hover:underline border-b border-[#008FDB33] sm:last:border-none md:border-none py-1 md:py-0"
          >
            <span>{step.text}</span>
            <span>
                <ChevronRightIcon size={18} />
            </span>
          </a>
        ))}
      </div>
    </section>
        </div>
    </div>
  )
}

export default OurExpertiseSection