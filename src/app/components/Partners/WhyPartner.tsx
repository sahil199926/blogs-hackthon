import { IWhyPartnerWithUs } from "@/types";

const WhyPartnerWithUs = ({
  whyPartnerWithUs,
}: {
  whyPartnerWithUs: IWhyPartnerWithUs;
}) => {
  return (
    <section className="flex-col justify-center overflow-hidden bg-Primary-Mordor-Blue-Bg-100 md:px-20 md:py-14">
      <h2 className="text-center text-Display-Semibold-24 md:text-Display-Semibold-32">
        {whyPartnerWithUs.title}
      </h2>
      <div className="m-auto flex max-w-8xl flex-col gap-8 md:flex-row">
        {whyPartnerWithUs.benefits.map((benefit, index) => (
          <div key={index} className="flex-col px-8 py-2 text-center md:py-6">
            <span className="mb-2 flex justify-center text-center text-Accent-Orange-900 md:mb-4">
              {benefit.icon}
            </span>
            <h3 className="my-2 text-Display-Semibold-16 md:text-Display-Semibold-20">
              {benefit.title}
            </h3>
            <p className="text-Body-Regular-16 text-neutral-900">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
