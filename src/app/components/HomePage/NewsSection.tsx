import { INewsSection } from "@/types";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function NewsSection({ newsSection }: { newsSection: INewsSection }) {
  return (
    <div className="flex justify-center bg-Primary-Mordor-Blue-Bg-100">
      <section className="flex flex-col gap-6 px-4 py-14 sm:px-10 lg:px-[88px]">
        <div className="flex items-center justify-between">
          <h2 className="text-Display-Semibold-24 text-Neutrals-950 md:text-Display-Semibold-32">
            {newsSection.heading}
          </h2>
          <Link href={newsSection.newsPageLink} className="flex gap-1">
            <p className="text-Link-medium-16 text-Primary-Blue-950">
              View All News
            </p>
            <ArrowUpRight color="#006FAB" />
          </Link>
        </div>
        <div className="relative flex flex-col gap-[18px] md:flex-row md:gap-6 xl:gap-12">
          {/*News Div*/}
          {newsSection.newsList.map((news, index) => (
            <Link
              href={news.link}
              key={index}
              className="flex min-h-[300px] max-w-[390px] flex-1 flex-col gap-8 bg-white px-6 py-9 shadow-mordorCustom">
              <div className="flex flex-col gap-6">
                <p className="text-Regular-14 text-Neutrals-800 md:text-Body-Regular-16">
                  {news.date}
                </p>
                <h2 className="text-Link-medium-16 text-Neutrals-950 underline md:text-Link-medium-18">
                  {news.headline}
                </h2>
              </div>
              <Image
                title={news.logo.title}
                src={news.logo.src}
                alt={news.logo.alt}
                width={59}
                height={95}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default NewsSection;
