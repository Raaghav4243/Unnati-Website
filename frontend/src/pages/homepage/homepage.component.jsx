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

        <div style={{ height: '4000px', backgroundColor: 'red' }}></div>
      </>
    );
  }
}

export default HomePage;
