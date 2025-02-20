import React from 'react';
import {IIndustryBlogDetails } from "@/types";
import BlogCardSmall from './BlogCardSmall';
import Link from 'next/link';

const IndustryBlogs = ({
  data
}:{
  data : IIndustryBlogDetails;
}) => {
  return (
    <div className=" relative ">
        <div className="mx-auto max-w-8xl px-3 py-5 md:py-10  md:px-[68px]">
        <div  className='flex  flex-col md:flex-row justify-between md:items-center'>
        <h2 className="mb-4  md:mb-[32px] text-2xl font-semibold  lg:text-[32px] lg:leading-[46px] text-left ">
          {data.heading}
        </h2>

        <Link
         className='hidden text-Primary-Blue-950 border-[rgba(0,111,171,1)] px-[16px] py-[11px] border-2 md:inline-block'
         href={'#'}
        >
          <span className='text-Link-medium-16'>
            View All Blogs
          </span>
        </Link>
      </div>
       <div className='flex justify-between items-center flex-wrap gap-6'>
        {
          data.blogList.map((blog)=>{
            return <BlogCardSmall key={blog.title} blog={blog} />
          })
        }
       </div>

       <div className='flex md:hidden justify-center items-center'>
        <Link
          className='mt-6 text-Primary-Blue-950 border-[rgba(0,111,171,1)] px-[16px] py-[11px] border-2'
          href={'#'}
          >
            <span className='text-Link-medium-16'>
              View All Blogs
            </span>
          </Link>
       </div>

        </div>
    </div>
  )
}

export default IndustryBlogs;