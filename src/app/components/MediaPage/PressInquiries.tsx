import { IPressEnquiry } from "@/types";
import Link from "next/link";
import DotBg from "../common/DotBg";

function PressInquiries({ pressEnquiry }: { pressEnquiry: IPressEnquiry }) {

  return <>
    <section className="bg-Primary-Mordor-Blue-Bg-100 relative">
      <div className="z-10 absolute top-0 -right-[25rem] md:-right-[15rem] lg:right-0">
        <DotBg
          cropWidthStart={107}
          cropWidthEnd={840}
          cropHeightStart={332}
          cropHeightEnd={489}
        />
      </div>
      <div className="w-full max-w-8xl mx-auto px-4 py-10 md:px-[88px] relative z-20">
        <h2 className="mb-6 md:mb-4 text-Display-Semibold-24 md:text-Display-Semibold-32">
          {pressEnquiry.heading}
        </h2>
        <div>
          <Link href={`mailto: ${pressEnquiry.cta.link}`} className="py-[11px]">
            <button className="py-[11px] px-4 border-0 text-Link-medium-16 text-Neutrals-white bg-Primary-Mordor-Blue-Bg-950">
              {pressEnquiry.cta.title}
            </button>
          </Link>
        </div>
      </div>
    </section>
  </>
}

export default PressInquiries;