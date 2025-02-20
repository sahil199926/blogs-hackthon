"use client";
import {useState} from 'react';
import {IIndustryBlogDetails } from "@/types";
import BlogCardSmall from './BlogCardSmall';
import { Search} from 'lucide-react';
import Image from 'next/image';
import ChevronDownBlack from "@/assets/ChevronDown_black.svg";


const IndustryBlogListingSection = ({
  data
}:{
  data : IIndustryBlogDetails;
}) => {
  const [sortBy, setSortBy] = useState<string>();

  const handleViewMode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className=" relative ">
        <div className="mx-auto max-w-8xl px-3 py-10  md:px-[68px]">
        <div  className='flex  flex-col md:flex-row justify-between md:items-center'>
        <h2 className="mb-4  md:mb-[32px] text-2xl font-semibold  lg:text-[32px] lg:leading-[46px] text-left ">
          {data.heading}
        </h2>
      </div>
      {/* start here */}
      <div className='flex justify-between items-center flex-wrap gap-6 mb-8'>
      <div className="relative flex items-center justify-between w-full md:w-auto">
      <input
                className="border-1 h-[46px] w-full md:w-[450px] border px-4 py-[10px] outline-none"
                type="text"
                name=""
                id=""
                placeholder="Search Blogs"
              />
              <Search className="absolute right-4 text-Neutrals-950" />
      </div>
      <div className='flex justify-between items-center gap-6'>
      <div className="relative ml-auto w-min md:m-0">
                <select
                  className="relative w-44 appearance-none bg-Neutrals-50 px-4 py-[11px] text-Body-Medium-16 text-Neutrals-950 outline-none"
                  defaultValue=""
                  onChange={handleViewMode}>
                  <option hidden value={sortBy}>
                    Published Year
                  </option>
                  <option className="px-2 py-1" value="2025">
                    2025
                  </option>
                  <option className="px-2 py-1" value="2024">
                    2024
                  </option>
                  <option className="px-2 py-1" value="2023">
                   2023
                  </option>
                  <option className="px-2 py-1" value="2022">
                   2022
                  </option>
                  <option className="px-2 py-1" value="2021">
                   2021
                  </option>
                  <option className="px-2 py-1" value="2020">
                   2020
                  </option>
                </select>

                <Image
                  className="absolute right-[14px] top-3"
                  src={ChevronDownBlack}
                  alt="down"
                  height={24}
                  width={24}
                />
              </div>
              <div className="relative ml-auto w-min md:m-0">
                <select
                  className="relative w-40 appearance-none bg-Neutrals-50 px-4 py-[11px] text-Body-Medium-16 text-Neutrals-950 outline-none"
                  defaultValue=""
                  onChange={handleViewMode}>
                  <option className="px-2 py-1" value="most recent">
                    Most Recent
                  </option>
                  <option className="px-2 py-1" value="most read">
                    Most Read
                  </option>
                  <option className="px-2 py-1" value="default">
                   Default
                  </option>
                </select>

                <Image
                  className="absolute right-[14px] top-3"
                  src={ChevronDownBlack}
                  alt="down"
                  height={24}
                  width={24}
                />
              </div>
      </div>
      </div>
      {/* end here */}
       <div className='flex justify-between items-center flex-wrap gap-6'>
        {
          data.blogList.map((blog)=>{
            return <BlogCardSmall key={blog.title} blog={blog} />
          })
        }
       </div>
        </div>
    </div>
  )
}

export default IndustryBlogListingSection;