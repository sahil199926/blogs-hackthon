import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ICaseStudiesCard } from "@/types";

function CaseStudyCard({ data }: { data: ICaseStudiesCard }) {
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <p className="text-Display-Semibold-14 text-Neutrals-950 md:text-Display-Semibold-20">
          {data.heading}
        </p>
        <Link
          href={data.link}
          className="flex items-center gap-1 py-0 text-Link-medium-14 text-Accent-Orange-950 hover:underline md:py-2 md:text-Link-medium-16">
           {data.ctaText}
          <ArrowUpRight size={24} className="text-Accent-Orange-950" />
        </Link>
      </div>
      <Image src={data.logo.src} alt={data.logo.alt} title={data.logo.title}
        className="flex w-[100px] sm:w-[100px] md:w-[140px] object-contain"
        width={320}
        height={320}
      />
    </>
  );
}

export default CaseStudyCard;
