"use client";
import { Link } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ChevronDownWhite from "@/assets/ChevronDown_white.svg";
const LinksList = ({
  title,
  list,
}: {
  title: string;
  list: { text: string; link: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col md:hidden">
        <button
          onClick={toggleAccordion}
          className="flex items-center justify-between px-4 py-3"
        >
          <span>{title}</span>
          <Image src={ChevronDownWhite} alt="down icon"></Image>
        </button>
        {isOpen && (
          <div className="flex flex-col items-center gap-5 py-4 font-normal text-[#999999]">
            {list.map((item) => (
              <Link
                target="_blank"
                key={item.text}
                href={item.link}
                className="text-[14px] hover:underline"
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="hidden w-full max-w-[176px] flex-col gap-4 md:flex">
        <p className="font-semibold text-Neutrals-50">{title}</p>
        <ul className="flex flex-col gap-5 font-normal text-[#999999]">
          {list.map((item) => (
            <li key={item.text}>
              <Link
                target="_blank"
                href={item.link}
                className="text-[14px] hover:underline"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LinksList;
