"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";
import { ContactUsApi } from "@/api/client";
import { IContactUsPayLoad } from "@/types/apiPayloadTypes";
import { IContactUs } from "@/types";
import { nameRegex, phoneRegex } from "@/utils/regex";
import DotBg from "../DotBg";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const ThanksModal = dynamic(() => import("./ThanksModal"));

const contactUs : IContactUs = {
  kicker: "CONTACT US",
  heading: "Today's Accessible Intelligence, Unlocking Tomorrow's Potential.",
  cta: {
    title: "Submit",
    link: "#",
  },
}


// Define validation schema
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(nameRegex, "Name is invalid"),
  phone: Yup.string().matches(phoneRegex, "Phone number is invalid"),
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegex, "Please enter a valid email"),
  message: Yup.string().required("Message is required"),
});
interface FormValues {
  email: string;
  name: string;
  phone?: string;
  message: string;
}

const ContactUs = ({
  bgColorClass,
  dotbgStyle,
}: {
  bgColorClass?: string;
  dotbgStyle?: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema), // Centralized validation rules
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const payload: IContactUsPayLoad = {
      email: data.email,
      name: data.name,
      ...(data.phone && { phone: data.phone }),
      cta: "contact_us",
      desc: data.message,
      form_type: "contact_us",
      is_blog_lead: false,
      query_url: "/contact-us",
      source_lead_event: "contact_us",
      source_url: window.location.href,
      url: window.location.href,
    };

    const onSuccess = () => {
      setLoading(false);
      setOpen(true);
      reset(); // Reset form fields
    };

    const onFail = () => {
      setLoading(false);
    };

    await ContactUsApi(payload, onSuccess, onFail);
  };

  return (
    <>
      <div
        className={`relative ${bgColorClass ? bgColorClass : ""} flex justify-center overflow-hidden`}
        id="contact-us-section">
        <section className="mx-4 my-10 flex w-full max-w-[1264px] flex-col items-center justify-between gap-6 sm:mx-10 lg:mx-[88px] lg:my-20 lg:flex-row lg:gap-10">
          <div className="mr-auto flex max-w-[303px] flex-col gap-3 sm:mr-0 md:max-w-[420px] md:gap-4 lg:mb-16">
            <h2 className="text-Display-FullCaps-16 text-Neutrals-900 sm:text-center md:text-Display-FullCaps-18 lg:text-left">
              {contactUs.kicker}
            </h2>
            <h3 className="text-Display-Semibold-24 sm:text-center lg:text-left lg:text-Display-Semibold-32">
              {contactUs.heading}
            </h3>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="z-10 flex w-full max-w-[580px] flex-col gap-5 bg-Primary-Mordor-Blue-Bg-100 p-4 md:p-8 xl:mr-10">
            <div className="flex flex-col gap-4 md:flex-row md:gap-5">
              <div className="flex w-full flex-1 flex-col gap-2">
                <label htmlFor="name" className="text-Body-medium-14">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full rounded-md border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400"
                />
                {errors.name && (
                  <span className="text-[12px] text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex w-full flex-1 flex-col gap-2">
                <label htmlFor="phone" className="text-Body-medium-14">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  onKeyDown={(e) => {
                    const allowedKeys =
                      /^[0-9]$|Backspace|ArrowLeft|ArrowRight|Delete|Tab/;
                    if (!allowedKeys.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="Your Phone No"
                  className="w-full rounded-md border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400"
                />
                {errors.phone && (
                  <span className="text-[12px] text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-Body-medium-14">
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Your Email Address"
                className="rounded-md border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400"
              />
              {errors.email && (
                <span className="text-[12px] text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-Body-medium-14">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Your Message"
                className="resize-none rounded-md border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400"
                rows={4}
              />
              {errors.message && (
                <span className="text-[12px] text-red-500">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="flex h-[46px] w-full items-center justify-center self-center bg-Primary-Blue-950 p-2 text-white">
              {loading ? (
                <Loader className="animate-spin" />
              ) : (
                <p>{contactUs.cta.title}</p>
              )}
            </button>
          </form>
        </section>

        <div
          className={`z-1 absolute -bottom-0 left-0 ${dotbgStyle ? dotbgStyle : ""}`}>
          <DotBg
            cropWidthStart={330}
            cropWidthEnd={1156}
            cropHeightStart={0}
            cropHeightEnd={210}
          />
        </div>
      </div>
      {open && <ThanksModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default ContactUs;
