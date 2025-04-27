import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeatureSection from '../components/sections/FeatureSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import TimelineSection from '../components/sections/TimelineSection';
import WhyItMattersSection from '../components/sections/WhyItMattersSection';
import OfferingsSection from '../components/sections/OfferingsSection';
import CTASection from '../components/sections/CTASection';
import CountdownTimer from '../components/sections/CountdownTimer';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <CountdownTimer />
      <TimelineSection />
      <WhyItMattersSection />
      <OfferingsSection />
      <CTASection />
    </>
  );
};

export default Home;