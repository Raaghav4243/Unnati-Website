//libraries used
import React from 'react';

//redux used

//components used
import HomePageNavbar from '../../components/homepage-navbar/homepage-navbar.component';
import HeroSection from '../../components/hero-section/hero-section.components';
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
      </>
    );
  }
}

export default HomePage;
