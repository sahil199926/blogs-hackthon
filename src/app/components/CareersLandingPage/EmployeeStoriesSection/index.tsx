import { IEmployeeStoriesSection } from "@/types";
import CardSwiper from "../../common/CardSwiper";

function EmployeeStoriesSection({
  employeeStories,
}: {
  employeeStories: IEmployeeStoriesSection;
}) {
  return (
    <>
      <section className="flex justify-center bg-Primary-Mordor-Blue-Bg-200">
      <div className="container max-w-[1440px] px-4 pb-10 pt-10 sm:px-10 md:pb-[88px] md:pt-20 lg:px-[88px]">
        <div className="flex flex-col items-center md:items-start lg:items-center justify-between gap-6 lg:flex-row">

          {/* Left Section */}
          <div className="flex flex-col items-start gap-4 text-left sm:text-center md:text-left">
            <div className="flex max-w-[380px] flex-col items-start sm:items-center gap-4 md:items-start text-left sm:text-center md:text-left">
              <h2 className="text-Display-FullCaps-16 uppercase text-Neutrals-900 md:text-Display-FullCaps-18 text-left sm:text-center md:text-left">
                {employeeStories.kicker}
              </h2>
              <h3 className="text-Display-Semibold-24 text-Neutrals-950  md:text-Display-Semibold-32 text-left sm:text-center md:text-left">
                {employeeStories.heading}
              </h3>
            </div>
            <p className="text-Body-Regular-16 text-Neutrals-900">{employeeStories.description}</p>
          </div>

          {/* Right Section */}
          <CardSwiper
            dataList={employeeStories.testimonials}
            from="careers-landing-page/employee-stories"
          />
          
        </div>
      </div>
    </section>
    </>
    );
}

export default EmployeeStoriesSection;
