import { IAboutUsSection } from "@/types"
import Link from "next/link"
import DotBg from "../common/DotBg"

export default function AboutUsSection({ aboutUsSection } : {aboutUsSection :IAboutUsSection}){

    return (
        <div className="relative">
            <div className="relative z-20 flex flex-col justify-center items-center  mx-auto  max-w-8xl  min-h-56 py-4 " >
                <div className="flex flex-col h-full justify-center gap-6 items-center">
                    <h2 className="text-2xl text-center font-semibold text-Neutrals-950 md:text-Display-Semibold-32 ">{aboutUsSection.heading}</h2>
                    <Link
                        target={aboutUsSection.cta.link ? "_blank" : ""}
                        href={aboutUsSection.cta.link || ""}
                        className="hero-section-btn min-w-max bg-Primary-Blue-950 text-sm font-medium text-Primary-Blue-50 hover:bg-Primary-Blue-800 py-4 lg:text-[16px] lg:leading-6"
                        >
                        {aboutUsSection.cta.title}
                    </Link>
                </div>
            </div> 
            <div className="z-1 hidden md:block absolute right-0  -bottom-[100px] lg:bottom-0">
                <DotBg
                    cropWidthStart={0}
                    cropWidthEnd={500}
                    cropHeightStart={0}
                    cropHeightEnd={200}
                />
            </div> 
            <div className="z-1 absolute hidden md:block  left-0 top-0">
                <DotBg
                    cropWidthStart={0}
                    cropWidthEnd={500}
                    cropHeightStart={150}
                    cropHeightEnd={300}
                />
            </div> 
        </div>
    )

}

