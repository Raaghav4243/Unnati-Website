import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllCourses } from '../../redux/allCourses/all-courses.selectors';
import { selectUserEnrolledCoursesIdMap } from '../../redux/student/student.selectors';

import DiscoverCourseCard from './discover-courses-card.component';

import {
  Container,
  Title,
  DiscoverCoursesCardWrapper,
} from './discover-courses.styles';

class StudentDiscoverCourses extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { allCourses, enrolled_courses_id_map } = this.props;
    return (
      <>
        <Container>
          <Title>Discover More Courses</Title>
          <DiscoverCoursesCardWrapper>
            {allCourses && enrolled_courses_id_map
              ? allCourses.map((course) => {
                  return (
                    <DiscoverCourseCard
                      courseId={course._id}
                      courseName={course.courseName}
                      enrolled={
                        enrolled_courses_id_map[course._id] ? true : false
                      }
                    />
                  );
                })
              : 'Discovering...'}
            {/* <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} /> */}
          </DiscoverCoursesCardWrapper>
        </Container>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  enrolled_courses_id_map: selectUserEnrolledCoursesIdMap,
  allCourses: selectAllCourses,
});

export default connect(mapStateToProps)(StudentDiscoverCourses);
