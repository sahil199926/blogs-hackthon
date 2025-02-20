import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IContentCard } from "@/types";
// for mobile design only
function ContentCard({ data }: { data: IContentCard }) {
  return (
    <div className="flex md:hidden bg-white relative w-full py-5 pl-4 pr-6 items-center shadow-mordorCustom">
            <div className="relative z-10 flex max-w-[230px] sm:max-w-full flex-col gap-4">
              <div className="flex flex-col gap-2 mr-0 sm:mr-20">
                  {data.type !== "caseStudy" && (
                    <div className="flex gap-3 text-[10px] items-center text-Neutrals-800"><h3>{data.eyebrow.tag1}</h3><span>|</span><p>{data.eyebrow.tag2}</p></div>
                  )}

                  <p className="text-Display-Semibold-14 text-Neutrals-950">
                    {data.title}
                  </p>

              </div>
              <Link
                href={data.link}
                className="text-Accent-Orange-950 text-Link-medium-14 hover:underline flex items-center"
              >
                Read Report
                <ArrowUpRight size={24} className="text-Accent-Orange-950"/>
              </Link>
            </div>
            <Image src={data.img.src} alt={data.img.alt} title={data.img.title} width={131} height={131} className="absolute right-2 max-w-[123px]"/>
          </div>
  );
}

export default ContentCard;
