import React, { Component } from 'react';
// import { SideNav } from '../../../student/pages/Profile-page/profile-page.styled.components'
import CafeOverview from '../../../student/components/recycle-bin/CafeDetails/CafeDetails';
import ClassOverview from '../../../student/components/recycle-bin/CafeDetails/classmate';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component'
// import TableEnrolled from '../../components/teacher-enrolledstudent/table-component';
import CustomPaginationActionsTable from '../../components/teacher-enrolledstudent/table-component';

import {
  CafeDetailWrapper,
  Body,
  NavBar,
  SideNav,
  CafeTableWrapper,
  TableWrapper,
} from './teacher-enrolled.styled';

// //libraries used
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import EnrolledTable from '../../components/with-spinner/teacher-enrolledstudent/table-component';

// //redux used
// // import { fetchAllCoursesStart } from '../../redux/allCourses/all-courses.actions';
// // import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';
// // import { fetchEnrolledCoursesStart } from '../../redux/student/student.actions';
// // import { setCurrentCourse } from '../../redux/student/student.actions';

// // import {
// //   selectAllCourses,
// //   selectAllCoursesIdMap,
// // } from '../../redux/allCourses/all-courses.selectors';
// // import { selectCurrentUserId } from '../../redux/user/user.selectors';
// // import {
// //   selectUserCafeDetails,
// //   selectUserCafeNumberOfClassmates,
// // } from '../../redux/cafe/cafe.selectors';
// // // import { CafeDetails } from '../../../student/components/CafeDetails/Cafe.Details.Styles';
// // import SideNav from '../../components/SideNav/SideNav';
// // import {
// //   selectCurrentCourseId,
// //   selectUserEnrolledCourses,
// // } from '../../redux/student/student.selectors';
// // //components used

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
              <TeacherCafeDetails></TeacherCafeDetails>
            </CafeDetailWrapper>
            <TableWrapper>
              {/* <TableEnrolled></TableEnrolled> */}
              <CustomPaginationActionsTable></CustomPaginationActionsTable>
              <DataGrid></DataGrid>
            </TableWrapper>
          </CafeTableWrapper>
        </Body>
      </>
    );
  }
}

export default cafeteacher;
