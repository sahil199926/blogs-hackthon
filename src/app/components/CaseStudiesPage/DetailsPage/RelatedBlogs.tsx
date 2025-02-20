import Image from "next/image";
import Link from "next/link";
import React from "react";
import OpenLink from "@/assets/OpenLink.svg";
import { IRelatedBlogsList } from "@/types";

function RelatedBlogs({ relatedBlog }: { relatedBlog: IRelatedBlogsList }) {
  return (
    <article className="relative">
      <div className="mb-4 border border-Neutrals-100">
        <Image
          height={439}
          width={622}
          className="w-[320px] object-contain md:w-full"
          src={relatedBlog.image.link}
          alt={relatedBlog.image.altText}
          title={relatedBlog.image.title}
          loading="lazy"
        />

        <div className="md:full flex max-w-[320px] flex-col gap-5 p-[14px]">
          <div className="flex flex-col">
            <div className="col mb-2 flex items-center text-Body-Regular-12 text-Neutrals-800">
              <span className="">{relatedBlog.category}</span>
              <span className="mx-2 inline-block h-[6px] w-[6px] rounded-full bg-Neutrals-800"></span>
              <span>{relatedBlog.date}</span>
            </div>
            <h3 className="mb-5 text-Display-Semibold-16">
              {relatedBlog.title}
            </h3>
            <div className="flex flex-row gap-3">
              <div className="h-[50px] w-[50px] overflow-hidden rounded-full border-[1] border-black">
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
                <h4 className="text-Body-Semibold-14">
                  {relatedBlog.author.name}
                </h4>
                <p className="text-Body-Regular-12 text-Neutrals-800">
                  {relatedBlog.author.designation}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="rounded bg-Primary-Blue-50 px-3 py-[10px] text-Body-Regular-12 text-Neutrals-900">
              {relatedBlog.readTime}
            </p>
            <div className="flex items-center gap-1">
              <Link
                target={relatedBlog.CTA.link ? "_blank" : ""}
                href={relatedBlog.CTA.link || ""}
                className="text-Link-medium-14 text-Accent-Orange-950 hover:underline">
                {relatedBlog.CTA.title}
              </Link>
              <Image src={OpenLink} alt="Open link logo" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RelatedBlogs;
