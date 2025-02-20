import { IPerk } from '@/types'
import React from 'react'
import { Check } from 'lucide-react';

function PerkCard(data: IPerk) {
  return (
    <div className='flex flex-col gap-5 bg-white p-6 w-full max-w-none lg:min-w-[300px] sm:max-w-[320px] max-h-[312px] mt-0 md::mt-8 mb-0 md::mb-[6px] sm:border-none border-b border-Neutrals-200'>
        <div className='flex justify-center items-center h-16 w-16'>{data.icon}</div>
        <div className='flex flex-col gap-[6px]'>
            <h3 className='text-Body-Semibold-20 text-Neutrals-950'>{data.title}</h3>
            <ul className='flex flex-col'>
            {data.points.map((point, index) => (
                    <li key={index} className='flex gap-2 py-2'>
                        <Check size={18} color='#30AC66'/>
                        <p className='text-Body-Medium-14 text-Neutrals-900'>{point}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default PerkCard