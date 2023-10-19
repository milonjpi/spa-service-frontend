'use client';

import AboutUs from './AboutUs';
import AvailableService from './AvailableService';
import ClientReview from './ClientReview';
import EventCategories from './EventCategories';
import HeroSection from './HeroSection';
import LatestNews from './LatestNews';
import OurGallery from './OurGallery';
import Overview from './Overview';
import UpcomingService from './UpcomingService';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <AvailableService />
      <UpcomingService />
      <EventCategories />
      <Overview />
      <ClientReview />
      <LatestNews />
      <OurGallery />
    </>
  );
};

export default HomePage;
