import React, { Component } from "react";
import TeacherCafeDetails from "../../components/cafe-details/cafe-details.component";
import TeacherDashboardNavbar from "../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component";
import TeacherDashboardSidenav from "../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component";
import CustomPaginationActionsTable from "../../components/teacher-enrolledstudent/table-component";
// import EnhancedTable2 from '../../components/teacher-enrolledstudent/table2.Component';

import {
  CafeDetailWrapper,
  Body,
  NavBar,
  SideNav,
  CafeTableWrapper,
  TableWrapper,
} from "./teacher-enrolled.styled";

class TeacherEnrolledStudents extends React.Component {
  
  render() {

    function createData(ID, FirstName, LastName, Age, FullName){
      return { ID, FirstName, LastName, Age, FullName };
    }

    let rows = [
      createData(1, "Raaghav", "Raj", 19, "Raaghav Raj"),
      createData(2, "Raaghav", "Raj", 19, "Raaghav Raj"),
      createData(3, "Raaghav", "Raj", 19, "Raaghav Raj"),
      createData(4, "Raaghav", "Raj", 19, "Raaghav Raj"),
      createData(5, "Raaghav", "Raj", 19, "Raaghav Raj"),
      createData(6, "Raaghav", "Raj", 19, "Raaghav Raj"),
      createData(7, "Raaghav", "Raj", 19, "Raaghav Raj"),
      createData(8, "Raaghav", "Raj", 19, "Raaghav Raj"),
      createData(9, "Raaghav", "Raj", 19, "Raaghav Raj"),
    ];

    const {
      userId,
      userCafe,
      enrolled_courses,
      no_of_classmates,
      setCurrentCourse,
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
              <CustomPaginationActionsTable rows={rows}></CustomPaginationActionsTable>
              {/* <EnhancedTable2></EnhancedTable2> */}
            </TableWrapper>
          </CafeTableWrapper>
        </Body>
      </>
    );
  }
}

export default TeacherEnrolledStudents;
