import React from 'react';
import "./globals.css";
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import OurService from '@/components/home/OurService';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurService />
    </div>
  )
}

export default Home
