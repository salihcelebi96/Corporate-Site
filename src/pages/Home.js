import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Hero from "../components/Hero"
import View from "../components/View"
import Whyus from '../components/whyus';
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <Hero/>
      <View/>
      <Whyus/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default Home;
