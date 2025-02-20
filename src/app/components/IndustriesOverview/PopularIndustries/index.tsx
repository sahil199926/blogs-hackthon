import { IPopularIndustriesSection } from "@/types"
import Image from "next/image";
import Link from "next/link";
import Industries from "./Industries";
import DotBg from "../../common/DotBg";


function PopularIndustries({popularIndustriesData }:{popularIndustriesData : IPopularIndustriesSection}) {
    return (
    <section className="relative bg-Neutrals-white overflow-hidden">
      <div className="z-20 relative mx-auto flex flex-col gap-10 max-w-8xl p-4 py-10 lg:px-[88px] ">
        <div className="mx-auto w-full gap-3 md:gap-4">
            <h2 className="text-Neutrals-900 text-center md:text-left text-Display-FullCaps-16 md:text-Display-FullCaps-18">{popularIndustriesData.kicker}</h2>
            <h2 className="text-Neutrals-950 text-center md:text-left text-Display-Semibold-24 md:text-Display-Semibold-32">{popularIndustriesData.heading}</h2>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap  gap-9 items-center md:items-stretch">
            {popularIndustriesData.trending.map((industry,index)=>(
                <div className="max-w-[390px] gap-4 flex flex-col  " key={index}>
                    <Image
                        src={industry.image.link}
                        width={390}
                        height={240}
                        className="h-[240px] object-cover "
                        alt={industry.image.altText}
                        title={industry.image.title}
                    />
                    <div className="flex flex-col gap-[6px] items-start">
                        <h3 className="text-Neutrals-950 text-lg font-semibold md:text-xl">{industry.label}</h3>
                        <p className="text-Neutrals-800 text-Body-Regular-12 md:text-Body-Regular-16">{industry.description}</p>
                    </div>
                    <Link
                        className="hero-section-btn max-w-fit mt-auto bg-Primary-Blue-950 text-sm font-medium text-Primary-Blue-50 hover:bg-Primary-Blue-800 lg:py-[11px] lg:text-[16px] lg:leading-6"
                        href={industry.CTA.link}
                        target=""
                        >
                        {industry.CTA.title}
                    </Link>
                </div>
            ))}
        </div>
        <Industries title={popularIndustriesData.title} industries={popularIndustriesData.industries}/>

      </div>
        <div className="absolute hidden md:block md:top-[650px] lg:top-[300px] top-48 -right-32 md:right-0 z-10">
            <DotBg
            cropWidthStart={0}
            cropWidthEnd={300}
            cropHeightStart={0}
            cropHeightEnd={500}
            />
        </div>
        <div className="absolute block md:hidden top-[1050px] -right-32 md:right-0 z-10">
            <DotBg
            cropWidthStart={0}
            cropWidthEnd={300}
            cropHeightStart={0}
            cropHeightEnd={500}
            />
        </div>

    </section>
  );
}



export default PopularIndustries