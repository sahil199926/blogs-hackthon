'use client';
import React from 'react'
import * as Yup from "yup";
import { nameRegex, officialEmailDomainRegex, phoneRegex } from '@/utils/regex';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowUpRight, Loader } from 'lucide-react';
import { Controller, useForm } from "react-hook-form";
import { countryList } from '@/app/constants';
import DropdownComponent from './DropdownComponent';

// Define validation schema
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(nameRegex, "Name is invalid"),
  businessEmail: Yup.string().required("Email is required").matches(officialEmailDomainRegex, "Please enter your business email"),
  phone: Yup.string().matches(phoneRegex, "Phone number is invalid"),
  country: Yup.string()
    .required("Country is required"),
  message: Yup.string().required("Message is required"),
});
interface FormValues {
  country: string;
  name: string;
  phone?: string;
  message: string;
  businessEmail: string;
}
const ContactUsForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    // reset,
    control
  } = useForm<FormValues>({
    resolver: yupResolver(schema), // Centralized validation rules
    defaultValues: {

    }
  });


  const onSubmit = (
    // data: FormValues
  ) => {

  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="z-10 flex w-full flex-col gap-5 p-4 md:p-8 lg:mr-10">
      <div className="flex flex-col gap-4 md:flex-row md:gap-5">
        <div className="flex flex-1 flex-col gap-2">
          <input
            type="text"
            {...register("name")}
            placeholder="Enter your full name"
            className="border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400"
          />
          {errors.name && (
            <span className="text-[12px] text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2">

          <input
            type="email"
            {...register("businessEmail")}
            placeholder="Business Email"
            className="w-full  border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400"
          />
          {errors.businessEmail && (
            <span className="text-[12px] text-red-500">
              {errors.businessEmail.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-5">
        <div className="flex flex-1 flex-col gap-2">
          <Controller
            name="country"
            control={control}
            render={({ field }) => (<DropdownComponent field={field} id="country" placeholder='Country' list={countryList} />)}
          />
          {errors.country && (
            <span className="text-[12px] text-red-500">
              {errors.country.message}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2">

          <input
            type="number"
            {...register("phone")}
            onKeyDown={(e) => {
              const allowedKeys =
                /^[0-9]$|Backspace|ArrowLeft|ArrowRight|Delete|Tab/;
              if (!allowedKeys.test(e.key)) {
                e.preventDefault();
              }
            }}
            placeholder="Phone number"
            className="w-full  border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400"
          />
          {errors.phone && (
            <span className="text-[12px] text-red-500">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          {...register("message")}
          placeholder="How can we help you?"
          className="resize-none  border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400"
          rows={6}
        />
        {errors.message && (
          <span className="text-[12px] text-red-500">
            {errors.message.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="flex h-[46px] w-full md:w-36 items-center justify-center  bg-Primary-Blue-950 p-2 text-white">
        {isLoading ? (
          <Loader className="animate-spin" />
        ) : (
          <div className="flex items-center">
            <ArrowUpRight size={24} className="text-white" />
            {'Let\'s Talk'}
          </div>
        )}
      </button>
    </form>
  )
}

export default ContactUsForm
