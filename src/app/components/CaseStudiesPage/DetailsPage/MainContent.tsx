"use client";
import React from "react";
import RelatedBlogs from "./RelatedBlogs";
import RelatedReports from "./RelatedReports";
import { IRelatedBlogs, IRelatedReports, ISuggestion } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ulComponents/ui/carousel";
import Suggestion from "./Suggestion";

function MainContent({
  content,
  relatedBlogs,
  relatedReports,
  suggestion,
}: {
  content: string;
  relatedBlogs: IRelatedBlogs;
  relatedReports: IRelatedReports;
  suggestion: ISuggestion;
}) {
  return (
    <div className="relative z-20 flex h-full justify-center overflow-hidden">
      <section className="mx-auto w-full max-w-8xl">
        <div className="px-4 pb-[10px] pt-6 text-Neutrals-950 md:px-[88px] md:py-[48px]">
          <div className="justify-between md:flex">
            <div
              className="w-full max-w-[765px]"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className="w-full py-5 md:w-[300px] md:py-0">
              <div>
                <h3 className="mb-5 text-Display-Semibold-24 md:mb-4 md:text-Display-Semibold-16">
                  {relatedBlogs.heading}
                </h3>
                <div className="hidden flex-col md:flex">
                  {relatedBlogs.blogList.map((blog, index) => (
                    <RelatedBlogs key={index} relatedBlog={blog} />
                  ))}
                </div>
                <Carousel
                  nextButton={() => null}
                  prevButton={() => null}
                  className="md:hidden">
                  <CarouselContent className="flex gap-2 md:flex-col">
                    {relatedBlogs.blogList.map((blog, index) => (
                      <CarouselItem key={index} className="shrink-0">
                        <RelatedBlogs relatedBlog={blog} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              <div>
                <h3 className="mb-5 text-Display-Semibold-24 md:mb-4 md:text-Display-Semibold-16">
                  {relatedBlogs.heading}
                </h3>
                <div className="hidden flex-col md:flex">
                  {relatedReports.reportList.map((blog, index) => (
                    <RelatedReports key={index} relatedReport={blog} />
                  ))}
                </div>

                <Carousel
                  nextButton={() => null}
                  prevButton={() => null}
                  className="md:hidden">
                  <CarouselContent>
                    {relatedReports.reportList.map((blog, index) => (
                      <CarouselItem key={index} className="shrink-0">
                        <RelatedReports relatedReport={blog} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              <div>
                <Suggestion suggestion={suggestion} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
