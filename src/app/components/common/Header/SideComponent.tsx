"use client";
import { useState ,Fragment} from "react";
import { TNavData } from "."
import Link from "next/link";
import Image from "next/image";
import OpenLink from "@/assets/OpenLink.svg";
import Report from "@/assets/Reports.svg";
import { SubSection } from "./Navbar";
import { ChevronRight } from "lucide-react";

type ItemData = {
    label : string ;
    link : string;
}[] | undefined ;

export default function SideComponent({data , fromMobileNav  ,handleMobileNavChild }:{data : TNavData | null , fromMobileNav : boolean ,handleMobileNavChild ?: ( data : TNavData | null )=>void  }){
    const [selectedTab, setSelectedTab] = useState(0);
    const [sectionItemData , setSectionItemData] = useState<ItemData>()
    const [sectionItemTitle , setSectionItemTitle] = useState("");
    const [sectionTitle , setSectionTitle] = useState("");


    const handleItemClick = (sTitle : string ,title : string , data : ItemData ) =>{
        setSectionItemData(data);
        setSectionItemTitle(title)
        setSectionTitle(sTitle);
    }

    
    return(
        <div className="w-full">
            <div className=" px-9">

                {!sectionItemData  ? (
                    <>
                    <div className="pt-4 flex flex-col gap-2">
                        <div className="flex flex-row w-full justify-between">
                            <div className="w-full flex flex-row items-center gap-4">
                                <Image className="object-cover min-h-[56px]" src={Report} alt="Report logo Alt Text"/>

                                <div className="flex flex-col gap-2">
                                    <p className="text-Display-Semibold-20 text-Neutrals-950">{data?.label}</p>
                                    <p className="text-Body-Regular-16 text-Neutrals-950">{data?.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center min-w-fit ">
                                {data && data.cta && <>
                                    <Link
                                    target={data.cta.link ? "_blank" : ""}
                                    href={data.cta.link || ""}
                                    className="text-sm font-medium text-Accent-Orange-950 hover:underline lg:text-base"
                                    >
                                    {data.cta.label}
                                    </Link>
                                    <Image src={OpenLink} alt="Open link logo" />
                                </>
                                }
                            </div>
                        </div>
                        <p className="bg-Accent-Orange-50 text-Body-Regular-14 py-2 px-4 w-fit">{data?.kicker}</p>
                    </div>
                    <div className={`mx-auto w-[100%] items-end gap-9  flex overflow-x-scroll min-h-20 lg:overflow-x-visible lg:min-h-0  hide-scrollbar scrollbar-hide`}>
                    {data?.subSections?.map((item, index) => (
                        <p
                        onClick={() => setSelectedTab(index)}
                        className={`${index == selectedTab ? "active-tab border-[#CF3700]" : "border-b-0"}  h-full flex-shrink-0 lg:-mb-[3px] cursor-pointer text-center border-b-[3px]  px-8 py-4 text-Body-Medium-14 md:text-Body-Medium-16 `}
                        key={index}
                        >
                        {item.title}
                        </p>
                    ))}
                    </div>

                    <div className="w-full">
                    {data?.subSections?.map((data, index) => (
                        <Fragment key={index}>
                            <SectionItems
                            index={index}
                            {...(data as SubSection)}
                            hidden={index !== selectedTab}
                            setFunction = {handleItemClick}
                            />
                        </Fragment>
                    ))}
                    </div>
                    </>)
                : 
                <SectionItemComponent data={sectionItemData} sectionTitle={sectionTitle} title={sectionItemTitle} setFunction={handleItemClick}/>
                }
            </div>
            {/* Mobile Nav Section Items */}
            {fromMobileNav && typeof handleMobileNavChild !== "undefined" &&  
            <nav className={`navbar left-0 top-0 z-[100] fixed flex h-[100vh] overflow-y-auto p-[1rem] lg:overflow-visible lg:p-0 ${fromMobileNav ? "w-[100vw] opacity-100" : "w-0 opacity-0"} flex-col items-start bg-white transition-all duration-500 ease-in-out lg:static lg:z-auto lg:flex lg:h-[60px] lg:w-max lg:flex-row lg:items-center lg:opacity-100`}>
                <div className="pt-4 flex flex-col gap-2 w-full bg-Neutrals-white">
                        <div className="flex flex-row w-full justify-between">
                            <div className="w-full flex flex-row flex-wrap items-center gap-4">
                                <ChevronRight onClick={()=>{handleMobileNavChild(null)}}  className="text-Body-Medium-20 cursor-pointer min-w-6 min-h-6 rotate-180 text-Neutrals-900"/>


                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2 items-center">
                                        <Image className="object-cover min-h-[56px]" src={Report} alt="Report logo Alt Text"/>
                                        <p className="text-Display-Semibold-20 text-Neutrals-950">{data?.label}</p>

                                    </div>
                                    <p className="text-Body-Regular-16 text-Neutrals-950">{data?.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center min-w-fit ">
                                {data && data.cta && <>
                                    <Link
                                    target={data.cta.link ? "_blank" : ""}
                                    href={data.cta.link || ""}
                                    className="text-sm font-medium text-Accent-Orange-950 hover:underline lg:text-base"
                                    >
                                    {data.cta.label}
                                    </Link>
                                    <Image src={OpenLink} alt="Open link logo" className="hidden md:block"/>
                                </>
                                }
                            </div>
                        </div>
                        <p className="bg-Accent-Orange-50 text-Body-Regular-14 py-2 px-4 w-fit">{data?.kicker}</p>
                    </div>
                    <div className={`mx-auto w-[100%] items-end gap-4 flex overflow-x-scroll min-h-20 lg:overflow-x-visible lg:min-h-0  hide-scrollbar scrollbar-hide`}>
                        {data?.subSections?.map((item, index) => (
                            <p
                            onClick={() => setSelectedTab(index)}
                            className={`${index == selectedTab ? "active-tab border-[#CF3700]" : "border-b-0"} py-3 flex-shrink-0 lg:-mb-[3px] cursor-pointer text-center border-b-[3px]  px-3 text-Body-Medium-14  `}
                            key={index}
                            >
                            {item.title}
                            </p>
                        ))}
                    </div>

                    <div className="w-full">
                        {data?.subSections?.map((child, index) => (
                            <div key={index} className={` ${index != 0 ? "mt-4 lg:mt-0" : "mt-0"} w-full lg:w-[90%] offerings-card flex  flex-col mx-auto ${index!== selectedTab ? "hidden" : "flex"}  p-4  lg:gap-8 bg-white lg:p-0`}>
                                {child.sectionItems.map((item,index)=>{
                                    if(item.link){
                                        return  (<Link  href={item.link} target={item.link ? "_blank" : ""} className="flex flex-row gap-3 justify-between pt-2 " key={index}>
                                                    <h4 className="text-Body-Medium-16 truncate text-Neutrals-950 hover:text-Accent-Orange-950">{item.label}</h4>
                                                </Link>)

                                    }
                                    if(item.data && item.data.length){
                                        return (
                                            <details key={index} className="w-full group bg-Primary-Mordor-Blue-Bg-100">
                                                <summary className="w-full flex p-3 cursor-pointer list-none justify-between text-base font-medium text-Neutrals-950">
                                                    <p className="text-Body-Medium-14 md:text-Body-Medium-16">
                                                    {item.label}
                                                    </p>
                                                    <div className="flex h-6 w-6 rotate-180 items-center justify-center">
                                                    <span className="chevron"></span>
                                                    </div>
                                                </summary>
                                                <div className="flex flex-col ">
                                                    {item.data.map((child, index) => {
                                                        if(child.link ){
                                                            return (
                                                        <Link key={index} href={child.link} target="_blank" className=" p-3 text-Body-Medium-14 whitespace-pre-line text-justify sm:text-left bg-Neutrals-white">
                                                            {child.label}
                                                        </Link>
                                                        )
                                                        }
                                                        }
                                                    )}

                                                </div>
                                        
                                            </details>    
                                        )
                                        
                                    }
                                })}
                            </div>    
                        ))}
                    </div>
            </nav>}
            



        </div>
    )
}

const SectionItems = ({hidden , index , sectionItems , title ,setFunction }:SubSection & {hidden : boolean , index : number , setFunction : ( sectionTitle : string , title : string , data : ItemData )=>void})=>{
    
    return(
        <div className={` ${index != 0 ? "mt-4 lg:mt-0" : "mt-0"} w-full lg:w-[90%] offerings-card flex  flex-col mx-auto ${hidden ? "hidden" : "flex"} gap-4  p-4  md:gap-8 bg-white lg:p-0`} >   
            {sectionItems && 
                (<div className="md:grid hidden md:grid-cols-2  lg:grid-cols-3 gap-4 pt-5">
                    {sectionItems.map((item,index)=>{
                        if(item.link){
                            return  (<Link  href={item.link} target={item.link ? "_blank" : ""} className="flex flex-row gap-3 justify-between pt-2 " key={index}>
                                        <h4 className="text-Body-Medium-16 truncate text-Neutrals-950 hover:text-Accent-Orange-950">{item.label}</h4>
                                    </Link>)
                        }
                        if(item.data && item.data.length){
                            return (
                                <button  className="flex flex-row gap-3 justify-between pt-2" onClick={()=>{setFunction( title , item.label , item.data)}} key={index}>
                                    <h4 className="text-Body-Medium-16 truncate text-Neutrals-950">{item.label}</h4>
                                    <ChevronRight  className="text-Body-Medium-16 rotate-90 min-w-6 min-h-6 text-Neutrals-950"/>
                                </button>
                            )
                        }
                    })}
                </div>)}
        </div>
    )
}



const SectionItemComponent = ({data , sectionTitle , title  ,setFunction }: & {data : ItemData , sectionTitle : string  , title : string , setFunction : ( sectionTitle : string , title : string , data : ItemData )=>void})=>{
    return(
        <div className={` w-full flex  flex-col mx-auto  gap-4  p-4  md:gap-8 bg-white lg:p-0`} >   
            <div className="flex flex-row items-start justify-start gap-4 p-4">
                <ChevronRight onClick={()=>{setFunction(sectionTitle,title,undefined)}}  className="text-Body-Medium-20 cursor-pointer min-w-6 min-h-6 rotate-180 text-Neutrals-900"/>
                <div>
                    <p className="text-Body-Medium-16 text-Neutrals-800">{sectionTitle}</p>
                    <p className="text-Body-Medium-20 text-Neutrals-950">{title}</p>
                </div>
            </div>
            {data && 
                (<div className="md:grid hidden md:grid-cols-2  lg:grid-cols-3 gap-4 pt-5">
                    {data.map((item,index)=>{
                        if(item.link){
                            return  (<Link target={item.link ? "_blank" : ""} href={item.link} className="flex flex-row gap-3 justify-between pt-2 " key={index}>
                                        <h4 className="text-Body-Medium-16 truncate text-Neutrals-950 hover:text-Accent-Orange-950">{item.label}</h4>
                                    </Link>)
                        }
                    })}
                </div>)}
        </div>
    )
}