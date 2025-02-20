import React from "react";
import Image from "next/image";

import { ICustomers } from "@/types";

function OurCustomers({ ourCustomers,className,headerStyle }: { ourCustomers: ICustomers,className?:string,headerStyle?:string }) {
  return (
    <div className={`bg-Primary-Mordor-Blue-Bg-50 ${className?className:''}`}>
      <div className="mx-auto max-w-8xl px-3 py-10 lg:p-10">
        <div style={{ overflow: "hidden" }} className="flex flex-col gap-6">
          <h2 className={`text-center text-Display-FullCaps-16 text-Neutrals-900 uppercase lg:text-Display-FullCaps-18 ${headerStyle?headerStyle:''}`}>
            {ourCustomers.kicker}
          </h2>
          <div
            style={{
              display: "inline-flex",
              pointerEvents: "none",
              animation: "scrollLoop 10s linear infinite", // Add scrolling animation
            }}
          >
            {[
              ...ourCustomers.imgList,
              ...ourCustomers.imgList,
              ...ourCustomers.imgList,
            ]?.map((item, index) => (
              <figure
                key={`${item.label}-${index}`} // Ensure unique keys for duplicates
                className="flex h-[65px] w-[195px] items-center justify-center"
              >
                <Image
                  style={{ maxWidth: "180px" }}
                  width={120}
                  height={32}
                  className="mx-8 my-5"
                  src={item.src}
                  title={item.label || "Company Logo"}
                  alt={item.label || "Company Logo"}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCustomers;
