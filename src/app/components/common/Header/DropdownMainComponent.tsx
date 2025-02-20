import { ICaseStudyTabNavbar, TNavData } from ".";
import { ChevronRight, Factory } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import OpenLink from "@/assets/OpenLink.svg";


export default function DropdownMainComponent({ title , subSection , caseStudiesNavbar}:{ title : string ;subSection : TNavData ; caseStudiesNavbar : ICaseStudyTabNavbar}){
    return(
        <div className="flex flex-row pl-14 h-full">
            <div className="w-[70%] flex flex-col pr-5">
                <div className="pt-4 flex flex-col gap-2">
                    <div className="flex flex-row justify-between">
                        <div className="w-[50%] flex flex-row items-center gap-4">
                            <Factory className="text" width={26} height={32}  color="#E03C00"/>
                            <div className="flex flex-col gap-2">
                                <p className="text-Display-Semibold-20 text-Neutrals-950">{title}</p>
                                <p className="text-Body-Regular-16 text-Neutrals-950">{subSection.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center ">
                            {subSection.cta && <>
                                <Link
                                target={subSection.cta.link ? "_blank" : ""}
                                href={subSection.cta.link || ""}
                                className="text-sm font-medium text-Accent-Orange-950 hover:underline lg:text-base"
                                >
                                {subSection.cta.label}
                                </Link>
                                <Image src={OpenLink} alt="Open link logo" />
                            </>
                            }
                        </div>
                    </div>
                    <p className="bg-Accent-Orange-50 text-Body-Regular-14 py-2 px-4 w-fit">{subSection.kicker}</p>
                    {subSection.children && (<div className="md:grid hidden md:grid-cols-2  lg:grid-cols-3 gap-4 pt-5">
                            {subSection.children.map((industry,index)=>(
                                industry.link && (<Link href={industry.link} target="_blank" className="flex flex-row gap-3 justify-between pt-2 text-Neutrals-950 hover:text-Accent-Orange-950" key={index}>
                                    <h4 className="text-Body-Medium-16 truncate ">{industry.label}</h4>
                                    <ChevronRight  className="text-Body-Medium-16 min-w-6 min-h-6 "/>
                                </Link>)

                            ))}
                    </div>)}
                </div>
            </div>
            <div className="w-[30%] px-6 py-8  gap-4 bg-Primary-Mordor-Blue-Bg-100 h-full">
                    <p className="text-Display-Semibold-20 ">{caseStudiesNavbar.title}</p>
                    <div className="flex flex-col gap-4 h-[400px]  overflow-y-scroll scrollbar-hide hide-scrollbar ">
                        {caseStudiesNavbar.children &&  caseStudiesNavbar.children.length && caseStudiesNavbar.children.map((child,ind)=>
                        (<div key={ind} className="flex  bg-Neutrals-white p-2 gap-6 items-center justify-between flex-row flex-wrap-reverse">
                            <div className="flex w-[200px] self-stretch flex-col justify-between gap-2">
                                <div className="flex flex-row flex-wrap h-fit items-center">
                                    <p className=" mr-2 text-[10px] leading-4 text-Neutrals-800">{child.industry}</p>
                                    {(child.industry && child.type) &&  <div className="w-[0.05rem] h-[6px] mr-4 bg-Neutrals-800"></div>}
                                    <p className=" mr-2 text-[10px] leading-4  text-Neutrals-800">{child.type}</p>
                                </div>
                                <p className="text-sm text-Neutrals-950 font-semibold">{child.title}</p>
                                <div className="flex items-center  gap-1">
                                    <Link
                                    target={child.cta.link ? "_blank" : ""}
                                    href={child.cta.link || ""}
                                    className="text-[12px] leading-5 font-medium text-Primary-Mordor-Blue-Bg-950 hover:underline "
                                    >
                                    {child.cta.label}
                                    </Link>
                                    <ChevronRight className="text-Body-Medium-20 w-4 h-4  text-Primary-Mordor-Blue-Bg-950" />
                                </div>
                            </div>
                            <Image
                                src={child.imgUrl}
                                alt="Case Studies Logo Alt"
                                className="self-stretch  object-contain"
                                width={100}
                                height={100}
                            />
                        </div>)
                        )}
                    </div>
                    <div className="w-full flex pt-4 justify-center ">
                        <Link
                            className="hero-section-btn min-w-max  bg-Primary-Mordor-Blue-Bg-50 border-Primary-Blue-950 border-[1.5px] rounded-[1.5px] hover:bg-Primary-Blue-950  text-Link-medium-14 md:text-Link-medium-16 font-medium text-Primary-Blue-950 hover:text-Primary-Blue-50 py-4 px-3 lg:text-[16px] lg:leading-6"
                            href={caseStudiesNavbar.cta.link}
                            target={caseStudiesNavbar.cta.label ? "_blank" : ""}
                        >
                            {caseStudiesNavbar.cta.label}
                        </Link>
                    </div>


            </div>
        </div>
    )
}