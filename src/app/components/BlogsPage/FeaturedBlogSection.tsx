"use client"
import { IFeaturedBlogDetails } from "@/types";
import BlogCard from "./BlogCard";
import DotBg from "../common/DotBg";
import { Carousel, CarouselContent, CarouselItem } from "@/ulComponents/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

function FeaturedBlogSection({featuredBlogDetails}:{featuredBlogDetails: IFeaturedBlogDetails}) {

    return (
    <section className="relative">
      <div className="mx-auto max-w-8xl px-4 py-10 md:px-[68px] ">

      <div >
        <h2 className="mb-2 text-2xl font-semibold lg:mb-3 lg:text-[32px] lg:leading-[46px]">
          {featuredBlogDetails.heading}
        </h2>
      </div>
      
<Carousel 
       className="relative mt-4 md:mt-20"
       prevButton={(scrollPrev, canScrollPrev) => (
         <button
           onClick={scrollPrev}
           disabled={!canScrollPrev}
           className="absolute -top-20 right-14 hidden h-10 w-10 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center">
           <ChevronLeftIcon />
         </button>
       )}
       nextButton={(scrollNext, canScrollNext) => (
         <button
           onClick={scrollNext}
           disabled={!canScrollNext}
           className="absolute -top-20 right-0 hidden h-10 w-10 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center">
           <ChevronRightIcon />
         </button>
       )}>
<CarouselContent>
              {featuredBlogDetails?.featuredBlogList?.map((blog) => {
                return (
                  <CarouselItem key={blog.title} className="flex max-w-full">
                    <BlogCard blog={blog}/>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
</Carousel>
      <div className="absolute -bottom-16  md:-bottom-60 right-0 -z-10">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={400}
          cropHeightStart={0}
          cropHeightEnd={500}
        />
      </div>
      </div>

    </section>
  );
}



export default FeaturedBlogSection;