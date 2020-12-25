//libraries used
import React, { useState } from 'react';

//redux used

//components used
import HeroButton from '../hero-button/hero-button.component';
import Video from '../../videos/video.mp4';
import { FaChevronRight, FaArrowRight } from 'react-icons/fa';
//styles used

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './hero-section.styles';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> Project Unnati</HeroH1>
        <HeroP>Upskilling the underprivileged.</HeroP>
        <HeroBtnWrapper>
          <HeroButton
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='false'
            dark='false'
            backgroundColor='#F8971D'
            backgroundColorOnHover='transparent'
            color='#000'
            colorOnHover='#F8971D'
            borderOnHover='1px solid #F8971D'
          >
            Get Started
            {/* <div style={{ marginTop: '6.5px' }}>
              {hover ? <ArrowForward /> : <ArrowRight />}{' '}
            </div> */}
            {hover ? <FaArrowRight /> : <FaChevronRight />}
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
