import React from 'react';
import {
  Box,
  ConfirmChanges,
  EnrolledCourseDetails,
  EnrolledCourseImg,
  EnrolledCourseName,
  MainCard,
} from './DiscoverCard.styles';
import MicrosoftLogo from '../../assets/MicrosoftLogo.png';
function DiscoverCard(props) {
  const { course_name } = props;
  return (
    <MainCard>
      <EnrolledCourseDetails>
        <EnrolledCourseImg src={MicrosoftLogo} />
        <EnrolledCourseName>{course_name}</EnrolledCourseName>
      </EnrolledCourseDetails>
      <ConfirmChanges>Explore More</ConfirmChanges>
    </MainCard>
  );
}

export default DiscoverCard;
