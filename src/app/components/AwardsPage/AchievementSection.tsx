"use client"
import { useState } from "react";
import { IAchievementSection } from "@/types";
import { ChevronUp, Calendar  } from "lucide-react";
import AwardsIcon from '@/assets/AwardsIcon.svg'
import Image from "next/image";
import DotBg from "../common/DotBg";

function AchievementSection({achievementSection } : {achievementSection : IAchievementSection}) {
    const [viewMore, setViewMore] = useState(false);

    const handleViewMore = () => {
    setViewMore(!viewMore);
    };
      
  return (
    <section className="relative overflow-hidden">
        <div className="relative max-w-8xl mx-auto flex flex-col gap-6 md:gap-12 w-full md:w-[90%] px-4 py-10 z-20 lg:py-16">
            <div className="flex flex-col gap-4">
                <h2 className="text-left text-Neutrals-950 text-Display-Semibold-24 md:text-Display-Semibold-32">{achievementSection.heading}</h2>
                <p className="text-Body-Regular-16 text-left text-neutral-700">{achievementSection.desc}</p>
            </div>
            <ul className="w-full space-y-3 md:space-y-4">
            {viewMore
                ? achievementSection?.achievements?.map((achievement, index) => (
                    <li key={index}>
                        <div className="w-full flex flex-col lg:flex-row items-center  min-h-[300px] bg-Primary-Mordor-Blue-Bg-100">
                            <Image 
                                width={410}
                                height={300}
                                src={achievement.image.link}
                                title={achievement.image.title} className="w-full h-[300px] md:max-w-[410px] md:w-[1/3] md:h-full object-contain"
                                alt={achievement.image.altText}
                            />
                            <div className="flex flex-col w-full p-4 gap-4 lg:p-12">
                                <div className="flex flex-row w-full gap-2 items-center">
                                    <Calendar size={24} className="w-[18px] h-[18px] md:w-6 md:h-6 text-Accent-Orange-950" />
                                    <p className="text-Body-Regular-12 md:text-Body-Medium-14 text-Neutrals-950">
                                        {achievement.featuredDate}
                                    </p>
                                    <div className="h-[12px] w-[1px] md:w-[2px] md:h-[14px] bg-Neutrals-950"></div>
                                    <Image
                                        src={AwardsIcon}
                                        height={24}
                                        width={24}
                                        alt="Awards Icon"
                                        className="w-[18px] h-[18px] md:w-6 md:h-6 text-Accent-Orange-950"
                                    />
                                    <p className="text-Body-Regular-12 md:text-Body-Medium-14 text-Neutrals-800">
                                        {achievement.awardName}
                                    </p>
                                </div>
                                <h3 className="text-Display-Semibold-14 md:text-Display-Semibold-24 text-Neutrals-950">{achievement.title}</h3>
                                <p className="text-Body-Regular-12 text-Neutrals-700 md:text-Body-Regular-16">{achievement.description}</p>
                            </div>

                        </div>
                    </li>
                ))
                : achievementSection?.achievements?.slice(0, 3).map((achievement, index) => (
                    <li key={index}>
                        <div className="w-full flex flex-col lg:flex-row items-center  min-h-[300px] bg-Primary-Mordor-Blue-Bg-100">
                            <Image 
                                width={410}
                                height={300}
                                src={achievement.image.link}
                                title={achievement.image.title}
                                className="w-full h-[300px] md:max-w-[410px] md:w-[1/3] md:h-full object-contain"
                                alt={achievement.image.altText}
                            />
                            <div className="flex flex-col w-full p-4 gap-4 lg:p-12">
                                <div className="flex flex-row w-full gap-2 items-center">
                                    <Calendar size={24} className="w-[18px] h-[18px] md:w-6 md:h-6 text-Accent-Orange-950" />
                                    <p className="text-Body-Regular-12 md:text-Body-Medium-14 text-Neutrals-950">
                                        {achievement.featuredDate}
                                    </p>
                                    <div className="h-[12px] w-[1px] md:w-[2px] md:h-[14px] bg-Neutrals-950"></div>
                                    <Image
                                        src={AwardsIcon}
                                        height={24}
                                        width={24}
                                        alt="Awards Icon"
                                        className="w-[18px] h-[18px] md:w-6 md:h-6 text-Accent-Orange-950"
                                    />
                                    <p className="text-Body-Regular-12 md:text-Body-Medium-14 text-Neutrals-800">
                                        {achievement.awardName}
                                    </p>
                                </div>
                                <h3 className="text-Display-Semibold-14 md:text-Display-Semibold-24 text-Neutrals-950">{achievement.title}</h3>
                                <p className="text-Body-Regular-12 text-Neutrals-700 md:text-Body-Regular-16">{achievement.description}</p>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
            <div className="text-center">
            <button
                onClick={handleViewMore}
                className="text-base text-Primary-Blue-950 transition-colors duration-300"
            >
                <span className="flex items-center text-sm md:text-base">
                {viewMore ? (
                    <div className="hover:underline"> View Less </div>
                ) : (
                    <div className="hover:underline"> View More </div>
                )}
                <ChevronUp size={24} className={`transform ${!viewMore ? "rotate-180" : ""} ml-2`} />
                </span>
            </button>
            </div>
        </div>
        <div className="z-1 absolute -right-36 md:right-0 -top-14 md:top-0">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={400}
            cropHeightStart={200}
            cropHeightEnd={400}
          />
        </div>
    </section>
  );
}

export default AchievementSection;