import { ISustainabilitySection } from "@/types";

function SustainabilitySection({ sustainabilitySection }: { sustainabilitySection: ISustainabilitySection }) {
  return (
    <section className="flex flex-col gap-12 max-w-[1440px] mx-auto px-4 sm:px-10 md:px-[88px] py-10 md:py-20">
      {/* upper Text */}
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950">{sustainabilitySection.heading}</h2>
        <p className="text-Body-Regular-16 text-Neutrals-900">{sustainabilitySection.description}</p>
      </div>
      {/* Points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {sustainabilitySection.values.map((value, index) => (
          <div key={index} className="flex  flex-col gap-4 md:gap-6 items-center text-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center">{value.icon}</div>
            <div className="flex flex-col gap-3 md:gap-2 max-w-[300px] sm:max-w-full">
              <h3 className="text-Display-Semibold-20 md:text-Display-Semibold-24">{value.title}</h3>
              <p className="text-Body-Regular-16 text-Neutrals-900">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SustainabilitySection;

