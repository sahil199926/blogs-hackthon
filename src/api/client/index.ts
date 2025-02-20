"use client";
// import API from "../network/api";
import axios from "axios";
import {
  IContactUsPayLoad,
  INewsSubPayLoad,
  INewSubscriberPayLoad,
} from "@/types/apiPayloadTypes";
const CurrentWebSiteURl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const ContactUsApi = async (
  payload: IContactUsPayLoad | INewSubscriberPayLoad | INewsSubPayLoad,
  onSuccess: () => void,
  onFail: () => void
) => {
  try {
    await axios.post(`${CurrentWebSiteURl}/api/leads`, payload);
    onSuccess();
    return;
  } catch (error: unknown) {
    onFail();
    alert("something went wrong please try again");
    console.error("error -->", error);
    throw error;
  }
};
