import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as DiscoverLogo } from '../../icons/discover-course.svg';
// import { setCurrentCourse } from '../../redux/student/student.actions';

import {
  CardWrapper,
  CardTitle,
  LogoWrapper,
  TitleWrapper,
  Title,
  ButtonWrapper,
  ExploreButton,
} from './discover-courses-card.styles';
import { setCurrentCourseForOverview } from '../../redux/course-overview/course-overview.actions';

const DiscoverCourseCard = ({
  courseName,
  courseId,
  enrolled,
  setCurrentCourseForOverview,
  history,
  match,
}) => {
  return (
    <CardWrapper>
      <CardTitle>
        <LogoWrapper>
          {/* <img src={MicrosoftLogo}  /> */}
          <DiscoverLogo style={{ height: '100%', width: '100%' }} />
        </LogoWrapper>
        <TitleWrapper>
          <Title>{courseName}</Title>
        </TitleWrapper>
      </CardTitle>
      <ButtonWrapper>
        <ExploreButton
          onClick={() => {
            // setCurrentCourse(courseId);
            // console.log('DISPATCHING ACTION TO SET CURRENT OVERVIEW COURSE');
            setCurrentCourseForOverview(courseId);
            // console.log(history);
            // console.log('COURSE ID', courseId);
            history.push(`/student/discover`);
            // <Redirect to='/student/discover' />;
          }}
        >
          {enrolled ? 'Purchased!' : 'Explore More'}
        </ExploreButton>
      </ButtonWrapper>
    </CardWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  //   setCurrentCourse: (course_id) => dispatch(setCurrentCourse(course_id)),
  setCurrentCourseForOverview: (courseId) =>
    dispatch(setCurrentCourseForOverview(courseId)),
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(DiscoverCourseCard));
