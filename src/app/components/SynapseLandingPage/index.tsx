import React from "react";
import ContactUs from "../common/ContactUs";
import MajorUpdates from "./MajorUpdates";
import TrialCta from "./TrialCta";
import OurCustomers from "../common/UISections/OurCustomers";
import SynapseInAction from "./SynapseInAction";
import SolutionTabs from "../common/UISections/SolutionTabs";
import {
  ICustomers,
  IFaq,
  IHeroSection,
  IHubs,
  IMajorUpdates,
  ISolutionTabs,
  ICustomerStories,
  // ISubscription,
  ISynapseAction,
  ITrialCta,
  IWhySynapse,
  SynapseLandingPageProps,
} from "@/types";
import WhySynapse from "./WhySynapse";
// import Subscription from "./Subscription";
import SynapseHubs from "./Hubs";
import FaqSection from "./FaqSection";
import SynapseHeroSection from "./SynapseHeroSection";
import CustomerStories from "../common/CustomerStories";

function SynapseLandingPage({ data }: SynapseLandingPageProps) {
  const heroSection: IHeroSection = data.heroSection as IHeroSection;
  const majorUpdates: IMajorUpdates = data.majorUpdates as IMajorUpdates;
  const trialCta: ITrialCta = data.trialCta as ITrialCta;
  const ourCustomers: ICustomers = data.ourCustomers as ICustomers;
  const synapseAction: ISynapseAction = data.synapseAction as ISynapseAction;
  const solutionTabs: ISolutionTabs = data.solutionTabs as ISolutionTabs;
  const whySynapse: IWhySynapse = data.whySynapse as IWhySynapse;
  // const subscription: ISubscription = data.subscription as ISubscription;
  const hubs: IHubs = data.hubs as IHubs;
  const customerStories: ICustomerStories =
    data.customerStories as ICustomerStories;
  const faq: IFaq = data.faq as IFaq;

  return (
    <>
      <SynapseHeroSection heroSection={heroSection} />
      <MajorUpdates majorUpdates={majorUpdates} />
      <TrialCta trialCta={trialCta} />

      <OurCustomers ourCustomers={ourCustomers} />

      <SynapseInAction synapseAction={synapseAction} />
      <SolutionTabs solutionTabs={solutionTabs} />
      <WhySynapse whySynapse={whySynapse} />
      {/* <Subscription subscription={subscription} /> */}
      <SynapseHubs hubs={hubs} />
      <CustomerStories customerStories={customerStories} />
      <FaqSection faq={faq} />
      <ContactUs/>
    </>
  );
}

export default SynapseLandingPage;
