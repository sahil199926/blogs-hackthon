import { ITopics } from "@/types"
import { ChevronRight } from 'lucide-react';
import Tooltip from "../../common/Tooltip/index";
import { ArcherElement } from 'react-archer';



function Topic({topic , number ,headColor , position}:{topic:ITopics , number:number , headColor:string , position ?: "top" | "right" | "left"}) {  
    return (
        
        <div className="flex flex-col gap-3 py-3 w-full lg:min-h-[250px] h-auto  ">

                <div className="relative p-3  w-full flex flex-row gap-4" style={{backgroundColor : headColor}}>
                    <ArcherElement id={`component-${number}`} >
                        <div id={`component-${number}`} className={`absolute hidden md:block ${position === 'left' ? "-left-[6px] top-1/2 -translate-y-1/2 " : position === "right" ? "-right-[6px] top-1/2 -translate-y-1/2 " :"left-1/2 top-[-5px] -translate-x-1/2 "} rounded-full w-3 h-3 bg-black  `}></div>
                    </ArcherElement>
                    <span className="text-Display-FullCaps-18  text-Neutrals-white">{number}.</span>
                    <h3 className="text-Display-FullCaps-18 text-Neutrals-white">{`${topic.title}`}</h3>
                </div>
                <div className="hidden md:flex flex-col ">
                    {topic.list.map((item,index)=>(
                        <div key={index} className={`flex cursor-pointer list-none py-2 ${index !== 0 ? "border-t-[1px] border-Neutrals-200" : ""} `}>
                            <Tooltip content={item.desc} position={position}>
                                <div className="flex flex-row gap-4 items-center justify-center">
                                    <ChevronRight className="text-Neutrals-900 min-w-5 min-h-5" size={20} />
                                    <h4 className="text-Body-Regular-12 lg:text-Body-Regular-14 text-Neutrals-900">
                                        {item.title}
                                    </h4>
                                </div>
                            </Tooltip>
                        </div>
                    ))}
                </div>
                <ul className="block md:hidden">
                    {topic.list.map((item, index) => (
                        <li key={index} >
                        <details className="group">
                            <summary className={`flex cursor-pointer list-none gap-2 py-2 ${index !== 0 ? "border-t-[1px] border-Neutrals-200" : ""} `}>
                                <div className="flex rotate-0 items-center justify-center">
                                    <ChevronRight className="text-Neutrals-900" size={20} />
                                </div>
                                <h4 className="text-Body-Regular-14 text-Neutrals-900">
                                    {item.title}
                                </h4>
                            </summary>

                            <p className="text-Body-Regular-14 px-4  text-Neutrals-900 text-left ">
                            {item.desc}
                            </p>
                        </details>
                        </li>
                    ))}
                </ul>
                
            </div>

    )
}

export default Topic