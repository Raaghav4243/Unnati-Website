import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
import {
  selectApproveConfirmation,
  selectUnVerifiedStudents,
} from '../../redux/unverified-students/unverified-student.selectors';
import { fetchUnVerifiedStudentStart } from '../../redux/unverified-students/unverified-students.actions';
// import EnhancedTable2 from '../../components/teacher-enrolledstudent/table2.Component';

import {
  TableWrapper,
  CafeDetailsParentWrapper,
  TextTitle,
} from './teacher-approval.styles';
import ApproveStudentTableContainer from '../../components/teacher-approval.page/teacher-approval.container';
import { PageContainer } from '../Profile-page/profile-page.styles';

class TeacherApproval extends React.Component {
  componentDidMount() {
    const { fetchUnVerifiedStudentStart } = this.props;
    fetchUnVerifiedStudentStart();
  }
  render() {
    function createData(ID, FirstName, LastName, email, ButtonId) {
      return { ID, FirstName, LastName, email, ButtonId };
    }
    const { unverifiedStudents } = this.props;
    let rows = [
      // createData(1,'Raaghav','Raj','Raaghav',1),
    ];

    if (unverifiedStudents) {
      unverifiedStudents.map((student, index) => {
        let rowObj = createData(
          index + 1,
          student.firstName,
          student.lastName,
          student.email,
          student._id
        );
        rows.push(rowObj);
        return null;
      });
    } else {
    }

    const { approveConfirmation } = this.props;
    return (
      <>
        <PageContainer>
          {/* <TeacherDashboardNavbar /> */}
          {/* <TeacherDashboardSidenav /> */}
          {/* <PageWrapper> */}
          <CafeDetailsParentWrapper>
            <TeacherCafeDetails />
          </CafeDetailsParentWrapper>
          <TextTitle>Approve Students</TextTitle>
          <TableWrapper>
            {approveConfirmation ? (
              <div style={{ color: 'green' }}>Student Approved!</div>
            ) : null}
            <ApproveStudentTableContainer
              rows={rows}
            ></ApproveStudentTableContainer>
          </TableWrapper>
          {/* </PageWrapper> */}
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  unverifiedStudents: selectUnVerifiedStudents,
  approveConfirmation: selectApproveConfirmation,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUnVerifiedStudentStart: () => dispatch(fetchUnVerifiedStudentStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherApproval);
