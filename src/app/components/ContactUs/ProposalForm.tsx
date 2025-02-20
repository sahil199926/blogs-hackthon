/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';
import React from 'react'
import * as Yup from "yup";
import { nameRegex, officialEmailDomainRegex } from '@/utils/regex';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader } from 'lucide-react';
import { Controller, useForm } from "react-hook-form";
import { countryList, geographyList, objectivesList, researchTopicsList, revenueList, timelineList } from '@/app/constants';
import DropdownComponent from './DropdownComponent';


// Define validation schema
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(nameRegex, "Name is invalid"),
  companyName: Yup.string()
    .required("Company name is required")
    .matches(nameRegex, "Company name is invalid"),
  jobTitle: Yup.string()
    .required("Job title is required")
    .matches(nameRegex, "Job title is invalid"),
  businessEmail: Yup.string().required("Email is required").matches(officialEmailDomainRegex, "Please enter your business email"),
  country: Yup.string().required("Country is required"),
  revenue: Yup.string().required("Revenue is required"),
  message: Yup.string().required("Message is required"),
  timeline: Yup.string().required("Timeline is required"),
  objectives: Yup.string().required("Objective is required"),
  research: Yup.string().required("Research is required"),
  geography: Yup.string().required("Geography is required"),
  attachment: Yup
    .mixed<FileList>()
    .test("fileSize", "File size must not exceed 2MB", (value) => {
      if (!value?.[0]) return true; // Optional field
      return value[0].size <= 2 * 1024 * 1024; // 2MB in bytes
    })
    .test("fileType", "Only images and PDFs are allowed", (value) => {
      if (!value?.[0]) return true; // Optional field
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      return allowedTypes.includes(value[0].type);
    }),

});
interface FormValues {
  name: string;
  message: string;
  businessEmail: string;
  companyName: string;
  jobTitle: string;
  country: string;
  revenue: string;
  timeline: string;
  objectives: string;
  research: string;
  geography: string;
  attachment?:  FileList | null; // Define the expected type of the file field
}
const Proposal = () => {


  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    control,
    watch,
  } = useForm<FormValues>({
    
    resolver: yupResolver(schema), // Centralized validation rules
  });
  const fileInputs=watch('attachment')



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
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-5 ">
  <div className="flex flex-1 flex-col gap-2">
    <input
      type="text"
      {...register("companyName")}
      placeholder="Enter your company name"
      className="border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400 w-full"
    />
    {errors.companyName && (
      <span className="text-[12px] text-red-500">
        {errors.companyName.message}
      </span>
    )}
  </div>

  <div className="flex flex-1 flex-col gap-2">
    <input
      type="text"
      {...register("jobTitle")}
      placeholder="Enter your job title"
      className="border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400 w-full"
    />
    {errors.jobTitle && (
      <span className="text-[12px] text-red-500">
        {errors.jobTitle.message}
      </span>
    )}
  </div>

  <div className="flex flex-1 flex-col gap-2">
    <input
      type="email"
      {...register("businessEmail")}
      placeholder="Enter your business email"
      className="border-[0.5px] border-Neutrals-500 p-4 text-sm placeholder:text-Body-Regular-14 placeholder:text-Neutrals-400 w-full"
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
            render={({ field }) => (
              <DropdownComponent field={field} id={"country"} placeholder={"Country"} list={countryList} />
            )}
          />
          {errors.country && (
            <span className="text-[12px] text-red-500">
              {errors.country.message}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <Controller
            name="revenue"
            control={control}
            render={({ field }) => (
              <DropdownComponent field={field} id={"revenue"} placeholder={"Do you have a budget in mind?"} list={revenueList} />
            )}
          />
          {errors.revenue && (
            <span className="text-[12px] text-red-500">
              {errors.revenue.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-5">
        <div className="flex flex-1 flex-col gap-2">
          <Controller
            name="research"
            control={control}
            render={({ field }) => (
              <DropdownComponent field={field} id={"research"} placeholder={"What type of research are you looking for? "} list={researchTopicsList} />
            )}
          />
          {errors.research && (
            <span className="text-[12px] text-red-500">
              {errors.research.message}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <Controller
            name="geography"
            control={control}
            render={({ field }) => (
              <DropdownComponent field={field} id={"geography"} placeholder={"What is the geographical focus of your research?"} list={geographyList} />
            )}
          />
          {errors.geography && (
            <span className="text-[12px] text-red-500">
              {errors.geography.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-5">
        <div className="flex flex-1 flex-col gap-2">
          <Controller
            name="timeline"
            control={control}
            render={({ field }) => (
              <DropdownComponent field={field} id={"timeline"} placeholder={"Do you have a timeline in mind?"} list={timelineList} />
            )}
          />
          {errors.timeline && (
            <span className="text-[12px] text-red-500">
              {errors.timeline.message}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <Controller
            name="objectives"
            control={control}
            render={({ field }) => (
              <DropdownComponent field={field} id={"objectices"} placeholder={"What is your primary objective for this research?"} list={objectivesList} />
            )}
          />
          {errors.objectives && (
            <span className="text-[12px] text-red-500">
              {errors.objectives.message}
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

        {/* // Attachment sec */}
            <div id="attachment-section text-[16px] leading-[24px] " className="flex flex-col gap-2">
              <label
                htmlFor="attachment"
                className="text-[16px] leading-[24px] text-Primary-Blue-950 cursor-pointer underline"
                // onClick={() => document.getElementById('attachment')?.click()}
              >
                Add Attachment
              </label>
              
              <input
                type="file"
                id="attachment"
                {...register("attachment")}
                className="hidden"
              />
              {/* // Display Upload file name */}
              {
                fileInputs && fileInputs?.length>0 && (
                  <span className="text-[12px] text-Neutrals-800">
                    {fileInputs?.[0]?.name}
                  </span>
                )
              }

              {fileInputs && fileInputs?.length>0 && errors.attachment && (
                <span className="text-[12px] text-red-500">
                  {errors.attachment.message}
                </span>
              )}
              <p className="text-sm text-red-600 mt-1">Maximum size: 2 MB</p>
            </div>

            <button
              type="submit"
              className="flex h-[46px] w-full md:w-36 items-center justify-center  bg-Primary-Blue-950 p-2 text-white">
              {isLoading ? (
                <Loader className="animate-spin" />
              ) : (
                <div className="flex items-center">
                    {'Submit Request'}
                </div>
              )}
            </button>
    </form>
  )
}

export default Proposal