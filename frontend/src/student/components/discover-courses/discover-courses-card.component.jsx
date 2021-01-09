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

const DiscoverCourseCard = ({ courseName, courseId, history, match }) => {
  return (
    <CardWrapper>
      <CardTitle>
        <LogoWrapper>
          {/* <img src={MicrosoftLogo}  /> */}
          <MSExcelLogo style={{ height: '100%', width: '100%' }} />
        </LogoWrapper>
        <TitleWrapper>
          <Title>{courseName}</Title>
        </TitleWrapper>
      </CardTitle>
      <ButtonWrapper>
        <ExploreButton
          onClick={() => {
            // setCurrentCourse(courseId);
            console.log('DISPATCH ACTION TO SET CURRENT OVERVIEW COURSE');
            history.push(`student/discover`);
          }}
        >
          Explore More
        </ExploreButton>
      </ButtonWrapper>
    </CardWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  //   setCurrentCourse: (course_id) => dispatch(setCurrentCourse(course_id)),
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(DiscoverCourseCard));
