import React from 'react';
import {
  CourseItem,
  ImgWrap,
  CourseItemImg,
  CourseItemTitle,
} from './CourseCardElements';

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
