import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as CourseLogo } from '../../icons/enrolled-course.svg';
import { setCurrentCourse } from '../../redux/student/student.actions';

import {
  CardWrapper,
  CardTitle,
  LogoWrapper,
  TitleWrapper,
  Title,
  ProgressWrapper,
  ProgressBarOuterWrapper,
  ProgressBarInnerWrapper,
  BottomContainer,
  Percentage,
  ButtonWrapper,
  ResumeButton,
} from './enrolled-course-card.styles';

const EnrolledCourseCard = ({
  courseName,
  PercentageStatus,
  courseId,
  setCurrentCourse,
  history,
  match,
}) => {
  return (
    <CardWrapper>
      <CardTitle>
        <LogoWrapper>
          {/* <img src={MicrosoftLogo}  /> */}
          <CourseLogo style={{ height: '100%', width: '100%' }} />
        </LogoWrapper>
        <TitleWrapper>
          <Title>{courseName}</Title>
        </TitleWrapper>
      </CardTitle>
      <ProgressWrapper>
        <ProgressBarOuterWrapper>
          <ProgressBarInnerWrapper
            PercentageStatus={`${PercentageStatus}%`}
            // PercentageStatus='33%'
          ></ProgressBarInnerWrapper>
        </ProgressBarOuterWrapper>
      </ProgressWrapper>
      <BottomContainer>
        <Percentage>{PercentageStatus}%</Percentage>
        <ButtonWrapper>
          <ResumeButton
            onClick={() => {
              setCurrentCourse(courseId);
              history.push(`/student/course`);
            }}
          >
            Resume
          </ResumeButton>
        </ButtonWrapper>
      </BottomContainer>
    </CardWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCourse: (course_id) => dispatch(setCurrentCourse(course_id)),
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(EnrolledCourseCard));
