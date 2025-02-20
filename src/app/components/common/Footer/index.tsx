"use client";
import React, { useState } from "react";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import Newsletter from "./Newsletter";
import Logo from "@/assets/Logo.png";
import Twitter from "@/assets/twitter.svg";
import Linkedin from "@/assets/linkedin.svg";
import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import Youtube from "@/assets/youtube.svg";
import MSRI from "@/assets/MRSI.svg";
import ESOMAR from "@/assets/ESOMAR.svg";
import GPTW from "@/assets/GPTW.svg";
import ISO from "@/assets/ISO.png";
import Email from "@/assets/Email.svg";
import Phone from "@/assets/Phone.svg";
import ChevronDownWhite from "@/assets/ChevronDown_white.svg";
import Link from "next/link";

const Footer = ({ categoryList }: TFooter) => {
  return (
    <div className="flex w-full justify-center bg-[#040E13]">
      <footer className="flex w-full max-w-[1440px] flex-col gap-0 px-4 py-10 pb-[78px] text-Neutrals-50 sm:px-10 md:gap-10 md:pt-20 lg:px-[88px]">
        <div
          id="content"
          className="flex flex-col justify-between gap-8 md:flex-row"
        >
          <div className="flex justify-center border border-neutral-50 md:hidden">
            <LanguageSelector />
          </div>
          <div id="Logo & socials" className="flex flex-col gap-4 md:gap-6">
            <div className="h-full max-h-[33px] w-full max-w-[264px] md:max-h-[44px] md:max-w-[350px]">
              <Image src={Logo} alt="logo" width={350} height={44} />
            </div>
            <address className="text-base not-italic">
              11th Floor, Rajapushpa Summit
              <br />
              Nanakramguda Rd, Financial District, Gachibowli
              <br />
              Hyderabad, Telangana - 500008, India
            </address>

            <div id="Socials" className="flex gap-2">
              <Link target="_blank" href="https://twitter.com/mordorintel">
                <Image src={Twitter} alt="twitter" height={32} width={32} />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/mordor-intelligence"
              >
                <Image src={Linkedin} alt="linkedin" height={32} width={32} />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/MordorIntel">
                <Image src={Facebook} alt="facebook" height={32} width={32} />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/mordorintel/"
              >
                <Image src={Instagram} alt="instagram" height={32} width={32} />
              </Link>
              <a
                target="_blank"
                href="https://www.youtube.com/@Mordorintelligence"
              >
                <Image src={Youtube} alt="youtube" height={32} width={32} />
              </a>
            </div>
          </div>
          <div
            id="Drop & News Letter"
            className="flex flex-col justify-between gap-8"
          >
            <div className="hidden justify-end md:flex">
              <div className="border">
                <LanguageSelector />
              </div>
            </div>
            <div className="hidden md:flex">
              <Newsletter categoryList={categoryList} />
            </div>
          </div>
        </div>

        <div
          id="Segregation"
          className="hidden h-[1px] w-full bg-Neutrals-900 md:flex"
        ></div>

        <div
          id="Footer List"
          className="relative mb-5 flex flex-col gap-3 md:flex-row"
        >
          <div
            id="Details"
            className="flex flex-wrap gap-4 from-Neutrals-50 text-[14px] sm:gap-6 md:w-full md:max-w-[408px] md:flex-col"
          >
            <Link
              href="mailto:info@mordorintelligence.com"
              className="inline-flex items-center gap-3"
            >
              <Image src={Email} alt="email" height={34} width={34} />
              info@mordorintelligence.com
            </Link>

            <Link
              href="mailto:media@mordorintelligence.com"
              className="inline-flex items-center gap-3"
            >
              <Image src={Email} alt="email" height={34} width={34} />
              media@mordorintelligence.com
            </Link>

            <Link
              href="tel:+918046913714"
              className="inline-flex items-center gap-3"
            >
              <Image src={Phone} alt="phone" height={34} width={34} />
              +1 617-765-2493
            </Link>
          </div>

          <div className="md:hidden">
            <Newsletter categoryList={categoryList} />
          </div>

          <div className="flex w-full flex-col border-t border-Neutrals-900 py-4 sm:gap-3 md:flex-row md:border-0 md:py-0">
            <LinksList
              title={"Solutions"}
              list={[
                {
                  text: "Reports",
                  link: "https://www.mordorintelligence.com/market-analysis",
                },
                {
                  text: "Custom Research",
                  link: "https://www.mordorintelligence.com/custom-research",
                },
                //{text: "Market Data",link: "https://www.mordorintelligence.com/about",},
                //{text: "Trends",link: "https://www.mordorintelligence.com/about",},
                {
                  text: "Synapse",
                  link: "https://synapse.mordorintelligence.com/",
                },
              ]}
            />

            <LinksList
              title={"Resources"}
              list={[
                {
                  text: "Blogs",
                  link: "https://www.mordorintelligence.com/blog",
                },
                //{text: "Case Studies",link: "https://www.mordorintelligence.com/about",},
                //{text: "FAQ’s",link: "https://www.mordorintelligence.com/about",},
              ]}
            />

            <LinksList
              title={"Company"}
              list={[
                {
                  text: "About Us",
                  link: "https://www.mordorintelligence.com/about",
                },
                {
                  text: "Careers",
                  link: "https://mordorintelligence.darwinbox.in/ms/candidate/careers",
                },
                //{text: "Industries", link: "https://www.mordorintelligence.com/market-analysis",},
                {
                  text: "Our Clients",
                  link: "https://www.mordorintelligence.com/clients",
                },
                //{text: "Partners", link: "https://www.mordorintelligence.com/about",},
                {
                  text: "Our Team",
                  link: "https://www.mordorintelligence.com/team",
                },
                //{text: "Awards", link: "https://www.mordorintelligence.com/about",},
                //{text: "Media", link: "https://www.mordorintelligence.com/about",},
              ]}
            />

            <LinksList
              title={"Other Links"}
              list={[
                {
                  text: "Contact Us",
                  link: "https://www.mordorintelligence.com/contact-us",
                },
                {
                  text: "Privacy Policy",
                  link: "https://www.mordorintelligence.com/privacy-policy",
                },
                {
                  text: "Terms & Condition",
                  link: "https://www.mordorintelligence.com/terms-and-conditions",
                },
                {
                  text: "Site Map",
                  link: "https://www.mordorintelligence.com/sitemap.html",
                },
                {
                  text: "XML",
                  link: "https://www.mordorintelligence.com/static/sitemap.xml",
                },
              ]}
            />
          </div>

          <div
            id="logos"
            className="-bottom-10 right-auto mb-8 flex h-20 items-center justify-between gap-4 md:absolute md:-mb-5 lg:right-0"
          >
            <Image
              className="object-contain"
              src={MSRI}
              alt="msri logo"
              width={54.38}
              height={30}
            />
            <Image
              className="object-contain"
              src={ESOMAR}
              alt="esomar logo"
              width={70}
              height={25}
            />
            <Image
              className="object-contain"
              src={GPTW}
              alt="gptw logo"
              width={48}
              height={80}
            />
            <Image
              className="object-contain"
              src={ISO}
              alt="iso logo"
              width={75}
              height={75}
            />
          </div>
        </div>

        <div
          id="Segregation"
          className="h-[1px] w-full bg-Neutrals-900 md:mt-2"
        ></div>

        <p className="my-8 w-full text-center md:mt-0">
          ©
          {
            //Dynamic year
            new Date().getFullYear()
          }
          . All rights reserved to Mordor Intelligence
        </p>
      </footer>
    </div>
  );
};

const LinksList = ({ title, list }: TLinksList) => {
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

export default Footer;

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};

type TFooter = {
  categoryList: TCategoryListItem[];
};

type TLinksList = {
  title: string;
  list: {
    text: string;
    link: string;
  }[];
};
