import { IFounderDetails } from "@/types";
import Image from "next/image";
import DotBg from "../common/DotBg";

function FounderSection({
  founderDetails,
}: {
  founderDetails: IFounderDetails;
}) {
  return (
    <section className="relative flex justify-center overflow-hidden">
      <div className="absolute left-[450px] top-0 md:left-auto md:right-0">
        <DotBg
          cropWidthStart={100}
          cropWidthEnd={550}
          cropHeightStart={10}
          cropHeightEnd={400}
        />
      </div>

      <div className="container z-10 mt-10 max-w-[1440px] px-4 md:mt-12 md:px-[88px]">
        <div>
          <div className="mb-6">
            <h2 className="md:text-Display-Semibold-32 mb-1 text-center text-Display-Semibold-24 md:text-left">
              {founderDetails.heading}
            </h2>
            <p className="text-black/70 text-center md:text-left md:text-Body-Regular-16">
              {founderDetails.desc}
            </p>
          </div>

          <div className="justify-between md:flex">
            <div className="md:w-101 md:h-95 flex-shrink-0">
              <Image
                className="h-full w-full"
                title={founderDetails.image.title}
                src={founderDetails.image.link}
                alt={founderDetails.image.altText}
                width={350}
                height={295}
              />
            </div>

            <div className="bg-Primary-Mordor-Blue-Bg-100 p-12">
              <p className="border-b border-gray-200 pb-2 text-center text-Display-Semibold-16 md:text-left md:text-Display-Semibold-24">
                {`"` + founderDetails.message + `"`}
              </p>
              <div className="flex flex-col-reverse text-center md:flex-col md:text-left">
                <cite className="text-Colors-Neutrals-950 non-italic my-2 inline-block text-Link-medium-14 md:text-Link-medium-14">
                  {founderDetails.name + "," + founderDetails.position}
                </cite>
                <p className="text-Body-Regular-16 text-gray-700">
                  {founderDetails.aboutFounder}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
