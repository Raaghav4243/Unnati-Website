import React, { Component } from 'react';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
import CustomPaginationActionsTable from '../../components/teacher-enrolledstudent/table-component';

import {
  CafeDetailWrapper,
  Body,
  NavBar,
  SideNav,
  CafeTableWrapper,
  TableWrapper,
} from './teacher-enrolled.styled';

class TeacherEnrolledStudents extends React.Component {
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
