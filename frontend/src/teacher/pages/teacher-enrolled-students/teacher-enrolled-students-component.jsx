import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
import { selectVerifiedStudents } from '../../redux/verified-students/verified-student.selectors';
import { fetchVerifiedStudentStart } from '../../redux/verified-students/verified-students.actions';
import { PageContainer } from '../Profile-page/profile-page.styles';
import EnrolledStudentsTableContainer from './teacher-enrolled-students.container';

import {
  TableWrapper,
  CafeDetailsParentWrapper,
  TextTitle,
} from './teacher-enrolled-students.styles';

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
        return null;
      });
    } else {
    }

    return (
      <>
        <PageContainer>
          {/* <TeacherDashboardNavbar /> */}
          {/* <TeacherDashboardSidenav /> */}
          {/* <PageWrapper> */}
          <CafeDetailsParentWrapper>
            <TeacherCafeDetails />
          </CafeDetailsParentWrapper>
          <TextTitle>Enrolled Students</TextTitle>
          <TableWrapper>
            <EnrolledStudentsTableContainer
              rows={rows}
            ></EnrolledStudentsTableContainer>
          </TableWrapper>
          {/* </PageWrapper> */}
        </PageContainer>
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
