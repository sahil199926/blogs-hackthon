"use client";
import Image from "next/image";
import React from "react";
import UKFlag from "@/assets/UnitedKingdom.svg";

const LanguageSelector = () => {
  return (
    <div className="relative flex h-[50px] w-[144px] items-center gap-2 py-3">
      <Image
        style={{ pointerEvents: "none" }}
        src={UKFlag}
        className="absolute left-4 z-10"
        alt="flag"
        height={16}
        width={20}
      />
      <div
        // style={{ pointerEvents: "none" }}
        className="absolute h-full w-full appearance-none bg-neutral-950 pl-12"
      >
        <select
          id="language"
          disabled
          aria-label="Select Language"
          className="h-full w-full appearance-none bg-neutral-950 pl-1"
        >
          <option value="en">English</option>
          {/* <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option> */}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
