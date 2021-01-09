import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  CourseItem,
  ImgWrap,
  CourseItemImg,
  CourseItemTitle,
} from './homepage-our-courses-card.styles';

const CourseCard = ({ img, alt, title, history, match }) => {
  return (
    <CourseItem
      onClick={() => {
        // set current course overview id
        history.push(`${match.path}discover`);
      }}
    >
      <ImgWrap>
        <CourseItemImg src={img} alt={alt}></CourseItemImg>
      </ImgWrap>
      <CourseItemTitle>{title}</CourseItemTitle>
    </CourseItem>
  );
};

export default withRouter(CourseCard);
