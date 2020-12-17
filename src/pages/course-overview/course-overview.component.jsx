import React from 'react';
import CourseOverviewHeader from '../../components/course-overview-header/course-overview-header.component';
import CourseSummary from '../../components/course-summary/course-summary.component';

import { CourseOverviewPage } from './course-overview.styles';

class CourseOverview extends React.Component {
  constructor() {
    super();

    this.state = {
      course_details: {
        course_name: 'Basic to Advanced Level Course for MS EXCEL',
        course_fees: 100,
        course_available_at: ['Delhi', 'Rajasthan'],
        course_summary:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        course_image: 'image',
      },
    };
  }

  render() {
    const {
      course_name,
      course_fees,
      course_available_at,
      course_summary,
      course_image,
    } = this.state.course_details;
    console.log(this.state.course_details);
    return (
      <CourseOverviewPage>
        <CourseOverviewHeader name={course_name} fees={course_fees} />
        <CourseSummary summary={course_summary} />
      </CourseOverviewPage>
    );
  }
}

export default CourseOverview;
