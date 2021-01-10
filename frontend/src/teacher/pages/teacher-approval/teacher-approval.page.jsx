import React, { Component } from 'react';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component'
import CustomPaginationActionsTable from '../../components/teacher-approval.page/table-component';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';
// import EnhancedTable2 from '../../components/teacher-enrolledstudent/table2.Component';

import {
  CafeDetailWrapper,
  Body,
  CafeTableWrapper,
  TableWrapper,
} from './teacher-approval.styles';

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

class TeacherApproval extends React.Component {
  render() {
    const {
    } = this.props;

    return (
      <>
      <TeacherDashboardNavbar></TeacherDashboardNavbar>
        <Body>
          <TeacherDashboardSidenav></TeacherDashboardSidenav>
          <CafeTableWrapper>
            <CafeDetailWrapper>
              <TeacherCafeDetails></TeacherCafeDetails>
            </CafeDetailWrapper>
            <TableWrapper>
              <CustomPaginationActionsTable></CustomPaginationActionsTable>
              {/* <EnhancedTable2></EnhancedTable2> */}
            </TableWrapper>
          </CafeTableWrapper>
        </Body>
      </>
    );
  }
}

export default TeacherApproval;
