import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ArrowsEqual } from "../../icons/arrows.svg";
import arrows from "../../icons/arrows.svg";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button/Button";
//redux
import { fetchUserCafeStart } from "../../redux/cafe/cafe.actions";
import {
  selectUserCafeDetails,
  selectUserCafeNumberOfClassmates,
} from "../../redux/cafe/cafe.selectors";
//import { selectCurrentUserId } from '../../redux/user/user.selectors';

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import TeacherCafeDetails from "../../components/cafe-details/cafe-details.component";
import DiscoverCourseCard from '../../components/discover-course/discover-courses-card.component';
import {
  PageContainer,
  CafeDetailsParentWrapper,
  DiscoverCourseParentWrapper,
  PageWrapper,
  TextTitle,
  Container,
  Title,
  DiscoverCoursesCardWrapper,
} from "./teacher-dashboard-main-page.styles";
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from "../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component";
import { selectAllCourses } from "../../../student/redux/allCourses/all-courses.selectors";
import { fetchAllCoursesStart } from "../../../student/redux/allCourses/all-courses.actions";
class TeacherDashboardLandingPage extends React.Component {
  constructor(){
    super()
    this.state = {
      userId: null,
      cafeId: null,
      courseId: null
    }
  }
  componentDidMount() {
    const {
      userId,
      fetchUserCafeStart,
      fetchAllCoursesStart
    } = this.props;
    fetchUserCafeStart();
    fetchAllCoursesStart();
  }
  render() {
    const { userCafe, verifiedStudents, allCourses } = this.props;
    console.log('courses are', allCourses)
    console.log('verified user are', verifiedStudents)
    return (
      <>
        <PageContainer>
          <TeacherDashboardNavbar />
          <TeacherDashboardSidenav />
          <PageWrapper>
            <CafeDetailsParentWrapper>
              <TeacherCafeDetails />
            </CafeDetailsParentWrapper>
            <TextTitle>Courses Available</TextTitle>
            <DiscoverCourseParentWrapper>
            <Container>
          <DiscoverCoursesCardWrapper>
               {allCourses
                        ? allCourses.map((course, index) => { 
                            return(
                                <DiscoverCourseCard
                                courseId={course._id}
                                courseName={course.courseName}
                              />
                          
                              );
                            })
                            : null}
                    <DiscoverCourseCard/>
          </DiscoverCoursesCardWrapper>
        </Container>
        </DiscoverCourseParentWrapper>
          </PageWrapper>
        </PageContainer>
      </>
    );
  
  }
}

const mapStateToProps = createStructuredSelector({
  //userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  allCourses: selectAllCourses
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
  fetchAllCoursesStart: () => dispatch(fetchAllCoursesStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherDashboardLandingPage);
