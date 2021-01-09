import React, { Component } from 'react';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component'
import CustomPaginationActionsTable from '../../components/teacher-enrolledstudent/table-component';

import {
  CafeDetailWrapper,
  Body,
  NavBar,
  SideNav,
  CafeTableWrapper,
  TableWrapper,
} from './teacher-enrolled.styled';

<<<<<<< HEAD
//libraries used
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EnrolledTable from '../../components/teacher-enrolledstudent/table-component';

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
=======
class TeacherEnrolledStudents extends React.Component {
>>>>>>> 709e50f9adf7a7635abcb8738f548af3cb754233
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
              <TeacherCafeDetails></TeacherCafeDetails>
            </CafeDetailWrapper>
            <TableWrapper>
              <CustomPaginationActionsTable></CustomPaginationActionsTable>
            </TableWrapper>
          </CafeTableWrapper>
        </Body>
      </>
    );
  }
}

export default TeacherEnrolledStudents;
