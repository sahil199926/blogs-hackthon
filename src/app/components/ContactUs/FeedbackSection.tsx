import dynamic from 'next/dynamic';
import { ArrowUpRight, NewspaperIcon } from 'lucide-react'
import React from 'react'
import India from '@/assets/india.svg'
import Image from 'next/image'
import Link from 'next/link';
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

const FeedbackSection = () => {
  return (
    <div className='bg-Primary-Mordor-Blue-Bg-100 relative'>
      <div className="mx-auto max-w-8xl px-3 py-10 lg:p-10 grid grid-cols-3 gap-12">
        <div className='feedback-form-sec bg-white p-8 col-span-3 md:col-span-1'>
          <NewspaperIcon size={24} className='text-Accent-Orange-900 mb-4' />

          <h2 className='text-Display-Semibold-24 md:text-Display-Semibold-20 mb-4'>Feedback Form</h2>
          <p
            className='text-Body-Regular-14 md:text-Body-Regular-16 mb-4'
          >
            Let us know how your experience was with us? Your feedbacks are invaluable to us to provide you with best experience
          </p>

          <button
            type="submit"
            className="flex h-[46px] w-48 items-center justify-center  bg-Primary-Blue-950 p-2 text-white">

            <div className="flex items-center text-base">
              <ArrowUpRight size={20} className="text-white" />
              {'Submit Feedback'}
            </div>

          </button>

        </div>
        <div className='office-sec bg-white col-span-3 md:col-span-2 flex justify-between p-8 items-start md:items-center flex-col md:flex-row'>
          <div className='office-sec-inner-1 mb-3'>
            <h2 className='text-Display-Semibold-24 md:text-Display-Semibold-20 mb-4'>Office Location</h2>
            <div className="mb-3 flex items-center text-[1rem] leading-[1.5rem] font-semibold"><span className='mr-1'>
              <Image src={India} alt="India" width={20} height={20} />
            </span>Hyderabad, India</div>
            <div id='address' className='text-Body-Regular-16 text-Neutrals-800'>
              <p>11th Floor, Rajapushpa Summit</p>
              <p>Nanakramguda Rd, Financial District, Gachibowli</p>
              <p>Hyderabad, Telangana - 500032</p>
              <p>India</p>
              <p>Reach us at: <Link href='tel: +1 617-765-2493'>+1 617-765-2493</Link></p>
            </div>
          </div>
          {/* Mordor Intelligence Pvt. Ltd. Location */}
          <div
            className='office-sec-inner-2 w-full md:w-2/5'
            style={{
              height: '244px'
            }}
          >
            {/* Google map Iframe */}
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSection