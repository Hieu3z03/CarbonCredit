import React from 'react';
import Header from '../../components/header/header';
import Section from '../../components/section/home/section';
import Footer from '../../components/footer/footer';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}
