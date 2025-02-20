import React from 'react';
import { IBlogListingDetails } from "@/types";
import BlogCardSmall from './BlogCardSmall';

const BlogListingSection = ({
  blogListingDetails
}:{
  blogListingDetails : IBlogListingDetails;
}) => {
  return (
    <div className="bg-primary-gradient relative ">
        <div className="mx-auto max-w-8xl px-3 py-10 md:px-[68px]">
        <div >
        <h2 className="mb-4  md:mb-[32px] text-2xl font-semibold  lg:text-[32px] lg:leading-[46px] md:text-center ">
          {blogListingDetails.heading}
        </h2>
      </div>
       <div className='flex justify-between items-center flex-wrap gap-6'>
        {
          blogListingDetails.blogList.map((blog)=>{
            return <BlogCardSmall key={blog.title} blog={blog} />
          })
        }
       </div>
        </div>
    </div>
  )
}

export default BlogListingSection;