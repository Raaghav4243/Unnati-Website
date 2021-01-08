import React from 'react';
import { connect } from 'react-redux';

//components used
import { ReactComponent as UnnatiLogo } from '../../icons/UnnatiTree.svg';

import {
  CardContainer,
  CourseLogo,
  CourseName,
} from './courses-offered-card.styles';

const OurCourseCard = ({ courseId, courseName, courseSummary }) => {
  return (
    <>
      <CardContainer>
        <CourseLogo>
          <UnnatiLogo />
        </CourseLogo>
        <CourseName>{courseName}</CourseName>
      </CardContainer>
    </>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   setCourseForOverview: (courseId) => dispatch(setCourseForOverview(courseId)),
// });

export default OurCourseCard;
