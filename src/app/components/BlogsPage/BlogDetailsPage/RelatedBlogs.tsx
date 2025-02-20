import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import OpenLink from "@/assets/OpenLink.svg";
import { IRelatedBlogsList } from '@/types';


function RelatedBlogs({ relatedBlog }: { relatedBlog: IRelatedBlogsList }) {
  return (
    <article className="relative">
      <div className="border border-Neutrals-100 mb-4">
        <Image
          height={439}
          width={622}
          className="w-[320px] md:w-full object-contain"
          src={relatedBlog.image.link}
          alt={relatedBlog.image.altText}
          title={relatedBlog.image.title}
          loading="lazy"
        />

        <div className="flex flex-col gap-5 p-[14px] max-w-[320px] md:full">
          <div className="flex flex-col ">
            <div className="mb-2 text-Body-Regular-12 flex col items-center text-Neutrals-800">
              <span className="">{relatedBlog.category}</span>
              <span className="mx-2 bg-Neutrals-800 rounded-full  inline-block h-[6px] w-[6px]"></span>
              <span>{relatedBlog.date}</span>
            </div>
            <h4 className="mb-5 text-Display-Semibold-16">{relatedBlog.title}</h4>
            <div className="flex flex-row gap-3">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-[1] border-black">
                <Image
                  height={50}
                  width={50}
                  className="object-contain"
                  src={relatedBlog.author.image.link}
                  alt={relatedBlog.author.image.altText}
                  title={relatedBlog.author.image.title}
                />
              </div>
              <div className="flex flex-col justify-center">
                <cite className="text-Body-Semibold-14">{relatedBlog.author.name}</cite>
                <p className="text-Body-Regular-12 text-Neutrals-800">{relatedBlog.author.designation}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-Body-Regular-12 text-Neutrals-900 bg-Primary-Blue-50 py-[10px] px-3 rounded">{relatedBlog.readTime}</p>
            <div className="flex items-center  gap-1">
              <Link
                target={relatedBlog.CTA.link ? "_blank" : ""}
                href={relatedBlog.CTA.link || ""}
                className="text-Link-medium-14 text-Accent-Orange-950 hover:underline"
              >
                {relatedBlog.CTA.title}
              </Link>
              <Image src={OpenLink} alt="Open link logo" />
            </div>

          </div>
        </div>
      </div>
    </article>
  )
}

export default RelatedBlogs