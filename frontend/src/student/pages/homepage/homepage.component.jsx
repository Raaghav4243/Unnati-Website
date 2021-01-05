//libraries used
import React, { useState } from 'react';

//redux used

//components used
import HomePageNavbar from '../../components/homepage-navbar/homepage-navbar.component';
import HeroSection from '../../components/hero-section/hero-section.components';
//styles used

class HomePage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <HomePageNavbar />
        <HeroSection />

        <div style={{ height: '2000px', backgroundColor: 'red' }} id='courses'>
          COURSES OFFERED
        </div>
        <div style={{ height: '2000px', backgroundColor: 'blue' }} id='about'>
          ABOUT US
        </div>
        <div
          style={{ height: '2000px', backgroundColor: 'yellow' }}
          id='testimonials'
        >
          STUDENT STORIES
        </div>
        <div
          style={{ height: '2000px', backgroundColor: 'green' }}
          id='signupsection'
        >
          SIGN UP NOW!
        </div>
      </>
    );
  }
}

export default HomePage;
