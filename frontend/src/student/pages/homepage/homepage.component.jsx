//libraries used
import React from 'react';
import { connect } from 'react-redux';

//redux used

//components used
import HomePageNavbar from '../../components/homepage-navbar/homepage-navbar.component';
import HeroSection from '../../components/hero-section/hero-section.components';
import { fetchAllCoursesStart } from '../../redux/allCourses/all-courses.actions';
//styles used

class HomePage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { fetchAllCoursesStart } = this.props;
    fetchAllCoursesStart();
  }

  render() {
    return (
      <>
        <HomePageNavbar />
        <HeroSection />

        <div style={{ height: '2000px', backgroundColor: 'red' }} id='courses'>
          COURSES OFFERED
        </div>
        <div style={{ height: '2000px', backgroundColor: 'blue' }} id='about'>
          ABOUT US
        </div>
        <div
          style={{ height: '2000px', backgroundColor: 'yellow' }}
          id='testimonials'
        >
          STUDENT STORIES
        </div>
        <div
          style={{ height: '2000px', backgroundColor: 'green' }}
          id='signupsection'
        >
          SIGN UP NOW!
        </div>
      </>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   allCourses: selectAllCourses,
//   userId: selectCurrentUserId,
//   userCafe: selectUserCafeDetails,
//   enrolled_courses: selectUserEnrolledCourses,
//   all_courses_id_map: selectAllCoursesIdMap,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchAllCoursesStart: () => dispatch(fetchAllCoursesStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
