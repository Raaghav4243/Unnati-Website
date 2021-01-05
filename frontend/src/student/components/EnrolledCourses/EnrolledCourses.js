import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  EnrolledCourseCard,
  EnrolledCourseDetails,
  EnrolledCourseImg,
  EnrolledCourseName,
  EnrolledCoursePercentage,
  EnrolledCoursePercentageInner,
  EnrolledCoursePercentageOuter,
  Resume,
  ResumeButton,
} from './Enrolled.Course.styles';
import MicrosoftLogo from '../../assets/MicrosoftLogo.png';
import { setCurrentCourse } from '../../redux/student/student.actions';

const Card = (props) => {
  const {
    course_percentage,
    course_name,
    course_id,
    setCurrentCourse,
    history,
    match,
  } = props;
  return (
    <>
      <EnrolledCourseCard
        onClick={() => {
          setCurrentCourse(course_id);
          history.push(`${match.path}/course`);
        }}
      >
        <EnrolledCourseDetails>
          <EnrolledCourseImg src={MicrosoftLogo} />
          <EnrolledCourseName>{course_name}</EnrolledCourseName>
        </EnrolledCourseDetails>
        <EnrolledCoursePercentageOuter>
          <EnrolledCoursePercentageInner />
        </EnrolledCoursePercentageOuter>
        <Resume>
          <EnrolledCoursePercentage course_percentage={course_percentage}>
            {course_percentage}%
          </EnrolledCoursePercentage>
          <ResumeButton>Resume</ResumeButton>
        </Resume>
      </EnrolledCourseCard>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCourse: (course_id) => dispatch(setCurrentCourse(course_id)),
});

export default connect(null, mapDispatchToProps)(withRouter(Card));
