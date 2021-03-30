import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllCourses } from '../../redux/allCourses/all-courses.selectors';

//components used
import OurCourseCard from '../courses-offered-card/courses-offered-card.component';

import { Container, Title, CardsWrapper } from './courses-offered.styles';

const OurCourses = ({ allCourses }) => {
  return (
    <>
      {/* {console.log('ALL COURSES INSIDE OUR COURSES IS:', allCourses)} */}
      <Container>
        <Title>Our Courses</Title>
        <CardsWrapper>
          {allCourses
            ? allCourses.map((course, index) => (
                <OurCourseCard
                  courseId={course._id}
                  courseName={course.courseName}
                  courseSummary={'jkwhjkfwhkjfh'}
                />
              ))
            : null}
        </CardsWrapper>
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  allCourses: selectAllCourses,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchAssignmentStart: ({ user_id, course_id, assignment_id }) =>
//     dispatch(fetchAssignmentStart({ user_id, course_id, assignment_id })),

//   submitAssignmentStart: (data) => dispatch(submitAssignmentStart(data)),
// });

export default connect(mapStateToProps)(OurCourses);
