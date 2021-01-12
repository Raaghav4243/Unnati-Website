import React, { Component } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component'
import CustomPaginationActionsTable from '../../components/teacher-approval.page/table-component';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';
// import EnhancedTable2 from '../../components/teacher-enrolledstudent/table2.Component';

import {
  CafeDetailsParentWrapper,
  CafeDetailWrapper,
  Body,
  CafeTableWrapper,
  TableWrapper,
} from './teacher-approval.styles';

import { selectUnVerifiedStudents } from '../../redux/unverified-students/unverified-student.selectors';
import { fetchUnVerifiedStudentStart } from '../../redux/unverified-students/unverified-students.actions';

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
  componentDidMount(){
    const {fetchUnVerifiedStudentStart} = this.props
    fetchUnVerifiedStudentStart()
  }
  
  render() {
    
function createData(ID, FirstName, LastName, Age, FullName, ButtonId) {
  return { ID, FirstName, LastName, Age, FullName, ButtonId };
}

const {unverifiedStudents} = this.props;
console.log(unverifiedStudents)

let rows = [
  
        
];

if(unverifiedStudents){
  unverifiedStudents.map((student, index) => {
    let rowObj = createData(index+1, student.firstName, student.lastName, 19, 'krishna');
    console.log('rowObj', rowObj)
    rows.push(rowObj)
   })
}else{
  
}


    return (
      <>
      <TeacherDashboardNavbar></TeacherDashboardNavbar>
        <Body>
          <TeacherDashboardSidenav></TeacherDashboardSidenav>
          <CafeTableWrapper>
            <CafeDetailsParentWrapper>
              <TeacherCafeDetails></TeacherCafeDetails>
            </CafeDetailsParentWrapper>
            <TableWrapper>
              <CustomPaginationActionsTable rows ={rows}></CustomPaginationActionsTable>
              {/* <EnhancedTable2></EnhancedTable2> */}
            </TableWrapper>
          </CafeTableWrapper>
        </Body>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  unverifiedStudents: selectUnVerifiedStudents,

})

const mapDispatchToProps = (dispatch) => ({
  fetchUnVerifiedStudentStart: () => dispatch(fetchUnVerifiedStudentStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeacherApproval);
