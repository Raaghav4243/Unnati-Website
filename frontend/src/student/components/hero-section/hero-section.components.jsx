//libraries used
import React, { useState } from 'react';

//redux used

//components used
import HeroButton from '../hero-button/hero-button.component';
import Video from '../../videos/video.mp4';
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
        <HeroH1>Project Unnati</HeroH1>
        <HeroP>Upskilling the underprivileged.</HeroP>
        <HeroBtnWrapper>
          <HeroButton
            to='/signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='false'
            dark='false'
            background_color='#F8971D'
            background_color_on_hover='transparent'
            color='#000'
            color_on_hover='#F8971D'
            border_on_hover='0.5px solid #F8971D'
          >
            Get Started
            {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
