/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import rightArrow from "@/assets/right-arrow.png";
import Image from "next/image";
import Link from "next/link";

function Breadcrumbs({ list }: { list: TBreadcrumbItem[] }) {
  return (
    <div id="bread-crumbs" className="mx-auto max-w-8xl">
      {/* <nav className="mx-auto flex w-[90%] items-center justify-start gap-1 py-3">
        {list?.map((item: TBreadcrumbItem, index: number) => {
          return (
            <React.Fragment key={index}>
              {index != 0 ? <Image src={rightArrow} alt="right-arrow" /> : null}
              <Link
                className={`${index == list.length - 1 ? "font-semibold" : "font-normal"} text-sm`}
                href={item.link}
              >
                {item.label}
              </Link>
            </React.Fragment>
          );
        })}
      </nav> */}
    </div>
  );
}

type TBreadcrumbItem = {
  label: string;
  link: string;
};

export default Breadcrumbs;
