import { ITrendingindustries } from "@/types"
import { TrendingUp ,ArrowUpRight } from "lucide-react"

export default function TrendingIndustries({ trendingIndustries  } : {trendingIndustries :ITrendingindustries }){

    return (
        <div className={`w-full relative h-full bg-Neutrals-white`}>
            <div className="z-20 mx-auto w-full gap-8 flex flex-col md:flex-row items-start justify-between  md:items-center  p-4 md:px-[5.5rem]  md:py-5 h-full max-w-8xl  lg:min-h-[6rem]" >
                <div className="flex flex-row gap-2">
                    <TrendingUp  className="h-6 w-6 text-Primary-Blue-950" />
                    <h2 className="text-Neutrals-950 text-Display-FullCaps-16 md:text-Display-FullCaps-18">{trendingIndustries.heading}</h2>
                </div>
                <div className="flex flex-row gap-8 max-w-full  overflow-scroll hide-scrollbar scrollbar-hide flex-nowrap md:flex-wrap md:max-w-[74rem]">
                    {trendingIndustries.industries.map((item,index)=>(
                        <div key={index} className={`flex gap-4 min-w-max flex-row items-center max-w-[17rem]`}>
                            <div className={`h-full w-[2px] ${index === 0 ?"hidden md:block":""} bg-Neutrals-50`}></div>
                            <div className="flex flex-col ">
                                <div className="flex flex-row gap-1 items-start">
                                    <p className="text-left text-Link-medium-16 text-Primary-Blue-950">{item.label}</p>
                                    <ArrowUpRight className="min-h-5 min-w-5 max-h-5 max-w-5 text-Primary-Blue-950" />
                                </div>
                                <p className="text-Neutrals-900 text-left text-Body-Regular-12 ">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}
