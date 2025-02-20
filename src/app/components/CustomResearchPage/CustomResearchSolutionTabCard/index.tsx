import { ICustomResearchSolutionTabData } from "@/types";
import Image from "next/image";
import PointCard from "./PointCard";

export default function CustomResearchSolutionTabCard({
  imgSection,
  points,
  heading,
  description,
  hidden,
  index,
}: ICustomResearchSolutionTabData & {
  hidden: boolean;
  tabHeading: string;
  index: number;
}) {
  return (
    <div
      className={` ${index != 0 ? "mt-4 lg:mt-0" : "mt-0"} offerings-card mx-auto flex w-full flex-col lg:w-[90%] ${hidden ? "hidden" : "flex"} gap-4 bg-white p-4 md:gap-8 lg:p-0`}>
      {/* OPTIONAL HEADING AND DESCRIPTION SECTION */}
      {heading && (
        <p className="mb-2 text-lg font-semibold lg:mb-4 lg:text-2xl">
          {heading}
        </p>
      )}
      {description && (
        <p className="text-[12px] font-normal text-Neutrals-900 lg:text-[16px] lg:leading-6">
          {description}
        </p>
      )}

      {/* Mandatory Down section */}
      <div className="flex flex-col-reverse items-start gap-4 lg:flex-row lg:gap-8">
        {/* LEFT SECTION */}
        <div className="h-full w-full flex-1  lg:w-[38%]">
          <ul className="list-none space-y-4">
            {points?.map((point, index) => (
              <li key={index} className="bg-Primary-Mordor-Blue-Bg-50">
                <PointCard point={point} number={index + 1} />
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full flex-1 shadow-mordorCustom lg:flex-[0.85]">
          <Image
            width={622}
            height={400}
            className={`${!imgSection.onlyImage ? "w-full  max-h-[236px] object-cover": "max-h-[400px] mx-auto object-cover"} `}  
            src={imgSection.image.link}
            alt={imgSection.image.altText}
            title={imgSection.image.title}
            layout="fixed"
            loading="lazy"
          />
          {!imgSection.onlyImage && (
            <div className="flex flex-col gap-4 border-[1px] border-Neutrals-100 p-4">
              <h4 className="text-Display-Semibold-20 text-Neutrals-950">
                {imgSection.title}
              </h4>
              <p className="text-Body-Regular-14 text-Neutrals-900">
                {imgSection.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
