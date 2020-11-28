import React from "react";
import {
  AboutCardOne,
  AboutCardTwo,
  AboutCardThree,
  AboutCardFour,
  AboutCardFive,
  AboutCardSix,
} from "./data";

import {
  AboutUsContainer,
  AboutTitleContainer,
  AboutTitle,
  AboutInfoWrapper,
} from "./AboutElements";

import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer id="about">
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
