import {  IResourceFeaturedArticleSection } from "@/types"
import Image from "next/image";
import Link from "next/link";
import OpenLink from "@/assets/OpenLink.svg";
import DotBg from "../common/DotBg";


function FeaturedArticle({featuredArticle}:{featuredArticle : IResourceFeaturedArticleSection}) {

    return (
    <section className="relative bg-Primary-Mordor-Blue-Bg-100 ">
      <div className="mx-auto max-w-8xl px-3 py-6 lg:p-10">
        <div className="flex w-full  flex-col flex-wrap gap-8  z-20 items-start lg:justify-between ">
           <h2 className="mb-2 text-2xl font-semibold lg:mb-3 lg:text-[32px] lg:leading-[46px]">
            {featuredArticle.heading}
           </h2>
          
          <div className="flex-1 flex flex-col bg-Neutrals-white shadow-lg items-center w-full z-20 bg-neutrals-50 lg:flex-row ">
            
            <Image
                height={439}
                width={622}
                className="w-full md:w-1/2 h-auto object-contain"
                src={featuredArticle.article.image.link}
                alt={featuredArticle.article.image.altText}
                title={featuredArticle.article.image.title}
                loading="lazy"
            />
           
            <div className="flex-1 flex  flex-col py-3 ">
                <div className="w-[90%] h-full flex gap-8 flex-col mx-auto justify-around">
                    <div className="flex flex-col gap-2">
                        <p className="text-Neutrals-800 text-Caption-Regular-14 mb-3">
                        <span className='mr-2'>
                          {featuredArticle.article.category}
                        </span>  |   
                        <span className='ml-3 mr-2'>
                          {featuredArticle.article.reportTitle}
                        </span>   • 
                        <span className='font-medium text-Neutrals-950 mx-2'>
                          {featuredArticle.article.date}
                        </span>
                      </p>
                        <h3 className="text-base md:text-[32px] md:leading-11 font-semibold">{featuredArticle.article.title}</h3>
                        <p className=" text-sm md:text-base font-normal">{featuredArticle.article.description}</p>
                        <div className="flex flex-row pt-2 gap-3">
                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-[1] border-black">
                                <Image
                                title={featuredArticle.article.author.name}
                                height={50}
                                width={50}
                                className="object-contain"
                                src={featuredArticle.article.author.imgUrl}
                                alt={featuredArticle.article.author.name}
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-base font-semibold">{featuredArticle.article.author.name}</h4>
                                <p className="text-sm font-normal">{featuredArticle.article.author.designation}</p>
                            </div>
                        </div>
                    </div>
                    <div
                      id="Segregation Line"
                      className="h-[1px] w-full bg-Neutrals-200"
                    ></div>
                    <div className="flex flex-row-reverse md:flex-row justify-between">
                        <p className="text-sm font-medium text-neutrals-950 bg-Primary-Blue-50 py-[10px] px-2 rounded">{featuredArticle.article.readTime}</p>
                        <div className="flex items-center  gap-1">
                            <Link
                            target={featuredArticle.article.CTA.link ? "_blank" : ""}
                            href={featuredArticle.article.CTA.link || ""}
                            className="text-sm font-medium text-Accent-Orange-950 hover:underline lg:text-base"
                            >
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
      <div className="absolute -bottom-16  md:-bottom-[8rem] right-0 z-10">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={420}
          cropHeightStart={0}
          cropHeightEnd={500}
        />
      </div>

    </section>
  );
}



export default FeaturedArticle