import { ICtaSection } from "@/types";
import Link from "next/link";
import DotBg from "../common/DotBg";

const CtaSection = ({ ctaSection }: { ctaSection: ICtaSection }) => {
  return (
    <section className="bg-Primary-Mordor-Blue-Bg-100">
      <div className="relative m-auto flex max-w-8xl py-4">
        <div className="ml-0 w-[70%] p-4 md:w-[60%] md:px-20 md:py-28">
          <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32">
            {ctaSection.title}
          </h2>
          <button className="mt-4 bg-Primary-Blue-950 px-4 py-[11px] text-Link-medium-16 text-Neutrals-white">
            <Link href={ctaSection.cta.link}>{ctaSection.cta.title}</Link>
          </button>
        </div>

        <div className="absolute -top-10 right-0 hidden md:block">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={600}
            cropHeightStart={0}
            cropHeightEnd={450}
          />
        </div>

        <div className="absolute -top-10 right-0 md:hidden">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={150}
            cropHeightStart={100}
            cropHeightEnd={500}
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
