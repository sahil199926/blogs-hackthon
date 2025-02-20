import { IOurClients } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OurCustomers from "../common/UISections/OurCustomers";

const OurClientSection = ({
  title,
  heading,
  CTA,
  clients,
  mobileImages,
}: IOurClients) => {
  return (
    <div className='bg-Primary-Mordor-Green-Bg-50  overflow-hidden'>
        <div className="mx-auto max-w-8xl px-3 py-10 md:px-[88px] md:py-20">
          <section >
            <div className="flex justify-between items-center gap-8 flex-col lg:flex-row ">
              <div className='w-full lg:w-[45%] text-center lg:text-left mb-2'>
                  <h4 className="text-Display-FullCaps-16 
              md:text-[1.125rem] md:leading-[1.688rem]
              font-medium uppercase text-Neutrals-900 mb-5">{title}</h4>
                  <h2 className="text-[1.5rem] leading-[2rem] md:text-Display-Semibold-32 mb-4 text-Neutrals-950 font-semibold">{heading}</h2>
                  <div className="mt-6 ">
                  <div className="mt-6 md:mt-8">
                  <button className=" bg-Primary-Blue-950 hover:bg-Primary-Blue-800">
                  <Link href={CTA.link}>
                    <p className="px-4 py-3 text-Link-medium-16 text-Neutrals-white">
                      {CTA.title}
                    </p>
                  </Link>
                </button>
              </div>
              </div>
              </div>
              <div className='grid-cols-4 w-full lg:w-[55%] gap-8 hidden md:grid'>
                  {clients.map((client, index) => (
                      <Image
                      title="Client Logo"
                       key={index} src={client} alt="Client Logo" className="max-w-48 mx-auto object-contain" width={90} height={90} />
                  ))}
              </div>

              <OurCustomers
              ourCustomers={
                  mobileImages
              }
              className='md:hidden bg-transparent'
              headerStyle='hidden'
              />

              
            </div>
          </section>
        </div>
    </div>
  );
};

export default OurClientSection;
