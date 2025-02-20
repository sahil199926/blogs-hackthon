import axios from "axios";
const baseURl = process.env.NEXT_PUBLIC_APP_BASE_URL;

export const getHomePageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/homepage`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getHeaderFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/header`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getSiteMapUrlsApi = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/sitemap`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
    return [{ slug: "error" }];
  }
};

export const getTeamPageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/teampage`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getAboutPageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/aboutuspage`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getResourcePageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/resourcepage`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getPartnersPageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/partnerspage`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getJobsListPageFromDb = async (searchParams: {
  [key: string]: string;
}) => {
  try {
    const queryString = new URLSearchParams(searchParams).toString();
    const response = await axios.get(
      `${baseURl}/public/joblist${queryString ? "/?" + queryString : ""}`
    );
    return { jobsList: response.data.data };
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getIndustriesOverviewPageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/industries`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getMediaPageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/media`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getAwardsPageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/awardspage`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getCustomResearchPageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/customresearchpage`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getIndustryDetailsPageFromDb = async (slug: string) => {
  try {
    const response = await axios.get(`${baseURl}/public/industries/${slug}`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getClientsPageFromDb = async () => {
  try {
    const response = await axios.get(`${baseURl}/public/clientspage`);
    return response.data.data;
  } catch (error) {
    console.error("error -->", error);
  }
};
