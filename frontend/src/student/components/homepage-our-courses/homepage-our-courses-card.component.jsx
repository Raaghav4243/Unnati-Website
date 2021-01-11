import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentCourseForOverview } from '../../redux/course-overview/course-overview.actions';
import {
  CourseItem,
  ImgWrap,
  CourseItemImg,
  CourseItemTitle,
} from './homepage-our-courses-card.styles';

const CourseCard = ({
  img,
  alt,
  title,
  history,
  match,
  courseId,
  setCurrentCourseForOverview,
}) => {
  return (
    <CourseItem
      onClick={() => {
        // set current course overview id
        console.log('DISPATCHING ACTION TO SET CURRENT OVERVIEW COURSE');
        setCurrentCourseForOverview(courseId);
        console.log(history);
        console.log('COURSE ID', courseId);
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

// export default withRouter(CourseCard);

const mapDispatchToProps = (dispatch) => ({
  //   setCurrentCourse: (course_id) => dispatch(setCurrentCourse(course_id)),
  setCurrentCourseForOverview: (courseId) =>
    dispatch(setCurrentCourseForOverview(courseId)),
});

export default connect(null, mapDispatchToProps)(withRouter(CourseCard));
