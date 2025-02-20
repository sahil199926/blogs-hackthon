"use client"
import { useState } from "react";
import { IIndustries } from "@/types"
import { ChevronRight ,ChevronUp } from "lucide-react";
import Link from "next/link";

function Industries({title , industries}:{title : string , industries :IIndustries[]}){
   const [viewMore, setViewMore] = useState(false);

    const handleViewMore = () => {
    setViewMore(!viewMore);
    };
    return(
        <div className="w-full flex flex-col gap-6 ">
            <h3 className="text-Neutrals-950 text-Display-Semibold-24 text-center md:text-left w-full">{title}</h3>
            <div className="md:grid hidden md:grid-cols-2  lg:grid-cols-3 gap-4 pt-5">
                    {industries.map((industry,index)=>(
                        <Link href={industry.link} target="_blank" className="flex flex-row gap-3 justify-between pt-2 " key={index}>
                            <h4 className="text-Body-Medium-16 truncate text-Neutrals-950">{industry.label}</h4>
                            <ChevronRight  className="text-Body-Medium-16 w-6 h-6 text-Neutrals-950"/>
                        </Link>

                    ))}
            </div>
            <div className=" md:hidden p-4  flex flex-col gap-4 justify-between items-stretch bg-Primary-Mordor-Blue-Bg-50 md:bg-Neutrals-white">
                <div className="grid gap-4">
                    {viewMore ? 
                        industries.map((industry,index)=>(
                            <Link href={industry.link} target="_blank" className="flex  flex-row gap-3 justify-between pt-2 " key={index}>
                                <h4 className="text-Body-Medium-16 truncate w-[250px] text-Neutrals-950">{industry.label}</h4>
                                <ChevronRight  className="text-Body-Medium-16 w-6 h-6 text-Neutrals-950"/>
                            </Link>

                        )) : industries.slice(0,6).map((industry,index)=>(
                            <Link href={industry.link} target="_blank" className="flex  flex-row gap-3 justify-between pt-2 " key={index}>
                                <h4 className="text-Body-Medium-16 truncate w-[250px] text-Neutrals-950">{industry.label}</h4>
                                <ChevronRight  className="text-Body-Medium-16 w-6 h-6 text-Neutrals-950"/>
                            </Link>

                        )) 
                        }
                </div>
                <div className="text-center">
                    <button
                        onClick={handleViewMore}
                        className="text-Body-Medium-16 text-Primary-Blue-950 transition-colors duration-300"
                    >
                        <span className="flex items-center text-Body-Medium-16">
                        {viewMore ? (
                            <div className=""> View Less </div>
                        ) : (
                            <div className=""> View More </div>
                        )}
                        <ChevronUp size={24} className={`transform ${!viewMore ? "rotate-180" : ""} ml-2`} />
                        </span>
                    </button>
                </div>

            </div>
      </div>
    )
}

export default Industries