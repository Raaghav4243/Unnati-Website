import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';
import { selectVerifiedStudents } from '../../redux/verified-students/verified-student.selectors';
import { fetchVerifiedStudentStart } from '../../redux/verified-students/verified-students.actions';
import EnrolledStudentsTableContainer from './teacher-enrolled.container';

import {
  Body,
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
    let rows = [
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
        rows.push(rowObj);
      });
    } else {
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
            <TextTitle>Enrolled Students</TextTitle>
            <TableWrapper>
              <EnrolledStudentsTableContainer
                rows={rows}
              ></EnrolledStudentsTableContainer>
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
