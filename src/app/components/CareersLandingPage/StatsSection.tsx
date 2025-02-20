import { IStatsSection } from "@/types";
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';

function StatsSection({ statsSection }: { statsSection: IStatsSection }) {
  return (
  <section className="flex flex-col md:flex-row gap-8 md:gap-5 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-[88px] py-10 md:py-[100px]">

    {statsSection.items.map((item) => (
      <div key={item.title} className="flex w-full flex-col items-center gap-6">
        <div className="flex px-2 py-2 items-center justify-center">
          {item.icon}
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-Display-Semibold-24 text-center text-primary">{item.title}</h2>
          <p className="text-Body-Regular-16 text-center text-Neutrals-900 max-w-[280px]">{item.description}</p>
          {item.link && (<Link href={item.link.url} className="flex gap-1 text-Primary-Blue-950 py-[2px]"><p className="text-Link-medium-16">{item.link.title}</p><ArrowUpRight/></Link>)}
        </div>
      </div>
    ))}

  </section>
  );
}

export default StatsSection;