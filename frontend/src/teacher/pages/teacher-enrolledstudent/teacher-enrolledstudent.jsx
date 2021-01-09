import React, { Component } from 'react'
// import { SideNav } from '../../../student/pages/Profile-page/profile-page.styled.components'
import CafeOverview from '../../../student/components/CafeDetails/CafeDetails';
import ClassOverview from '../../../student/components/CafeDetails/classmate';
import {
  CafeDetailWrapper,
  Body,
  NavBar,
  SideNav,
  HorizontalFlexBox,
  VerticleFlexBox,
  CafeDetail,
  CafeDetail1,
  CafeTableWrapper,
  TableWrapper,
  CafeDetail2,
  VerticleFlexBox2,
  EnrolledCoursesWrapper,
} from './teacher-enrolled.styled';

//libraries used
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EnrolledTable from '../../components/with-spinner/teacher-enrolledstudent/table-component';

//redux used
// import { fetchAllCoursesStart } from '../../redux/allCourses/all-courses.actions';
// import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';
// import { fetchEnrolledCoursesStart } from '../../redux/student/student.actions';
// import { setCurrentCourse } from '../../redux/student/student.actions';

// import {
//   selectAllCourses,
//   selectAllCoursesIdMap,
// } from '../../redux/allCourses/all-courses.selectors';
// import { selectCurrentUserId } from '../../redux/user/user.selectors';
// import {
//   selectUserCafeDetails,
//   selectUserCafeNumberOfClassmates,
// } from '../../redux/cafe/cafe.selectors';
// // import { CafeDetails } from '../../../student/components/CafeDetails/Cafe.Details.Styles';
// import SideNav from '../../components/SideNav/SideNav';
// import {
//   selectCurrentCourseId,
//   selectUserEnrolledCourses,
// } from '../../redux/student/student.selectors';
// //components used

// // export default class TeacherEnrolled extends Component {
// //   render() {
//     return (
//       <>
//         <Page>
//               <SideNav></SideNav>
//               <EnrolledTable></EnrolledTable>
//         </Page>
//      </>   
//     )
//   }
// }


class cafeteacher extends React.Component {

  render() {
    const {
      userId,
      userCafe,
      enrolled_courses,
      no_of_classmates,
      setCurrentCourse,
    } = this.props;

    return (
      <>
      <NavBar>NAVBAR</NavBar>
      <Body>
      <SideNav>SIDENAV</SideNav>
      <CafeTableWrapper>
      <CafeDetailWrapper>
        <HorizontalFlexBox>
          <VerticleFlexBox>
            <CafeDetail>Cafe Details</CafeDetail>
            <CafeOverview cafe_name='hi' />
          </VerticleFlexBox>
          <VerticleFlexBox>
            <CafeDetail1>You Have</CafeDetail1>
            <ClassOverview student_number='5' />
          </VerticleFlexBox>
        </HorizontalFlexBox>
      </CafeDetailWrapper>
      <TableWrapper>
      <EnrolledTable></EnrolledTable>
      </TableWrapper>
      </CafeTableWrapper>
      </Body>
      </>);
  }
}

export default cafeteacher;