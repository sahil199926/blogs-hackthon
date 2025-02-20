"use client";
import Image from "next/image";
import { useState } from "react";
import ChevronDownBlack from "@/assets/ChevronDown_black.svg";
import ThanksModal from "./ThanksModal";
import { Loader } from "lucide-react";
// import { ContactUsApi } from "@/api/client";
import { INewsSubPayLoad } from "@/types/apiPayloadTypes";
import { Button } from "@/ulComponents/ui/button";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { officialEmailDomainRegex } from "@/utils/regex";
import axios from "axios";
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(officialEmailDomainRegex, "Please enter your business email"),
  industry: Yup.string().required("Please select an industry"),
});

const Newsletter = ({
  categoryList,
}: {
  categoryList: TCategoryListItem[];
}) => {
  const [open, setOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      industry: "",
    },
  });

  const onSubmit = async (data: { email: string; industry: string }) => {
    const payload: INewsSubPayLoad = {
      email: data.email,
      industry: data.industry.split("_").join(" "),
      cta: "newsletter_sub",
      url: window.location.href,
    };
    const onSuccess = () => setOpen(true);
    const onFail = () => console.error("Submission failed");
    try {
      await axios.post(
        `https://staging.mordorintelligence.com/api/leads`,
        payload
      );
      onSuccess();
    } catch (e) {
      onFail();
      console.error(e);
    }
    //! commented for now as the api is not working
    // await ContactUsApi(payload, onSuccess, onFail);
  };

  return (
    <div id="News Letter" className="my-[28px] flex flex-col gap-6 sm:my-0">
      <div id="Newsletter Title" className="flex flex-col gap-1">
        <p className="font-semibold">Join the Newsletter</p>
        <p className="font-normal text-[#DADEE7]">
          Subscribe to our newsletter to get the latest news and updates
        </p>
      </div>

      <form
        id="Newsletter Input"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 md:gap-3 lg:flex-row">
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="w-full px-4 py-3 text-Neutrals-950 lg:w-[277px]"
                placeholder="example@mordorintelligence.com"
              />
            )}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <Controller
            name="industry"
            control={control}
            render={({ field }) => (
              <div className="relative flex h-[48px] w-full lg:w-[147px]">
                <select
                  {...field}
                  id="industry"
                  aria-label="Industry"
                  className="absolute h-full w-full appearance-none px-4 text-Neutrals-950">
                  <option disabled value="">
                    Industry
                  </option>
                  {categoryList?.length
                    ? categoryList.map(
                        (item: TCategoryListItem, index: number) => (
                          <option
                            key={index}
                            value={
                              item.label
                              // .toLowerCase()
                              // .replaceAll(" ", "_")
                            }>
                            {item.label}
                          </option>
                        )
                      )
                    : ""}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <Image
                    src={ChevronDownBlack}
                    alt="down"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
            )}
          />
          {errors.industry && (
            <span className="text-sm text-red-500">
              {errors.industry.message}
            </span>
          )}
        </div>
        <Button
          disabled={isSubmitting}
          type="submit"
          className="flex w-full justify-center rounded-none bg-Accent-Orange-950 py-3 text-Link-medium-14 font-bold lg:w-[130px]">
          {isSubmitting ? <Loader className="animate-spin" /> : "Subscribe"}
        </Button>
      </form>

      {open && <ThanksModal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Newsletter;

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};
