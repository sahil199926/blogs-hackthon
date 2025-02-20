"use client"
import { useState } from "react";
import { IClients } from "@/types"
import { ChevronUp } from "lucide-react";
import Image from "next/image"

function Clients({clients ,  filteredValue }:{clients : IClients[] , filteredValue : { label: string; value: string }[] }){
    const [viewMore, setViewMore] = useState(false);
    
    const handleViewMore = () => {
    setViewMore(!viewMore);
    };
    return(
    <div className="flex flex-col gap-10">
    {
        filteredValue.length ?
        filteredValue.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
                <h3 className="text-Display-Semibold-16 text-Neutrals-950">{item.label}</h3>
                <ul className="grid grid-cols-2 gap-5 md:gap-6 md:grid-cols-4 lg:grid-cols-6">
                    {clients.map((client,index)=>(client.industry === item.value &&
                    <li key={index} className="flex border-[1px] border-Neutrals-200  max-h-[65px] p-8 max-w-[195px] justify-center items-center">
                        <Image 
                        src={client.imgUrl}
                        alt={client.title}
                        title={client.title}
                        width={195}
                        height={65}
                        className="  h-[65px] w-[195px] object-contain "
                        />
                    </li>
                    ))}
                </ul>
            </div>
        )) 
        :
        (<div className="flex flex-col gap-4">
            <ul className="grid grid-cols-2 gap-5 md:gap-6 md:grid-cols-4 lg:grid-cols-6">
                {!viewMore && clients.length > 18 ? 
                    clients.slice(0,18).map((client,index)=>(
                    <li key={index} className="flex border-[1px] border-Neutrals-200  max-h-[65px] p-8 max-w-[195px] justify-center items-center">
                        <Image 
                        src={client.imgUrl}
                        alt={client.title}
                        title={client.title}
                        width={195}
                        height={65}
                        className="  h-[65px] w-[195px] object-contain "
                        />
                    </li>
                    ))
                 :  
                    clients.map((client,index)=>(
                    <li key={index} className="flex border-[1px] border-Neutrals-200  max-h-[65px] p-8 max-w-[195px] justify-center items-center">
                        <Image 
                        src={client.imgUrl}
                        alt={client.title}
                        title={client.title}
                        width={195}
                        height={65}
                        className="  h-[65px] w-[195px] object-contain "
                        />
                    </li>
                    ))
                }
            </ul>
            {clients.length > 18 && <div className="text-center">
                <button
                    onClick={handleViewMore}
                    className="text-Body-Medium-16 text-Primary-Blue-950 transition-colors duration-300"
                >
                    <span className="flex items-center text-Body-Medium-16">
                    {viewMore ? (
                        <div className=""> Show Less Clients </div>
                    ) : (
                        <div className=""> Load More Clients </div>
                    )}
                    <ChevronUp size={24} className={`transform ${!viewMore ? "rotate-180" : ""} ml-2`} />
                    </span>
                </button>
            </div>}
        </div>

        )
    }
    </div>
    )
}

export default Clients