"use client"
import { IUpdateNAnnouncements } from "@/types";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DotBg from "../common/DotBg";
import { useCallback, useState } from "react";

function UpdateNAnnouncements({ updateNAnnouncements }: { updateNAnnouncements: IUpdateNAnnouncements }) {

  const [sortBy, setSortBy] = useState<string>();

  const handleViewMode = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setSortBy(e.target.value);
  }

  const sortArrayData = useCallback(()=>{
    return updateNAnnouncements.list.sort((a,b)=>{
      if(!sortBy) return 0;
      if(sortBy === "most read") return b.views - a.views;
      if(sortBy === "latest") return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
      if(sortBy === "oldest") return new Date(a.postedAt).getTime() - new Date(b.postedAt).getTime();
      return 0;
    });
  },[sortBy, updateNAnnouncements.list]);

  return (
    <div className="bg-Primary-Mordor-Blue-Bg-50 relative">
      <div className="z-10 absolute top-[55rem] left-0">
        <DotBg
          cropWidthStart={676}
          cropWidthEnd={1156}
          cropHeightStart={0}
          cropHeightEnd={489}
        />
      </div>
      <section className="w-full max-w-8xl mx-auto">
        <div className="px-4 py-10 md:px-[88px] md:py-[58px]">
          <div>
            <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950">{updateNAnnouncements.heading}</h2>
            <p className="mt-3 md:mt-2 text-Body-Regular-14 md:text-Body-Regular-14 text-Neutrals-900">{updateNAnnouncements.desc}</p>
          </div>
          <div className="mt-3 md:mt-6 pb-3 md:pb-4 border-b border-Neutrals-100 md:border-Neutrals-300 focus:layout">
            <div className="w-min relative ml-auto md:m-0">
              <select className="w-32 appearance-none py-1 px-[14px] text-Link-medium-14 outline-none border border-Neutrals-300 text-Neutrals-950 bg-Neutrals-white "
                defaultValue=""
                onChange={handleViewMode}
              >
                <option hidden value="">Sort by</option>
                <option className="py-1 px-2" value="latest">Latest</option>
                <option className="py-1 px-2" value="most read">Most Read</option>
                <option className="py-1 px-2" value="oldest">Oldest</option>
              </select>
              <ChevronDown className="h-4 w-4 absolute top-2 right-[14px]" />
            </div>
          </div>

          {/* Cards comes here */}
          <div className="mt-4 md:mt-8 grid grid-cols-6 gap-4 md:gap-y-8 content-between items-center relative z-20">
            {
              sortArrayData().map((item, index) => {
                return <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2 border border-Neutrals-100" >
                  <div className="flex justify-center items-center h-[200px] bg-Primary-Mordor-Blue-Bg-100">
                    <Image src={item.image} alt={item.title} width={290} height={142} className="object-center mix-blend-multiply" />
                  </div>
                  <div className="py-4 px-3 md:p-4 bg-Neutrals-white">
                    <p className="text-Body-Regular-12 md:text-Body-Regular-14 text-Neutrals-800">{new Date(item.postedAt).toDateString()} | {item.postType}</p>
                    <h3 className="mt-4 md:mt-3 text-Display-Semibold-24 md:text-Display-Semibold-20">{item.title}</h3>
                    <p className="mt-2 md:mt-4 text-Neutrals-900 ">{item.desc}</p>
                    <div className="mt-6 md:mt-8">
                      <Link href={item.cta.link} className="flex items-center text-Link-medium-16 gap-1 py-2 text-Accent-Orange-950 cursor-pointer">
                        {item.cta.text}
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
          <div className="mt-4 md:mt-14 flex justify-center ">
            <button className="py-2 flex justify-center items-center gap-[10px] bg-transparent text-Link-medium-16 text-Primary-Blue-950">
              View More
              <ChevronDown />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpdateNAnnouncements;
