import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageBanner from '../../components/section/about-us/page-banner/PageBanner';
import About from '../../components/section/about-us/about/About';
import Achivement from '../../components/section/about-us/achievement/Achivement';
import Team from '../../components/section/about-us/team/Team.jsx';
import Statistic from '../../components/section/about-us/statistic/Statistic';
import Testimonial from '../../components/section/about-us/testimonial/Testimonial';
import OurInfo from '../../components/section/about-us/our-info/OurInfo';

export default function AboutUs() {
  return (
    <div className='container mx-auto'>
      <Header />
      <div className='mt-24'>
        <PageBanner />
        <About />
        {/* <Achivement /> */}
        <Team />
        <Statistic />
        <Testimonial />
        <OurInfo />
        <Footer />
      </div>
    </div>
  );
}
