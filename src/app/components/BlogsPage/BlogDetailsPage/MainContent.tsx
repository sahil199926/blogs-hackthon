"use client"
import React from 'react'
import RelatedBlogs from './RelatedBlogs'
import RelatedReports from './RelatedReports'
import { IRelatedBlogs, IRelatedReports, ISuggestion } from '@/types'
import { Carousel, CarouselContent, CarouselItem } from "@/ulComponents/ui/carousel";
import Suggestion from './Suggestion';

function MainContent({ content, relatedBlogs, relatedReports, suggestion }: { content: string, relatedBlogs: IRelatedBlogs, relatedReports: IRelatedReports, suggestion:ISuggestion }) {
  return (
    <div className="overflow-hidden relative flex justify-center  h-full z-20">
      <section className='w-full max-w-8xl mx-auto'>
        <div className="pt-6 px-4 pb-[10px] md:px-[88px] md:py-[48px] text-Neutrals-950">
          <div className='md:flex justify-between'>
            <div className='w-full max-w-[765px]' dangerouslySetInnerHTML={{ __html: content }} />

            <div className='py-5 md:py-0 w-full md:w-[300px]'>
              <div>
                <h3 className='mb-5 md:mb-4 text-Display-Semibold-24 md:text-Display-Semibold-16'>{relatedBlogs.heading}</h3>
                <div className='hidden md:flex flex-col'>
                  {
                    relatedBlogs.blogList.map((blog, index) => (
                      <RelatedBlogs key={index} relatedBlog={blog} />
                    ))
                  }
                </div>
                <Carousel  nextButton={()=>null} prevButton={()=>null} className='md:hidden'>
                  <CarouselContent className='flex md:flex-col gap-2'>
                  {
                    relatedBlogs.blogList.map((blog, index) => (
                    <CarouselItem key={index} className='shrink-0'>
                      <RelatedBlogs relatedBlog={blog} />
                    </CarouselItem>
                    ))
                  }
                  </CarouselContent>
                </Carousel>
              </div>

              <div>
                <h3 className='mb-5 md:mb-4 text-Display-Semibold-24 md:text-Display-Semibold-16'>{relatedReports.heading}</h3>
                <div className='hidden md:flex flex-col'>
                    {
                      relatedReports.reportList.map((blog, index) => (
                          <RelatedReports key={index} relatedReport={blog} />
                      ))
                    }
                </div>
                  
                <Carousel  nextButton={()=>null} prevButton={()=>null} className='md:hidden'>
                  <CarouselContent>
                    {
                      relatedReports.reportList.map((blog, index) => (
                        <CarouselItem key={index} className='shrink-0'>
                          <RelatedReports relatedReport={blog} />
                        </CarouselItem>
                      ))
                    }
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
  )
}

export default MainContent