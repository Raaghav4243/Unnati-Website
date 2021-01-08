import React from 'react';
import {
  CourseItem,
  ImgWrap,
  CourseItemImg,
  CourseItemTitle,
} from './homepage-our-courses-card.styles';

const CourseCard = ({ img, alt, title }) => {
  return (
    <CourseItem>
      <ImgWrap>
        <CourseItemImg src={img} alt={alt}></CourseItemImg>
      </ImgWrap>
      <CourseItemTitle>{title}</CourseItemTitle>
    </CourseItem>
  );
};

export default CourseCard;
