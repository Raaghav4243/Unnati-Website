import React from 'react';
import {
  AboutItem,
  ImgWrap,
  AboutItemImg,
  AboutItemTitle,
  AboutItemInfo,
} from './AboutUsCardElements';

const AboutUsCard = ({ img, alt, title, info }) => {
  return (
    <AboutItem>
      <ImgWrap>
        <AboutItemImg src={img} alt={alt}></AboutItemImg>
      </ImgWrap>
      <AboutItemTitle>{title}</AboutItemTitle>
      <AboutItemInfo>{info}</AboutItemInfo>
    </AboutItem>
  );
};

export default AboutUsCard;
