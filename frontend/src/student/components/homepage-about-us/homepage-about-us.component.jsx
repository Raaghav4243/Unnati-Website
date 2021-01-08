import React from 'react';
import {
  AboutCardOne,
  AboutCardTwo,
  AboutCardThree,
  AboutCardFour,
  AboutCardFive,
  AboutCardSix,
} from './data';

import {
  AboutUsContainer,
  AboutTitleContainer,
  AboutTitle,
  AboutInfoWrapper,
} from './homepage-about-us.styles';

import AboutUsCard from './homepage-about-us-card.component';

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer id='about'>
        <AboutTitleContainer>
          <AboutTitle>ABOUT US</AboutTitle>
        </AboutTitleContainer>

        <AboutInfoWrapper>
          <AboutUsCard {...AboutCardOne} />
          <AboutUsCard {...AboutCardTwo} />
          <AboutUsCard {...AboutCardThree} />
          <AboutUsCard {...AboutCardFour} />
          <AboutUsCard {...AboutCardFive} />
          <AboutUsCard {...AboutCardSix} />
        </AboutInfoWrapper>
      </AboutUsContainer>
    </>
  );
};

export default AboutUs;
