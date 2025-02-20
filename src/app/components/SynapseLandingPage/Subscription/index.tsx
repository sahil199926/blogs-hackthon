"use client";
import React, { useState } from "react";
import synapselogoSvg from "@/assets/synapse-logo.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";
import { ISubscription } from "@/types";
import { ContactUsApi } from "@/api/client";
import { INewSubscriberPayLoad } from "@/types/apiPayloadTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { officialEmailDomainRegex, phoneRegex, nameRegex } from "@/utils/regex";
import DotBg from "../../common/DotBg";

const ThanksModal = dynamic(() => import("./ThanksModal"));

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email()
    .matches(officialEmailDomainRegex, "Please enter your business email"),
  phone: Yup.string()
    .nullable()
    .test(
      "is-valid-phone",
      "Please enter a valid phone number",
      (value) => !value || phoneRegex.test(value)
    ),
  name: Yup.string()
    .nullable()
    .notRequired() // Makes the field optional
    .test(
      "is-valid-name",
      "Please enter a valid name",
      (value) => !value || nameRegex.test(value) // Validate only if a value is provided
    ),
  agree: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const Subscription = ({ subscription }: { subscription: ISubscription }) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: {
    email: string;
    name?: string | null | undefined;
    phone?: string | null | undefined;
    agree: boolean | string;
  }) => {
    const payload: INewSubscriberPayLoad = {
      email: data.email,
      name: {
        first_name: data.name ? data.name : data.email,
        last_name: data.name ? data.name : data.email,
      },
      ...(data.phone && { phone: data.phone }),
      cta: "lead",
      cta_text: "synapse-free-trial",
      priority: "synapse",
      desc: "",
      form_type: "contact_us",
      is_blog_lead: false,
      query_url: "/subscription",
      source_lead_event: "synapse-free-trial",
      source_page_type: "Synapse",
      source_url: window.location.href,
      url: window.location.href,
    };

    const onSuccess = () => {
      setOpen(true);
      // reset form
      reset();
    };

    const onFail = () => {};

    await ContactUsApi(payload, onSuccess, onFail);
  };

  return (
    <>
      <div className="relative bg-white" id="subscription">
        <section className="flex flex-col items-center justify-center p-4 py-8">
          <h3 className="mb-5 text-base font-medium uppercase leading-27px text-Neutrals-900 md:text-lg">
            {subscription?.title}
          </h3>
          <h2 className="md:text-Display/Semibold mb-3 max-w-2xl text-center text-2xl font-semibold leading-46px">
            {subscription?.desc}
          </h2>
          <p className="mb-8 max-w-2xl text-center text-sm leading-6 text-Neutrals-900 md:text-base">
            {subscription?.descTwo}
          </p>
          <form className="z-10" onSubmit={handleSubmit(onSubmit)}>
            <section className="flex flex-col justify-center align-middle md:flex-row">
              <section className="relative flex flex-col rounded-md border border-[var(--Colors-Neutrals-300,#D4D4D4)] bg-Primary-Blue-100 bg-[var(--Colors-Background-Mordor-Blue-100,#EAF6FA)] p-8 shadow-[0px_2px_20px_0px_#002F750A]">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="py-2 text-left text-sm font-medium text-Neutrals-950">
                      Email Address
                    </label>

                    <input
                      type="email"
                      {...register("email")}
                      aria-label="email"
                      className="border-0.5 rounded-md border border-Neutrals-300 p-3 placeholder:text-left placeholder:text-sm placeholder:font-normal placeholder:leading-5 xl:w-80"
                      placeholder="roshansmith@example.com"
                    />

                    <span className="min-h-4 text-xs text-red-500">
                      {errors.email && errors.email.message}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <label
                      aria-label="name"
                      htmlFor="name"
                      className="py-2 text-left text-sm font-medium text-Neutrals-950">
                      Name (Optional)
                    </label>

                    <input
                      type="text"
                      aria-label="name"
                      {...register("name")}
                      className="border-0.5 rounded-md border border-Neutrals-300 p-3 placeholder:text-left placeholder:text-sm placeholder:font-normal placeholder:leading-5 xl:w-80"
                      placeholder="Mohamed Rafeeque"
                    />

                    <span className="min-h-4 text-xs text-red-500">
                      {errors.name && errors.name.message}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="py-2 text-left text-sm font-medium text-Neutrals-950">
                      Mobile Number (Optional)
                    </label>

                    <input
                      type="tel"
                      onKeyDown={(e) => {
                        const allowedKeys =
                          /^[0-9]$|Backspace|ArrowLeft|ArrowRight|Delete|Tab/;
                        if (!allowedKeys.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      aria-label="phone"
                      {...register("phone")}
                      className="border-0.5 rounded-md border border-Neutrals-300 p-3 placeholder:text-left placeholder:text-sm placeholder:font-normal placeholder:leading-5 xl:w-80"
                      placeholder="777-777-7777"
                    />

                    <span className="min-h-4 text-xs text-red-500">
                      {errors.phone && errors.phone.message}
                    </span>
                  </div>

                  <div className="mb-4 flex hidden flex-col self-end lg:block">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center self-center bg-Accent-Orange-950 px-4 text-white hover:bg-Accent-Orange-900 md:py-0 lg:py-3">
                      {isSubmitting ? (
                        <Loader className="animate-spin" />
                      ) : (
                        "Start a Free Trial"
                      )}
                    </button>
                  </div>
                </div>

                {/* //Add checkbox for terms and conditions */}
                <span className="relative mt-4 flex items-center text-left">
                  <input
                    type="checkbox"
                    {...register("agree")}
                    aria-label="agree"
                    id="agree"
                    className="mr-2 h-4 w-4"
                  />

                  <label
                    htmlFor="agree"
                    className="pt-1 text-sm leading-5 text-Neutrals-950">
                    I agree to the{" "}
                    <a
                      target="_blank"
                      href="https://synapse.mordorintelligence.com/terms_and_conditions.pdf"
                      className="underline">
                      terms and conditions{" "}
                    </a>
                    and{" "}
                    <a
                      target="_blank"
                      href="https://synapse.mordorintelligence.com/privacy_policy.pdf"
                      className="underline">
                      privacy policy
                    </a>
                  </label>
                  {errors.agree && (
                    <span className="absolute -bottom-4 left-4 text-[10px] text-red-500">
                      {errors.agree.message}
                    </span>
                  )}
                </span>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="mt-8 flex w-full justify-center self-center bg-Accent-Orange-950 px-4 py-2 text-white hover:bg-Accent-Orange-900 lg:hidden">
                  {isSubmitting ? (
                    <Loader className="animate-spin" />
                  ) : (
                    "Start a Free Trial"
                  )}
                </button>

                <Image
                  src={synapselogoSvg}
                  alt="subscription"
                  width={87}
                  height={22}
                  className="absolute bottom-7 right-8 hidden lg:block"
                />
              </section>
            </section>
          </form>
        </section>

        {/* <Image
         
          src={pattern}
          alt="pattern"
        /> */}
        <div className="z-1 absolute -bottom-4 left-0 hidden sm:block">
          <DotBg
            cropWidthStart={750}
            cropWidthEnd={1156}
            cropHeightStart={0}
            cropHeightEnd={489}
          />
        </div>
      </div>
      {open && <ThanksModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default Subscription;
