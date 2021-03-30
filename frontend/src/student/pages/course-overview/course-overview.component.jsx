//libraries used
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux used

//components used
import CourseOverviewHeaderContainer from '../../components/course-overview-header/course-overview-header.container';
import CourseSummaryContainer from '../../components/course-summary/course-summary.container';
import StudentNavbar from '../../components/student-dashboard-navbar/student-dashboard-navbar.component';

import CourseMediaContainer from '../../components/course-media/course-media.container';

// styles used
import {
  CourseOverviewWrapper,
  CourseLowerContainer,
  CourseLowerWrapper,
} from './course-overview.styles';
import {
  selectCurrentCourseOverviewAvailableAt,
  selectCurrentCourseOverviewId,
  selectCurrentCourseOverviewName,
  selectCurrentCourseOverviewPrice,
  selectCurrentCourseOverviewSummary,
} from '../../redux/course-overview/course-overview.selectors';
import CourseNavbar from '../../components/course-navbar/course-navbar.component';
import { selectUserCafeName } from '../../redux/cafe/cafe.selectors';

class CourseOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course_details: {
        course_name: 'Basic to Advanced Level Course for Microsoft Excel',
        course_fees: 100,
        course_available_at: ['Delhi', 'Rajasthan'],
        course_summary:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        course_image:
          'https://elearningindustry.com/wp-content/uploads/2019/07/top-6-eLearning-trends-of-2019.jpg',
      },
    };
  }

  render() {
    const { course_image } = this.state.course_details;
    const {
      courseName,
      courseSummary,
      coursePrice,
      forHome,
      forUser,
      courseAvailableAt,
      cafeName,
    } = this.props;
    return (
      <>
        {forHome ? <StudentNavbar /> : null}
        {forUser ? <CourseNavbar /> : null}
        <CourseOverviewWrapper>
          <CourseOverviewHeaderContainer
            name={courseName}
            fees={coursePrice}
            availableAt={courseAvailableAt}
            forUser={forUser ? forUser : null}
            cafeName={forUser ? cafeName : null}
          />
          <CourseLowerContainer>
            <CourseLowerWrapper>
              <CourseSummaryContainer summary={courseSummary} />
              <CourseMediaContainer src={course_image} alt={'course-image'} />
            </CourseLowerWrapper>
          </CourseLowerContainer>
        </CourseOverviewWrapper>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  courseId: selectCurrentCourseOverviewId,
  courseName: selectCurrentCourseOverviewName,
  courseSummary: selectCurrentCourseOverviewSummary,
  coursePrice: selectCurrentCourseOverviewPrice,
  courseAvailableAt: selectCurrentCourseOverviewAvailableAt,
  cafeName: selectUserCafeName,
});

export default connect(mapStateToProps)(CourseOverview);
