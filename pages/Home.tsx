
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Doctors from '../components/Doctors';
import Articles from '../components/Articles';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Doctors />
      <Articles />
      <About />
      <Testimonials />
    </>
  );
};

export default Home;
