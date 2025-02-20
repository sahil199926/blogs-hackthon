import React, { ReactNode } from "react";
import { IWhyUs } from "@/types";
import { Award, BookCheck, ThumbsUp } from "lucide-react";

function WhyUs({whyUs}: {whyUs: IWhyUs}){

   const iconConfig: {[key: string]: ReactNode}  = {
    "awardIcon": <Award height={64} width={64} className="text-[#E03C00]" />,
    "bookCheckIcon": <BookCheck height={64} width={64} className="text-[#E03C00]" />,
    "thumbsUpIcon" : <ThumbsUp height={64} width={64} className="text-[#E03C00]" />
   }

  return (
    <div>
    <section className="bg-Neutrals-white">
      <div className="w-full max-w-8xl mx-auto px-4 py-10 md:px-[88px] md:py-14">
        <div className="text-center lg:text-left grid grid-cols-6 gap-4 lg:gap-x-20">
          <div className="max-w-[303px] lg:w-full mx-auto col-span-6 lg:col-span-2">
            <p className="text-Display-FullCaps-16 lg:text-Display-FullCaps-18 text-Neutrals-900 lg:text-Neutrals-950">{whyUs.kicker}</p>
            <h1 className="mt-3 lg:mt-6 text-Display-Semibold-24 lg:text-Display-Semibold-32 text-Neutrals-950">{whyUs.heading}</h1>
          </div>
          <div className="col-span-6 lg:col-span-4">
            <ul className="flex flex-wrap justify-center lg:justify-between gap-3 lg:gap-y-16">
            {
              whyUs.list.map((item, index)=>(
                <li key={index} className="p-3 lg:p-0 w-full lg:w-[48%] lg:max-w-[386px]">
                  <div className="flex justify-center lg:justify-start">
                    {iconConfig[item.icon]}
                  </div>
                  <h3 className="mt-4 text-Display-Semibold-24">{item.title}</h3>
                  <div className="mt-4 lg:mt-2 text-Body-Regular-16 text-Neutrals-900">{item.desc}</div>
                </li>
              ))
            }
            </ul>
          </div>

        </div>
      </div>
    </section>
  </div>
  )
}

export default WhyUs