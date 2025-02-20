import { ArrowUpRight, TrendingUp} from "lucide-react";
import { ITrending } from "@/types";
import Link from "next/link";

export default function Trending({trending}:{trending: ITrending}) {
  
  return (
    <div className="flex justify-center">
      <section className="flex flex-col md:flex-row max-w-[1440px] items-left md:items-center w-full gap-6 md:gap-8 py-5 px-4 sm:px-10 lg:px-[88px]">
        <div className="flex gap-2 items-center">
          <TrendingUp className="text-Primary-Blue-950"/>
          <h2 className="text-Display-FullCaps-16 md:text-Display-FullCaps-18 uppercase text-Neutrals-950">{trending.heading}</h2> 
        </div>
        <div className="overflow-x-scroll scrollbar-hide">
          <div className="flex gap-8 min-w-[1000px]">
          {trending.links.map((item, index) => (
            <div
              key={index}
              className="flex items-start border-l-2 border-Neutrals-50 pl-4 py-[5px]">
              <div className="flex flex-col gap-1 max-w-[261px]">
                <h2 className="flex gap-1">
                  <Link href={item.link} className="text-Primary-Blue-950 text-Link-medium-16">{item.title}</Link>
                  <ArrowUpRight className="text-Primary-Blue-950" width={24}/>
                </h2>
                <p className="text-Body-Regular-12 text-Neutrals-900">{item.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}
