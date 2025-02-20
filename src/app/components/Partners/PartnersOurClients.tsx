import { IOurClients } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnersOurClient = ({
  key,
  heading,
  CTA,
  hidden,
  clients,
}: IOurClients & { hidden: boolean; index: number }) => {
  return (
    <div key={key} className={`${hidden ? "hidden" : "flex"}`}>
      <section>
        <div className="flex max-w-[100%] flex-col items-center justify-between gap-4 md:flex-row md:px-16">
          <div className="hidden text-center md:block md:text-left">
            <h2 className="text-Body-Regular-16">{heading}</h2>
            <div className="mt-6 md:mt-8">
              <button className="bg-Primary-Blue-950 hover:bg-Primary-Blue-800">
                <Link href={CTA.link}>
                  <p className="px-4 py-3 text-Link-medium-16 text-Neutrals-white">
                    {CTA.title}
                  </p>
                </Link>
              </button>
            </div>
          </div>

          <div className="flex hidden flex-wrap justify-center gap-8 bg-Primary-Mordor-Green-Bg-50 p-10 md:flex">
            {clients.map((client, index) => (
              <Image
                key={index}
                src={client}
                alt="Client Logo"
                className="h-10 object-contain md:h-12"
                width={90}
                height={90}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersOurClient;
