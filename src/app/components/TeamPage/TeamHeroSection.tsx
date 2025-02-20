import { ITeamHeroSectionDetails } from "@/types";
import Image from "next/image";

function TeamHeroSection({
  heroSectionDetails,
}: {
  heroSectionDetails: ITeamHeroSectionDetails;
}) {
  return (
    <div className="relative flex justify-center overflow-hidden bg-white md:bg-Primary-Mordor-Blue-Bg-100">
      <section className="container w-full max-w-[1440px]">
        <div className="flex flex-col-reverse items-start justify-between p-4 md:flex-row md:items-center md:px-[88px] md:py-20">
          <div className="flex-[0_1_48%]">
            <h1 className="text-left text-[26px] font-semibold leading-[38px] lg:text-Display-Semibold-40 lg:leading-[46px]">
              {heroSectionDetails.title}
            </h1>
            <div
              className="mt-4 text-left text-[14px] leading-5 text-black/70 md:mt-6 md:text-[16px] lg:leading-[24px]"
              dangerouslySetInnerHTML={{ __html: heroSectionDetails.desc }}
            />
          </div>
          <div >
            <Image
            className="mix-blend-multiply"
              src="https://s3.mordorintelligence.com/static/Awards212.webp"
              title="Team Hero Section Image"
              alt="Team Hero Section Image"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamHeroSection;
