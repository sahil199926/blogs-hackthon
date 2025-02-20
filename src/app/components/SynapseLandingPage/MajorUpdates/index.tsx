import React from "react";
import infoIcon from "@/assets/Info-red.png";
import Image from "next/image";

import MobileUpdates from "./MobileUpdates";
import { IMajorUpdates } from "@/types";
import Link from "next/link";

function MajorUpdates({ majorUpdates }: { majorUpdates: IMajorUpdates }) {
  return (
    <div className="mx-auto max-w-8xl">
      <div className="flex flex-col gap-6 p-5 xl:mx-auto xl:w-[90%] xl:flex-row xl:items-center xl:justify-center xl:gap-2">
        <Link
          href={majorUpdates.link}
          className="flex items-center gap-2 xl-1000:w-1/5 xl-1000:justify-center"
        >
          <Image src={infoIcon} alt="info" />
          <strong className="text-[16px] font-medium leading-6 lg:text-lg lg:leading-[27px]">
            {majorUpdates.heading}
          </strong>
        </Link>
        <div className="pb-2 md:hidden xl:w-3/4 xl:justify-between">
          <MobileUpdates list={majorUpdates.list} />
        </div>
        <div className="hidden items-center justify-start overflow-x-auto pb-2 md:flex xl:w-3/4 xl:justify-between">
          {majorUpdates.list?.map((item: string, index: number) => (
            <p
              key={index}
              className="mr-[50px] min-w-[255px] border-l-2 border-Neutrals-50 pl-3 text-xs font-normal leading-[18px] xl-1000:flex-1 lg:text-sm lg:font-medium"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MajorUpdates;
