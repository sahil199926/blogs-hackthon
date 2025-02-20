
import { IMoreResourceDetails } from "@/types";
import Link from "next/link";
import Image from "next/image";
import {ChevronRightIcon} from "lucide-react";
import DotBg from "../DotBg";

function MoreResourcesSection({
  moreResourceDetails,
  dotBg
}: {
  moreResourceDetails: IMoreResourceDetails,
  dotBg?: boolean
}) {

  return (
    <>
    <section className="relative bg-white py-6">
      <div className="mx-auto max-w-8xl px-6  py-10 md:px-[68px]">

      <div >
        <h2 className="mb-2  md:mb-[32px] text-2xl font-semibold  lg:text-[32px] lg:leading-[46px] text-center ">
          {moreResourceDetails.heading}
        </h2>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        {
          moreResourceDetails.resourceList.map((resource)=>{
             return <Link
              href={resource.link}
              key={resource.title}
              className="border-b
              md:border 
              flex-[0_1_98%]
              md:flex-[0_1_32%]
              max-h-[96px]
              text-Neutrals-950
              text-Body-Medium-20
              flex justify-between items-center p-3
              ">
                <div className="flex-[0_1_32%]">
                <Image
                  src={resource.image} 
                  alt={`${resource.title} Image`} 
                  width={48} 
                  height={48} />
                </div>
                <h3 className="flex justify-between items-center flex-[0_1_65%]">
                  <span>
                  {resource.title}
                  </span>
                  <ChevronRightIcon/>
                </h3>
             </Link>
          })
        }
      </div>
      </div>
      {!dotBg ? <div className="absolute left-0 -top-20 md:-top-80 z-0">  
        <DotBg
          cropWidthStart={756}
          cropWidthEnd={1156}
          cropHeightStart={0}
          cropHeightEnd={500}
        />
      </div>:null}
    </section>
    </>
  );
}

export default MoreResourcesSection;
