"use client"
import { IOurExpertise } from "@/types"
import { ChevronRight } from "lucide-react"
import { useState } from "react";

function OurExpertise({ ourExpertise }: { ourExpertise: IOurExpertise }) {
  const [selectedData, setSelectedData] = useState<string>();
  const handleMouseEffect = (data: string) => {
    setSelectedData(data)
  }

  return (
    <div className='bg-Primary-Mordor-Blue-Bg-50'>
      <div className='py-10 md:py-14 mx-auto max-w-8xl px-3 lg:p-10 '>
        <h2 className='text-Display-Semibold-24 md:text-Display-Semibold-32 mb-4 text-center'>{ourExpertise.title}</h2>
        <p className='mt-2 md:mt-4 max-w-[834px] mx-auto text-center mb-4'>
          {ourExpertise.desc}
        </p>
        <div className="relative z-20 flex flex-col md:flex-row items-start justify-evenly mb-8">
          {
            ourExpertise.steps.map((expertise, index) => {
              return <div key={index} className='w-full p-4 md:w-[304px] border-b border-Neutrals-300 md:border-0'
                onMouseEnter={() => handleMouseEffect(expertise.data)}
                onMouseLeave={() => handleMouseEffect("")}
                onClick={() => handleMouseEffect(selectedData === expertise.data ? "" : expertise.data)}
              >
                <div className='text-Body-Medium-16 text-Primary-Blue-950 flex items-center justify-between md:justify-normal gap-4'>
                  <h3>{expertise.title}</h3>
                  <ChevronRight className="w-6 h-6" />
                </div>
                <div className={`pt-2 w-full transition-max-height duration-300 overflow-hidden ${selectedData === expertise.data ? "max-h-96" : "max-h-0"}`}>{expertise.data}</div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OurExpertise