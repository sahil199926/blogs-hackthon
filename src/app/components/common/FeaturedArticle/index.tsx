import { IFeaturedArticleSection } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Quote from "@/assets/Quote.svg";
import OpenLink from "@/assets/OpenLink.svg";
import DotBg from "../DotBg";

function FeaturedArticle({
  featuredArticle,
}: {
  featuredArticle: IFeaturedArticleSection;
}) {
  return (
    <section className="relative bg-Primary-Mordor-Blue-Bg-100">
      <div className="relative mx-auto max-w-8xl">
        <div className="z-20 mx-auto flex w-full flex-col flex-wrap items-start gap-8 px-4 py-10 md:w-[90%] lg:justify-between lg:py-16">
          <h2 className="mb-2 text-2xl font-semibold lg:mb-3 lg:text-[32px] lg:leading-[46px]">
            {featuredArticle.heading}
          </h2>

          <div className="bg-neutrals-50 z-20 flex w-full flex-1 flex-col items-center bg-Neutrals-white shadow-lg lg:flex-row">
            <Image
              height={439}
              width={622}
              className="h-auto w-full object-contain md:w-1/2"
              src={featuredArticle.article.image.link}
              alt={featuredArticle.article.image.altText}
              title={featuredArticle.article.image.title}
              loading="lazy"
            />

            <div className="flex flex-1 flex-col py-3">
              <div className="mx-auto flex h-full w-[90%] flex-col justify-around gap-8">
                <div className="flex flex-col gap-2">
                  <div className="h-[20px] w-[28px] md:h-[21px] md:w-[32px]">
                    <Image src={Quote} alt="quotation mark logo" />
                  </div>
                  <h3 className="text-base font-semibold md:text-[32px] md:leading-11">
                    {featuredArticle.article.title}
                  </h3>
                  <p className="text-sm font-normal md:text-base">
                    {featuredArticle.article.description}
                  </p>
                  <div className="flex flex-row gap-3 pt-2">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-full border-[1] border-black">
                      <Image
                        height={50}
                        width={50}
                        className="object-contain"
                        src={featuredArticle.article.author.image.link}
                        alt={featuredArticle.article.author.name}
                        title={featuredArticle.article.author.name}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-base font-semibold">
                        {featuredArticle.article.author.name}
                      </h4>
                      <p className="text-sm font-normal">
                        {featuredArticle.article.author.designation}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="Segregation Line"
                  className="h-[1px] w-full bg-Neutrals-200"></div>
                <div className="flex flex-row-reverse justify-between md:flex-row">
                  <p className="text-neutrals-950 rounded bg-Primary-Blue-50 px-2 py-[10px] text-sm font-medium">
                    {featuredArticle.article.readTime}
                  </p>
                  <div className="flex items-center gap-1">
                    <Link
                      target={featuredArticle.article.CTA.link ? "_blank" : ""}
                      href={featuredArticle.article.CTA.link || ""}
                      className="text-sm font-medium text-Accent-Orange-950 hover:underline lg:text-base">
                      {featuredArticle.article.CTA.title}
                    </Link>
                    <Image src={OpenLink} alt="Open link logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 right-0 z-10 md:-bottom-20">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={500}
          cropHeightStart={150}
          cropHeightEnd={500}
        />
      </div>
    </section>
  );
}

export default FeaturedArticle;
