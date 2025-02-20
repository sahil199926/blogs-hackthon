'use client';
import { officialEmailDomainRegex } from '@/utils/regex';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowUpRight, Loader } from 'lucide-react';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import * as Yup from "yup";
import ChevronDownBlack from "@/assets/ChevronDown_black.svg";
import Image from 'next/image';
import { INewsSubPayLoad } from '@/types/apiPayloadTypes';
import ThanksModal from '../common/ContactUs/ThanksModal';
import axios from 'axios';

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email()
    .matches(officialEmailDomainRegex, "Please enter your business email"),
  industry: Yup.string().required("Please select an industry"),
});

const NewsLetter = ({categoryList}:TFooter) => {
  const [open, setOpen] = React.useState(false);
    const {
      register,
      handleSubmit,
      control,
      formState: { errors, isSubmitting },
    } = useForm({
      resolver: yupResolver(schema),
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
    
  };

  return (
    <div className='bg-Primary-Mordor-Blue-Bg-100'>
    <div className='py-16 mx-auto max-w-8xl px-3 py-10 lg:p-10 flex flex-col md:flex-row justify-between items-center gap-[1rem] md:gap-[12rem]'>
      <div className='flex-1'>
      <h2 className='text-Display-Semibold-24 md:text-Display-Semibold-32 mb-4 text-left '>Subscribe to Our Newsletter and Stay Updated</h2>
      <div className=''>
        <p className='max-w-lg text-left mb-4'>
       Subscribe to get updates on new reports launches, Synapse tool and interesting insights
        </p>
      </div>
      </div>
      <form className="z-10 flex-1" onSubmit={handleSubmit(onSubmit)}>
           
              <section className="flex flex-col  bg-Primary-Mordor-Blue-Bg-50 p-4">
              <div className="flex flex-col gap-4 lg:items-center">
                <div className="flex flex-col w-full flex-col">
                  <label htmlFor="email" className="text-sm text-Neutrals-950 font-normal leading-5 mb-1">
                    Email Address
                  </label>
                    <input
                      type="email"
                      {...register("email")}
                      aria-label="email"
                      className="border-0.5 rounded-md md:rounded-none border border-Neutrals-300 p-3 placeholder:text-left placeholder:text-sm placeholder:font-normal placeholder:leading-5 w-full"
                      placeholder="Enter Email id"
                    />

                  <span className="min-h-4 text-xs text-red-500">
                    {errors.email && errors.email.message}
                  </span>
                </div>

                <div className="flex flex-col w-full">

                  <Controller
                    name="industry"
                    control={control}
                    render={({ field }) => (
                      <div className="relative flex w-full flex-col">
                        <label
                          htmlFor="industry"
                          className="text-sm text-Neutrals-950 font-normal leading-5 mb-1"
                        >
                          Select Industry
                        </label>
                        <select
                          {...field}
                          id="industry"
                          aria-label="Industry"
                          className="h-[50px] w-full appearance-none px-4 text-Neutrals-950 rounded-md md:rounded-none border border-Neutrals-300 bg-white"
                          defaultValue=""
                        >
                          <option hidden value="">
                            Industry
                          </option>
                          {categoryList?.length
                            ? categoryList.map(
                              (item: TCategoryListItem, index: number) => (
                                <option
                                  key={index}
                                  value={
                                    item.label
                                  }
                                >
                                  {item.label}
                                </option>
                              )
                            )
                            : ""}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 top-[1.4rem]">
                          <Image
                            src={ChevronDownBlack}
                            alt="down"
                            title='down'
                            height={24}
                            width={24}
                          />
                        </div>
                      </div>
                    )}
                  />

                  <span className="min-h-4 text-xs text-red-500">
                    {errors.industry && errors.industry.message}
                  </span>
                </div>


                <div className="flex flex-col w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center self-center bg-Primary-Mordor-Blue-Bg-950 px-4 text-white hover:bg-Primary-Blue-700 py-2 lg:py-2 w-full text-center">
                    {isSubmitting ? (
                      <Loader className="animate-spin" />
                    ) : (
                      <>
                        <ArrowUpRight size={20} className="text-white" />
                        Subscribe
                      </>
                    )}
                  </button>
                </div>
              </div>

             
              </section>
            
      </form>
    </div>
   {open && <ThanksModal
   message='Thank you for subscribing'
   subMessage='You’re In! You’ll get interesting updates from us every week'
   open={open} setOpen={setOpen} />}
    </div>
  )
}

export default NewsLetter

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};

type TFooter = {
  categoryList: TCategoryListItem[];
};