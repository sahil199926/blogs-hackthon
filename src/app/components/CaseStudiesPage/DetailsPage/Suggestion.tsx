import { ISuggestion } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Suggestion({ suggestion }: { suggestion: ISuggestion }) {
  return (
    <article className="relative h-full">
      <div className="mt-10 border bg-Primary-Mordor-Blue-Bg-100 md:mb-4 md:mt-1 md:h-full md:max-w-full">
        <div className="flex flex-col">
          <div className="mb-2 overflow-hidden md:max-h-[100px] md:max-w-[320px]">
            <Image
              className="h-25 w-full"
              src={suggestion.image.link}
              alt={suggestion.image.altText}
              title={suggestion.image.title}
              width={320}
              height={100}
            />
          </div>
          <div className="p-[14px]">
            <h2 className="text-Body-Semibold-14 text-Neutrals-950">
              {suggestion.title}
            </h2>
            <p className="text-Body-Regular-12 text-Neutrals-900">
              {suggestion.desc}
            </p>
            <Link
              href={suggestion.CTA.link}
              className="mt-[14px] inline-block cursor-pointer bg-Primary-Blue-950 px-[16px] py-[11px] text-white">
              <span className="text-Link-medium-16">
                {suggestion.CTA.title}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Suggestion;
