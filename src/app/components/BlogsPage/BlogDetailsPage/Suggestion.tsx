import { ISuggestion } from '@/types'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Suggestion({ suggestion }: { suggestion: ISuggestion }) {
  return (
    <article className="relative h-full">
      <div className="border md:h-full md:mb-4 md:max-w-full bg-Primary-Mordor-Blue-Bg-100 mt-10 md:mt-1">
        <div className="flex flex-col">
          <div className="mb-2 md:max-w-[320px] md:max-h-[100px] overflow-hidden">
            <Image
            className='w-full h-25'
             src={suggestion.image.link}
             alt={suggestion.image.altText}
             title={suggestion.image.title}
             width={320}
             height={100}
            />
          </div>
          <div className='p-[14px]'>
          <h3 className='text-Body-Semibold-14 text-Neutrals-950'>
          {suggestion.title}
          </h3>
          <p className='text-Body-Regular-12 text-Neutrals-900'>
            {suggestion.desc}
          </p>
          <Link
            href={suggestion.CTA.link}
            className='mt-[14px] inline-block py-[11px] px-[16px] bg-Primary-Blue-950 text-white cursor-pointer'
            >
           <span className='text-Link-medium-16'>
            {suggestion.CTA.title}
           </span>
          </Link>
          </div>
 
        </div>
      </div>
    </article>
  )
}

export default Suggestion;