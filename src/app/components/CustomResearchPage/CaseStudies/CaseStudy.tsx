import Link from "next/link";
import OpenLink from "@/assets/OpenLink.svg";
import Image from "next/image";
import { ICaseStudy } from "@/types";

const CaseStudy = ({ caseStudy }: { caseStudy: ICaseStudy }) => {
  return (
    <div className="relative z-10 flex h-full w-full min-w-[320px] flex-col items-start gap-4 border border-Neutrals-100 bg-white p-5 shadow-mordorCustom md:min-w-[400px] md:p-8">
      <Image
        src={caseStudy.image.link}
        title={caseStudy.image.title}
        height={80}
        width={368}
        className="h-20 object-contain"
        alt={caseStudy.image.altText}
      />
      <div className="flex flex-col gap-4">
        <div
          id="Segregation Line"
          className="h-[1px] w-full bg-Neutrals-200"></div>
        <div className="flex h-fit flex-row flex-wrap items-center">
          <p className="mr-4 text-Body-Regular-14 text-Neutrals-800 md:text-Body-Medium-14">
            {caseStudy.industry}
          </p>
          <div className="mr-4 h-[10px] w-[0.05rem] bg-Neutrals-800"></div>
          <p className="text-Body-Regular-14 text-Neutrals-800 md:text-Body-Medium-14">
            {caseStudy.publishedOn}
          </p>
        </div>
        <h3 className="text-Display-Semibold-16 md:text-Display-Semibold-20">
          {caseStudy.title}
        </h3>
      </div>
      <div className="mt-auto flex w-full flex-col gap-4">
        <div
          id="Segregation Line"
          className="h-[1px] w-full bg-Neutrals-200"></div>
        <div className="flex flex-row justify-between gap-4">
          <p className="text-neutrals-950 rounded bg-Primary-Blue-50 px-2 py-[10px] text-Body-Medium-14">
            {caseStudy.readTime}
          </p>
          <div className="flex flex-row flex-nowrap items-center justify-between gap-1">
            <Link
              target={caseStudy.CTA.link ? "_blank" : ""}
              href={caseStudy.CTA.link || ""}
              className="flex w-full flex-row flex-nowrap items-center justify-start gap-1 text-right text-Link-medium-14 font-medium text-Accent-Orange-950 hover:underline lg:text-Link-medium-16">
              {caseStudy.CTA.title}
              <Image src={OpenLink} alt="Open link logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseStudy;
