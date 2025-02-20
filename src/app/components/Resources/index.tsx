import {   IEvent, IFeatured,  INewsSection, IResourceFeaturedArticleSection, IResourceMobileHeader, IResourcesMobileTrending,  ISynapseAction,  ITrending,  ResourcesMobilePageProps } from '@/types'
import React from 'react'
import Trending from './Trending'
import BannerSection from './BannerSection';
import UpcomingEventsCarousel from './UpcomingEventsCarousel';
import FeaturedCarousel from './FeaturedCarousel/FeaturedCarousel';
import NewsSection from '../HomePage/NewsSection';
import TrendingCLAP from '../HomePage/Trending';
import NewsLetter from './NewsLetterSection';
import FeaturedArticle from './FeatureArticle';
import SynapseInAction from '../SynapseLandingPage/SynapseInAction';

const ResourcesMobile = ({data}:ResourcesMobilePageProps) => {
    //Assuming `data` is the object containing the `ResourcesMobile` data
  const headingData:IResourceMobileHeader = data.header as IResourceMobileHeader;
  const trending:ITrending= data.trendingSmallSec as ITrending;
  const trendingData:IResourcesMobileTrending = data.trending as IResourcesMobileTrending;
  const featuredData:IFeatured = data.featured as IFeatured;
  const newsSection: INewsSection = data.newsSection as INewsSection;
  const eventsData:IEvent[] = data.upcomingEventsCarousel as IEvent[];
  const categoryList: TCategoryListItem[]=data.categoryList as TCategoryListItem[];
  const featuredArticle: IResourceFeaturedArticleSection = data.featuredArticle as IResourceFeaturedArticleSection;
    const synapseAction: ISynapseAction = data.synapseAction as ISynapseAction;
  

  return (
    <>
    <BannerSection
      heading={headingData.title}
      desc={headingData.desc}
      headerImage={headingData.headerImage}
    />
    <TrendingCLAP trending={trending} />
    <FeaturedArticle featuredArticle={featuredArticle} />
    <Trending
      title={trendingData.title}
      trendingBlogData={trendingData.trendingBlogData}
    />
    <NewsSection newsSection={newsSection} />

    <FeaturedCarousel
      title={featuredData.title}
      featuredStudies={featuredData.featuredStudies}
    />
     <SynapseInAction synapseAction={synapseAction}
     dotbgClass='hidden' 
     />
    <UpcomingEventsCarousel
    events={eventsData}
    />
    <NewsLetter
    categoryList={categoryList}
    />
    
    </>
  )
}

export default ResourcesMobile

export type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};