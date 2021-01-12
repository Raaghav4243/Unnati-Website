import React, { Component } from 'react';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component'
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';
import CustomPaginationActionsTable from '../../components/teacher-testCheck/table-component';
// import EnhancedTable2 from '../../components/teacher-enrolledstudent/table2.Component';

import {
  CafeDetailsParentWrapper,
  CafeDetailWrapper,
  Body,
  CafeTableWrapper,
  TableWrapper,
} from './teacher-test.-check.styles';


class TeacherTestCheck extends React.Component {
  render() {
    const {
    } = this.props;

    return (
      <>
      <TeacherDashboardNavbar></TeacherDashboardNavbar>
        <Body>
      <TeacherDashboardSidenav></TeacherDashboardSidenav>      
          <CafeTableWrapper>
            < CafeDetailsParentWrapper>
              <TeacherCafeDetails></TeacherCafeDetails>
            </ CafeDetailsParentWrapper>
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

export default TeacherTestCheck;
