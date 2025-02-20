'use client';
import { ITrendingData } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import DotBg from '../common/DotBg';

const Trending = ({
  title,
  trendingBlogData : trending,
}:{
  title: string,
  trendingBlogData: ITrendingData
}) => {
  const [activeCategory, setActiveCategory] = useState<'Blogs' | 'Insights' | 'Case Studies' | 'Events'>('Blogs');
  const [showAll, setShowAll] = useState({
    Blogs: false,
    Insights: false,
    'Case Studies': false,
    Events: false,
  });

  const handleToggleShowAll = (category: 'Blogs' | 'Insights' | 'Case Studies' | 'Events') => {
    setShowAll((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const itemsToShow = showAll[activeCategory] ? trending[activeCategory] : trending[activeCategory].slice(0, 6);

  return (
    <div className='bg-white relative'>
      <div className="absolute -bottom-16  md:-bottom-[8rem] left-0 z-10">
        <DotBg
          cropWidthStart={800}
          cropWidthEnd={1156}
          cropHeightStart={0}
          cropHeightEnd={500}
        />
      </div>
      <div className="mx-auto max-w-8xl px-3 py-10 lg:p-10 relative z-30">
        
        <h2 className='text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950 text-center mb-5'>{title}</h2>
        
        <div className='flex border-b-2 border-[ #1919190D] justify-center gap-12 mb-5 hidden md:flex'>
            <h2>
                <button
                onClick={() => setActiveCategory('Blogs')}
                className={`text-Body-Medium-20 py-2 px-4 ${activeCategory === 'Blogs' ? 'border-b-2 border-[#CF3700]' : ''}`}>Blogs</button>
            </h2>
            <h2>
                <button
                 onClick={() => setActiveCategory('Insights')}
                 className={`text-Body-Medium-20 py-2 px-4 ${activeCategory === 'Insights' ? 'border-b-2 border-[#CF3700]' : ''}`}>Insights</button>
            </h2>
            <h2>
                <button
                onClick={() => setActiveCategory('Case Studies')}
                className={`text-Body-Medium-20 py-2 px-4 ${activeCategory === 'Case Studies' ? 'border-b-2 border-[#CF3700]' : ''}`}>Case Studies</button>
            </h2>
            <h2>
                <button 
                onClick={() => setActiveCategory('Events')}
                className={`text-Body-Medium-20 py-2 px-4 ${activeCategory === 'Events' ? 'border-b-2 border-[#CF3700]' : ''}`}>Events</button>
            </h2>
        </div>

        <div className="hidden md:grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {itemsToShow.length > 0 ? (
            itemsToShow.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <Image
                  src={blog.headerImage}
                  alt={blog.header}
                  className="w-full h-48 object-cover"
                  width={500} // Adjust width as needed
                  height={200} // Adjust height as needed
                />
                
                <div className="p-4">
                  <h2 className='text-[0.75rem] leading-[1.125rem] text-Accent-Orange-800 md:hidden uppercase mb-2'>
                  {
                    activeCategory
                  }
                </h2>
                  <p className="mb-4 text-Caption-Regular-14 md:text-Body-Regular-12 text-Neutrals-800">
                    {blog.title} • {blog.date}
                  </p>
                  <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-20 text-neutral-950 mb-4">
                    {blog.header}
                  </h3>
                  <div className="flex items-center mb-6 ">
                    <Image
                      src={blog.author.pic}
                      alt={blog.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                      width={40} // Adjust width as needed
                      height={40} // Adjust height as needed
                    />
                    <div>
                      <p className="text-Display-Semibold-16 text-Neutrals-950">
                        {blog.author.name}
                      </p>
                      <p className="text-Caption-Regular-14 text-Neutrals-800">
                        {blog.author.designation}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-Body-Medium-14 text-Neutrals-900 bg-Primary-Mordor-Blue-Bg-100 p-1 px-2">{blog.readTime}</p>
                    <a
                      href={blog.CTA.link || "#"}
                      className="text-Link-medium-16 text-Accent-Orange-950 hover:underline flex"
                    >
                      {blog.CTA.title}
                      <ArrowUpRight
                        size={19}
                        className="ml-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-Neutrals-800">
              No data found
            </div>
          )}

          {/* Conditionally render the "View All" button */}
          {trending[activeCategory].length > 6 && (
            <div className='col-span-full flex justify-center'>
              <button
                onClick={() => handleToggleShowAll(activeCategory)}
                className='text-Primary-Blue-950 border-2 border-Primary-Blue-950 bg-transparent py-2 px-4 mt-5 hover:bg-Primary-Blue-950 hover:text-white'
              >
                {showAll[activeCategory] ? `Show Less` : `View All ${activeCategory}`}
              </button>
            </div>
          )}
        </div>

        {/* Mobile view */}
        {
          Object.entries(trending).map(([key, value]) => (
            <div 
            key={
              key
            }
            className="grid md:hidden grid grid-cols-1 gap-1">
              {
                showAll[key as 'Blogs' | 'Insights' | 'Case Studies' | 'Events'] ? (
                  value.map((blog, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                    >
                      <Image
                        title={blog.title}
                        src={blog.headerImage}
                        alt={blog.header}
                        className="w-full h-48 object-cover"
                        width={500} // Adjust width as needed
                        height={200} // Adjust height as needed
                      />
                      
                      <div className="p-4">
                        <h2 className='text-[0.75rem] leading-[1.125rem] text-Accent-Orange-800 md:hidden uppercase mb-2'>
                        {
                          key
                        }
                      </h2>
                        <p className="mb-4 text-Caption-Regular-14 md:text-Body-Regular-12 text-Neutrals-800">
                          {blog.title} • {blog.date}
                        </p>
                        <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-20 text-neutral-950 mb-4">
                          {blog.header}
                        </h3>
                        <div className="flex items-center mb-6 ">
                          <Image
                            src={blog.author.pic}
                            alt={blog.author.name}
                            className="w-10 h-10 rounded-full mr-3"
                            width={40} // Adjust width as needed
                            height={40} // Adjust height as needed
                          />
                          <div>
                            <p className="text-Display-Semibold-16 text-Neutrals-950">
                              {blog.author.name}
                            </p>
                            <p className="text-Caption-Regular-14 text-Neutrals-800">
                              {blog.author.designation}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-Body-Medium-14 text-Neutrals-900 bg-Primary-Mordor-Blue-Bg-100 p-1 px-2">{blog.readTime}</p>
                          <a
                            href={blog.CTA.link || "#"}
                            className="text-Link-medium-16 text-Accent-Orange-950 hover:underline flex"
                          >
                            {blog.CTA.title}
                            <ArrowUpRight
                              size={19}
                              className="ml-1"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    key={key}
                    className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                  >
                    <Image
                      src={value[0].headerImage}
                      alt={value[0].header}
                      className="w-full h-48 object-cover"
                      width={500} // Adjust width as needed
                      height={200} // Adjust height as needed
                    />
                    
                    <div className="p-4">
                      <h2 className='text-[0.75rem] leading-[1.125rem] text-Accent-Orange-800 md:hidden uppercase mb-2'>
                      {
                        key
                      }
                    </h2>
                      <p className="mb-4 text-Caption-Regular-14 md:text-Body-Regular-12 text-Neutrals-800">
                        {value[0].title} • {value[0].date}
                      </p>
                      <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-20 text-neutral-950 mb-4">
                        {value[0].header}
                      </h3>
                      <div className="flex items-center mb-6 ">
                        <Image
                          src={value[0].author.pic}
                          alt={value[0].author.name}
                          className="w-10 h-10 rounded-full mr-3"
                          width={40} // Adjust width as needed
                          height={40} // Adjust height as needed
                        />
                        <div>
                          <p className="text-Display-Semibold-16 text-Neutrals-950">
                            {value[0].author.name}
                          </p>
                          <p className="text-Caption-Regular-14 text-Neutrals-800">
                            {value[0].author.designation}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-Body-Medium-14 text-Neutrals-900 bg-Primary-Mordor-Blue-Bg-100 p-1 px-2">{value[0].readTime}</p>
                        <a
                          href={value[0].CTA.link || "#"}
                          className="text-Link-medium-16 text-Accent-Orange-950 hover:underline flex"
                        >
                          {value[0].CTA
                          .title}
                          <ArrowUpRight
                            size={19}
                            className="ml-1"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                )
              }
              
              {/* Conditionally render the "View All" button */}
              {value.length > 1 && (
                
                  <button
                    onClick={() => handleToggleShowAll(key as 'Blogs' | 'Insights' | 'Case Studies' | 'Events')}
                    className='text-Primary-Blue-950 border-2 border-Primary-Blue-950 bg-transparent py-2 px-4 mt-5 hover:bg-Primary-Blue-950 hover:text-white mb-4'
                  >
                    {showAll[key as 'Blogs' | 'Insights' | 'Case Studies' | 'Events'] ? `Show Less` : `View All ${key}`}
                  </button>
                
              )}
            </div>
          
          ))
        }
      </div>
    </div>
  )
}


export default Trending

