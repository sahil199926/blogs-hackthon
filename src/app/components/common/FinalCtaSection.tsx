import { IFinalCtaSection} from "@/types";
import Link from "next/link";
import DotBg from "./DotBg";

function JoinTeamSection({
  sectionData,
}: {
  sectionData: IFinalCtaSection;
}) {
  return (
    <section className="flex justify-center bg-Primary-Mordor-Blue-Bg-100">
      <div className="container relative flex w-full max-w-[1440px]  ">

        <div className="flex w-full max-w-[640px] flex-col gap-6 items-start pb-10 md:pb-[140px] pt-10 md:pt-[120px] pl-4 sm:pl-10 md:pl-[88px] z-20">
          <h2 className="text-Display-Semibold-24 text-Neutrals-950 md:text-Display-Semibold-32 max-w-[480px]">
            {sectionData.heading}
          </h2>
          {sectionData.description && <p className="text-Body-Regular-18 text-Neutrals-900 text-wrap">{sectionData.description}</p>}
          <button className=" bg-Primary-Blue-950 hover:bg-Primary-Blue-800">
            <Link href={sectionData.cta.link}>
              <p className="px-4 py-3 text-Link-medium-16 text-Neutrals-white">
                {sectionData.cta.title}
              </p>
            </Link>
          </button>
          

        </div>
        <div className="z-1 absolute right-0 bottom-0 hidden sm:block z-10">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={726}
            cropHeightStart={0}
            cropHeightEnd={489}
          />
        </div>
      </div>
    </section>
  );
}

export default JoinTeamSection;
