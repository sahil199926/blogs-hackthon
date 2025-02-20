import { ITrendingReports } from "@/types";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
function TrendingReports({
  trendingReports,
}: {
  trendingReports: ITrendingReports;
}) {
  return (
    <section className="flex flex-col mx-auto md:flex-row gap-6 md:gap-8 w-full max-w-[1440px] items-center justify-center px-4 py-5 lg:px-[88px] ">
      <div className="flex items-center gap-2 py-6">
        <TrendingUp width={24} className="text-Primary-Blue-950" /> 
        <h2 className="text-Display-FullCaps-16 md:text-Display-FullCaps-18 text-Neutrals-950 text-nowrap">TRENDING REPORTS</h2>
      </div>
      <div className="flex w-full gap-4 overflow-auto scrollbar-hide">
        {trendingReports.map((report, index) => (
          <Link
            key={index}
            href={report.link}
            className="flex items-center md:items-start gap-2 md:gap-8 md:pl-4 pr-4 md:pr-5 border-r-2 md:border-l-2 border-Neutrals-50">
            <p className="min-w-[253px] hover:underline text-Body-Medium-12 md:text-Link-medium-16 text-Primary-Blue-950">{report.title}</p> 
            <ArrowUpRight size={24} className="text-Primary-Blue-950 w-full max-w-6" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TrendingReports;
