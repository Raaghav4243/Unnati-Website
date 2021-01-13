//libraries used
import React from 'react';
import { connect } from 'react-redux';

//redux used

//components used
import HomePageNavbar from '../../components/homepage-navbar/homepage-navbar.component';
import HeroSection from '../../components/hero-section/hero-section.components';
import { fetchAllCoursesStart } from '../../redux/allCourses/all-courses.actions';
import OurCoursesContainer from '../../components/courses-offered/courses-offered.container';
import HomepageSidebar from '../../components/homepage-sidebar/homepage-sidebar.component';
import AboutUs from '../../components/homepage-about-us/homepage-about-us.component';
import OurCoursesSection from '../../components/homepage-our-courses/homepage-our-courses.component';
import Testimonials from '../../components/homepage-testimonials/homepage-testimonials.component';
import HomepageFooter from '../../components/homepage-footer/homepage-footer.component';
//styles used

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    console.log('Toggle is called');
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    console.log('HOMEPAGE MOUNTED!');
    const { fetchAllCoursesStart } = this.props;
    fetchAllCoursesStart();
  }

  render() {
    // const {} = this.props;
    return (
      <>
        <HomePageNavbar toggle={this.toggle} />
        <HeroSection />
        <HomepageSidebar isOpen={this.state.isOpen} toggle={this.toggle} />
        <AboutUs />
        <OurCoursesSection />
        <Testimonials />
        <HomepageFooter />

        {/* <div id='home' style={{ top: 0 }}></div>
        <HomePageNavbar />
        <div id='home'>
          <HeroSection />
        </div>
        {/* <div id='courses'> */}
        {/* <OurCoursesContainer /> */}
        {/* </div> */}
        {/* <div style={{ height: '2000px', backgroundColor: 'red' }} id='courses'>
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
        </div>  */}
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
