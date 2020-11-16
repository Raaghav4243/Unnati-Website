import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar_New';
import AboutUs from '../components/AboutUs';
import Courses from '../components/Courses';
import HomeSignUp from '../components/HomeSignUp';
// import { HomeSection_try } from '../components/HomeSection';
// import { Slick_Carousel_One } from '../components/Slick_Carousel';
// import Testimonials from '../components/Testimonials_New';
import HeroSection from '../components/HeroSection';
import Testimonial from '../components/Testimonials';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <AboutUs />
      <Courses />
      <Testimonial />
      <HomeSignUp />
      <Footer />
    </>
  );
};

export default Home;
