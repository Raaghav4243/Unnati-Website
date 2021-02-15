import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as MSExcelLogo } from '../../icons/excel.svg';
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
  history
}) => {
  return (
    <CardWrapper>
      <CardTitle>
        <LogoWrapper>
          <MSExcelLogo style={{ height: '100%', width: '100%' }} />
        </LogoWrapper>
        <TitleWrapper>
          <Title>{courseName}</Title>
        </TitleWrapper>
      </CardTitle>
      <ButtonWrapper>
        <ExploreButton
          onClick={() => {
            setCurrentCourseForOverview(courseId);
            history.push(`/student/discover`);
          }}
        >
          {enrolled ? 'Already Purchased!' : 'Explore More'}
        </ExploreButton>
      </ButtonWrapper>
    </CardWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCourseForOverview: (courseId) =>
    dispatch(setCurrentCourseForOverview(courseId)),
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(DiscoverCourseCard));
