"use client";
import { useState } from "react";
import { ICategoriesDetails } from "@/types";
import Link from "next/link";
import {ChevronRightIcon, ChevronUpIcon, ChevronDownIcon} from "lucide-react";

function CategoriesSection({
  categoriesDetails
}: {
  categoriesDetails: ICategoriesDetails
}) {

  const [viewMore, setViewMore] = useState(false);

  return (
    <>
    <section className="relative bg-Primary-Mordor-Blue-Bg-100 w-full">
      <div className="mx-auto max-w-8xl px-3 py-10  md:px-[68px]">

      <div>
        <h2 className="mb-2 text-2xl font-semibold lg:mb-3 lg:text-[32px] lg:leading-[46px]">
          {categoriesDetails.heading}
        </h2>
      </div>
      <div className="flex justify-start items-center flex-wrap">
        {
          categoriesDetails.categoryList.slice(0, viewMore ? categoriesDetails.categoryList.length : 8).map((category)=>{
            return         <Link
            key={category.title}
            href={'#'}
            className="min-w-[280px]  
            min-h-[80px]
            flex-[0_1_98%]
            md:flex-[0_1_25%]
            space-x-2 hover:underline py-3 pr-3"
          >
            <h3 className="flex justify-between  flex-shrink-0 items-center text-Body-Medium-16 text-Colors-Neutrals-950">
            <span>{category.title}</span>
            <span>
                <ChevronRightIcon size={18} />
            </span>
            </h3>
       </Link>
          })
        }
      </div>
      <div className="flex justify-center items-center">
         <button className="flex justify-between items-center text-Link-Medium-16 text-Primary-Blue-950 gap-2"
         onClick={()=>setViewMore(!viewMore)}>
          {!viewMore ? <><span>View More</span><ChevronDownIcon/></> 
                   : <><span>View Less</span><ChevronUpIcon/></>}
         </button>
      </div>
      </div>
    </section>
    </>
  );
}

export default CategoriesSection;
