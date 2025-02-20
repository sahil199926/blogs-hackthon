"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import mordorLogo from "@/assets/mordor_logo.svg";
import mordorMobileLogo from "@/assets/mobile_mordor_logo.webp";
import Link from "next/link";
import searchIcon from "@/assets/SearchBlack.svg";
import phoneIcon from "@/assets/black-phone.svg";
import closeIcon from "@/assets/close.svg";
import hamburgerIcon from "@/assets/Burger.svg";

function Header2({ navigationData }: { navigationData: TNavData[] }) {
  const [openSearch, setOpenSearch] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [redirectUrl, setRedirectUrl] = useState(
    "https://www.mordorintelligence.com"
  );
  // get cuttent websiter domain
  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentDomain = window.location.hostname;
    if (
      [
        "https://www.mordorintelligence.com",
        "https://www.mordorlabs.com",
      ].includes(currentDomain)
    ) {
      setRedirectUrl("https://www.mordorintelligence.com");
    } else {
      setRedirectUrl("/");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the event target is not null and if the click happened outside the .header element
      const target = event.target as HTMLElement | null;
      if (target && !target.closest(".header") && openSearch) {
        setOpenSearch(false); // Close the search
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openSearch]);

  const handleSearchReport = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const text = target?.value;

    if ("key" in event && event.key === "Enter") {
      const redirectUrl = `https://www.mordorintelligence.com/search?q=${encodeURIComponent(text)}`;
      window.location.href = redirectUrl;
    }
  };

  const handleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <header className="header relative">
      <div
        className={`mx-auto h-[100%] w-[95%] min-w-max max-w-[1440px] items-center justify-start gap-3 lg:justify-between ${openSearch ? "hidden" : "flex"}`}>
        <Image
          onClick={handleMobileNav}
          className="lg:hidden"
          src={hamburgerIcon}
          alt="icon"
        />
        <Link href={redirectUrl}>
          <Image
            className="hidden lg:block"
            width={240}
            src={mordorLogo}
            alt="logo"
          />
          <Image
            className="lg:hidden"
            width={60}
            src={mordorMobileLogo}
            alt="logo mobile"
          />
        </Link>

        <nav
          className={`navbar absolute left-0 top-0 z-[100] flex h-[100vh] overflow-hidden p-[1rem] lg:overflow-visible lg:p-0 ${isMobileNavOpen ? "w-[100vw] opacity-100" : "w-0 opacity-0"} flex-col items-start bg-white transition-all duration-500 ease-in-out lg:static lg:z-auto lg:flex lg:h-[60px] lg:w-max lg:flex-row lg:items-center lg:opacity-100`}>
          <ul className="flex flex-col items-start lg:flex-row lg:items-center">
            <li>
              <div
                className="relative h-12 w-12 cursor-pointer lg:hidden"
                onClick={handleMobileNav}>
                <div
                  className={`hamburger flex h-6 w-8 flex-col items-center justify-between overflow-hidden transition-all ${isMobileNavOpen ? "open" : ""}`}>
                  <span className="block h-[2px] w-7 rounded-full bg-black transition-all"></span>
                  <span className="block h-[2px] w-7 rounded-full bg-black transition-all"></span>
                  <span className="block h-[2px] w-7 rounded-full bg-black transition-all"></span>
                </div>
              </div>
            </li>
            <NavigationBar data={navigationData} />
          </ul>
        </nav>
      </div>

      <div
        className={
          openSearch
            ? "absolute right-0 top-0 z-50 flex h-[60px] w-[100%] items-center justify-start bg-white px-[3%] transition-all duration-500 ease-in-out"
            : "flex w-[5%] min-w-max items-center justify-center md:absolute md:right-2"
        }>
        {openSearch ? (
          <input
            onInput={handleSearchReport}
            onKeyDown={handleSearchReport}
            id="search-report-input"
            placeholder="Search Reports..."
            className="h-[100%] flex-1 focus:outline-none"
            type="text"
            autoFocus={openSearch}
          />
        ) : null}
        {openSearch ? (
          <Image
            onClick={() => setOpenSearch(false)}
            className="h-[100%] cursor-pointer"
            src={closeIcon}
            alt="close-icon"
          />
        ) : (
          <Image
            onClick={() => setOpenSearch(true)}
            className="cursor-pointer"
            src={searchIcon}
            alt="search-icon"
          />
        )}
      </div>
    </header>
  );
}

function NavigationBar({ data }: { data: TNavData[] }): JSX.Element {
  return (
    <>
      {data.map((item) => (
        <li
          key={item.label}
          className={`${item.children ? (item.link.includes("market-analysis") ? "dropdown-arrow-container" : "dropdown-arrow-container") : ""} p-3 text-[15px] xl:p-4`}
        >
          <Link
            target={item.link === "/synapse" ? "" : "_blank"}
            href={item.link}
            className={`${item.children || item.link.includes("tel:") ? "flex" : ""} items-center justify-center`}
          >
            {item.link.includes("tel:") ? (
              <Image
                className="mb-[2px] mr-1"
                src={phoneIcon}
                alt="phone-icon"
              />
            ) : (
              ""
            )}
            {item.label}
            {item.children && item.children.length > 0 ? (
              <span
                className={`${item.children ? (item.link.includes("market-analysis") ? "dropdown-arrow hidden lg:block" : "dropdown-arrow") : ""}`}
              ></span>
            ) : null}
          </Link>
          {item.children && item.children.length > 0 ? (
            <ul
              className={`${item.children?.length && item.link.includes("market-analysis") ? "category-list-wrapper" : ""}`}
            >
              <NavigationBar data={item.children} />
            </ul>
          ) : null}
        </li>
      ))}
    </>
  );
}

export default Header2;

type TNavData = {
  label: string;
  link: string;
  children: null | TNavData[];
};
