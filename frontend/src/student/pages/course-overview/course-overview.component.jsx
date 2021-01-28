//libraries used
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux used

//components used
import CourseOverviewHeader from '../../components/course-overview-header/course-overview-header.component';
import CourseSummary from '../../components/course-summary/course-summary.component';
import StudentNavbar from '../../components/student-dashboard-navbar/student-dashboard-navbar.component';

import CourseMedia from '../../components/course-media/course-media.component';

// styles used
import {
  CourseOverviewWrapper,
  CourseLowerContainer,
  CourseLowerWrapper,
} from './course-overview.styles';
import { fetchCourseForOverviewStart } from '../../redux/course-overview/course-overview.actions';
import {
  selectCurrentCourseOverviewId,
  selectCurrentCourseOverviewName,
  selectCurrentCourseOverviewPrice,
  selectCurrentCourseOverviewSummary,
} from '../../redux/course-overview/course-overview.selectors';
import CourseNavbar from '../../components/course-navbar/course-navbar.component';

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
          'https://s3-alpha-sig.figma.com/img/b0d3/4f4c/a6560cd50fe0c28793710c7c9abdf456?Expires=1611532800&Signature=QQ1Hdt6PxFn0sFtyAO94u-3vqeCJATHWXqjNl~MF4jlVTBaRcpjaWAMqYXsU9974uVyEi-6~fCHALFPHGnCgkV8Sviw9SSCifScN5Mz9n5DNUF03HzclDE3ileeIkwAjSbZUTe6PpBiK~Bly9ZtW2Xapmrh3BPTOMGFQX1qV5wznZxxTZLeMum5-zo~2g2s3Hg2x-2~aswSUX5ciosm7Vbg4-sVuAFilT54w2KNJ6dr-d3RzcP~6JuAFo4d1i9VpZpY~7J4LOVoXkiiMpTxXPiN3WwVD5uXclvOJjNeQ5krK4f89gbnD8oeL3t7eirC0lQOj8UOfkVw86mSo1a6CLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
    };
  }

  render() {
    const {
      // course_name,
      // course_fees,
      course_available_at,
      // course_summary,
      course_image,
    } = this.state.course_details;
    const {
      courseName,
      courseSummary,
      coursePrice,
      forHome,
      forStudent,
    } = this.props;
    return (
      <>
        {forHome ? <StudentNavbar /> : null}
        {forStudent ? <CourseNavbar /> : null}
        <CourseOverviewWrapper>
          <CourseOverviewHeader
            name={courseName}
            fees={coursePrice}
            availableAt={course_available_at}
          />
          <CourseLowerContainer>
            <CourseLowerWrapper>
              <CourseSummary summary={courseSummary} />
              <CourseMedia src={course_image} alt={'course-image'} />
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
});

export default connect(mapStateToProps)(CourseOverview);
