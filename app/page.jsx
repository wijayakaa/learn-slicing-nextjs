import React from 'react';
import "./globals.css";
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import OurService from '@/components/home/OurService';
import LatestProject from '@/components/home/LatestProject';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurService />
      <LatestProject />
    </div>
  )
}

export default Home
