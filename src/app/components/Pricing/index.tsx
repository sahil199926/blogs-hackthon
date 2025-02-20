import {
  ICustomers,
  ICustomerStories,
  IPricingContactSection,
  IPricingReportNameSection,
  IPricingStructure,
  IPricingTopSection,
  PricingProps,
} from "@/types";
import TopSection from "./TopSection";
import DynamicReportPricing from "./DynamicReportPricing";
import CustomerStories from "../common/CustomerStories";
import ContactSection from "./ContactSection";
import FloatingBar from "./FloatingBar";
import OurCustomers from "../common/UISections/OurCustomers";

function Pricing({ data }: PricingProps) {
  const topSection: IPricingTopSection = data.topSection as IPricingTopSection;
  const reportNameSection: IPricingReportNameSection = data.reportNameSection as IPricingReportNameSection;
  const pricingStructure: IPricingStructure = data.pricingStructure as IPricingStructure;
  const ourCustomers: ICustomers = data.ourCustomers as ICustomers;
  const customerStories: ICustomerStories = data.customerStories as ICustomerStories;
  const contactSection: IPricingContactSection = data.contactSection as IPricingContactSection;

  return (
    <main>
      <TopSection {...topSection} />
      <DynamicReportPricing reportNameSection={reportNameSection} pricingStructure={pricingStructure} />
      <OurCustomers ourCustomers={ourCustomers} className="bg-transparent" headerStyle="Our Customers" />
      <CustomerStories customerStories={customerStories} noPattern={true} bgBlue={false} />
      <ContactSection {...contactSection} />
      <FloatingBar />
    </main>
  );
}

export default Pricing;
