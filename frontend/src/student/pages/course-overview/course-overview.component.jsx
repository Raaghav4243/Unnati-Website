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
          'https://s3-alpha-sig.figma.com/img/b0d3/4f4c/a6560cd50fe0c28793710c7c9abdf456?Expires=1609113600&Signature=Q4PNNnUdhd8FakTBuVTBZBUFk7esrTxoIsoS4oX8H2mMiySlLG~HqmNWrft5el4tTNxAfOwbVfdUIvWHVicUtMFsmYYeoTs6IFswTbThcXt22Ubkkzv54uLh73kNwwlAjkUlG7qV1OhNITVmnloGjAr5D7D0Ye7CijXUqltpjz6xRQumaDY6M~azHXmo-YhBrIvBdCoTL8d-CIOm56E9TIIbZu3HsyuFJS0EUPIJlsX4kN0ghz~R~eFs1yBf96M5C~gu~2tgyGmwgSSc43g~gpz4pDcahAgpXwmg85khfXSZYqtgA9vs4WHGLn-M-vBIzbMuJpE2rNybYhTavQ12zw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
    };
  }

  componentDidMount() {
    const { fetchCourseForOverviewStart } = this.props;
    console.log('FETCH OVERVIEW FROM MOUNT');
    fetchCourseForOverviewStart();
  }

  componentDidUpdate() {
    console.log('FETCH OVERVIEW FROM UPDATE');
    const { fetchCourseForOverviewStart } = this.props;
    fetchCourseForOverviewStart();
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

const mapDispatchToProps = (dispatch) => ({
  fetchCourseForOverviewStart: () => dispatch(fetchCourseForOverviewStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseOverview);
