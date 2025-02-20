import React from "react";
import { Download, Phone } from "lucide-react";

function ContactSection() {
  return (
    <section className="bg-Primary-Mordor-Blue-Bg-100">
      <div className="mx-auto flex max-w-8xl flex-col px-3 py-16 md:flex-row lg:p-10">
        <div className="m-12 flex flex-col gap-3 border-b-2 border-gray-400 p-2 pb-12 md:w-full md:border-b-0 md:border-r-2 md:p-6">
          <Download className="my-4 h-12 w-12 text-Accent-Orange-900 md:h-16 md:w-16" />
          <h2 className="text-[24px] font-semibold">
            Get a detailed version of the case study
          </h2>
          <p className="text-[16px] text-[#454545]">
            Get a peak into how we used the insights to help change the
            trajectory of the business
          </p>
          <button className="flex items-center self-start bg-Accent-Orange-950 px-4 py-2 text-white hover:bg-Accent-Orange-900">
            Download PDF
          </button>
        </div>
        <div className="m-12 flex flex-col gap-3 p-2 md:w-full md:p-6">
          <Phone className="my-4 h-12 w-12 text-Accent-Orange-900 md:h-16 md:w-16" />
          <h2 className="text-[24px] font-semibold">
            Today&apos;s Accessible Intelligence, Unlocking Potential
          </h2>
          <p className="text-[16px] text-[#454545]">
            Reach out us with any market problem, we have something for you
            always.
          </p>
          <button className="flex items-center self-start border-2 border-blue-400 px-4 py-2 text-blue-400">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
