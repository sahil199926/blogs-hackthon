import { IPricingContactSection } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CommonCopyText from "../common/CommonCopyText";

const ContactSection: React.FC<IPricingContactSection> = ({
  heading,
  contactData,
}) => {
  return (
    <section className="mx-auto flex w-[95%] max-w-[1440px] flex-col gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
      {/* Left Side (heading) */}
      <div className="flex-shrink-0">
        <h2 className="max-w-[250px] text-Display-Semibold-24 text-neutral-900">
          {heading}
        </h2>
      </div>

      {/* Right Side (contact boxes) */}
      <div className="flex flex-wrap flex-col gap-4 md:flex-row">
        {contactData.map((item, index) => (
          <div
            key={index}
            className="rounded-md border border-neutral-200 p-4 md:p-6 shadow-mordorCustom">
            <h3 className="mb-1 text-Display-Semibold-20 text-black">
              {item.heading}
            </h3>
            <p className="mb-4 text-Caption-Regular-14 text-black">{item.description}</p>
            {item.type === "link" ? (
              <Link
                href={item.link}
                target="_blank"
                className="flex flex-row justify-center text-Link-medium-16 text-orange-600 hover:underline">
                <span>{item.heading}</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            ) : (
              <CommonCopyText
                icon={item.icon}
                text={item.link}
                type={item.type}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
