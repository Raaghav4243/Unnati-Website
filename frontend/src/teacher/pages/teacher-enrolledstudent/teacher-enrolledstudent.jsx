import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';
import CustomPaginationActionsTable from '../../components/teacher-enrolledstudent/styledtable-component';
import { selectVerifiedStudents } from '../../redux/verified-students/verified-student.selectors';
import { fetchVerifiedStudentStart } from '../../redux/verified-students/verified-students.actions';
// import EnhancedTable2 from '../../components/teacher-enrolledstudent/table2.Component';

import {
  CafeDetailWrapper,
  Body,
  NavBar,
  SideNav,
  CafeTableWrapper,
  TableWrapper,
  CafeDetailsParentWrapper,
  TextTitle,
} from './teacher-enrolled.styled';

class TeacherEnrolledStudents extends React.Component {
  componentDidMount() {
    const { fetchVerifiedStudentStart } = this.props;
    fetchVerifiedStudentStart();
  }
  render() {
    function createData(ID, FirstName, LastName, email) {
      return { ID, FirstName, LastName, email };
    }

    const { verifiedStudents } = this.props;
    console.log(verifiedStudents);

    let rows = [
      // createData(1,"Raaghav","Raj","raaghav"),
      // createData(1,"Raaghav","Raj","raaghav"),
      // createData(1,"Raaghav","Raj","raaghav")

    ];

    

    if (verifiedStudents) {
      verifiedStudents.map((student, index) => {
        let rowObj = createData(
          index + 1,
          student.firstName,
          student.lastName,
          
          student.email
        );
        console.log('rowObj', rowObj);
        rows.push(rowObj);
      });
    } else {
    }

    console.log('rows', rows);

    // const {
    //   userId,
    //   userCafe,
    //   enrolled_courses,
    //   no_of_classmates,
    //   setCurrentCourse,
    // } = this.props;

    return (
      <>
        <TeacherDashboardNavbar></TeacherDashboardNavbar>
        <Body>
          <TeacherDashboardSidenav></TeacherDashboardSidenav>
          <CafeTableWrapper>
            <CafeDetailsParentWrapper>
              <TeacherCafeDetails></TeacherCafeDetails>
            </CafeDetailsParentWrapper>
            <TextTitle>Enrolled Students</TextTitle>
            <TableWrapper>
              <CustomPaginationActionsTable
                rows={rows}
              ></CustomPaginationActionsTable>
              {/* <EnhancedTable2></EnhancedTable2> */}
            </TableWrapper>
          </CafeTableWrapper>
        </Body>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  verifiedStudents: selectVerifiedStudents,
});

const mapDispatchToProps = (dispatch) => ({
  fetchVerifiedStudentStart: () => dispatch(fetchVerifiedStudentStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherEnrolledStudents);
