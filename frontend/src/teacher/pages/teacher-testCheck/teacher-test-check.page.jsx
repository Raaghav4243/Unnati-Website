import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
import CustomPaginationActionsTable from '../../components/teacher-testCheck/styledtable-component';
import { fetchTestListForEvaluationStart } from '../../redux/test-evaluation/test-evaluation-list.actions';
import { selectTestList } from '../../redux/test-evaluation/test-evaluation-list.selectors';
import { selectTestDetails } from '../../redux/test-sheet/test-sheet.selectors';
import { PageContainer } from '../evaluate-test-page/evaluate-test.styles';
import {
  CafeDetailsParentWrapper,
  TableWrapper,
  TextTitle,
} from './teacher-test.-check.styles';

class TeacherTestCheck extends React.Component {
  componentDidMount() {
    const { fetchTestListForEvaluationStart } = this.props;
    fetchTestListForEvaluationStart();
  }
  render() {
    function createData(ID, FirstName, CourseName, testName, ButtonId) {
      return { ID, FirstName, CourseName, testName, ButtonId };
    }

    const rows = [
      // createData(1, 'Raaghav', 'Raj', 1),
      // createData(1, 'Raaghav', 'Raj', 1),
      // createData(1, 'Raaghav', 'Raj', 1),
    ];

    const { testList } = this.props;
    if (testList) {
      testList.map((list, index) => {
        let firstName = list.firstName;
        list.coursesEnrolled.map((course) => {
          let coursename = course.course.courseName;
          let courseid = course.course._id;
          course.testsDone.map((test) => {
            let rowObj = createData(
              test.responseSheet,
              firstName,
              coursename,
              test.test.testName,
              courseid
            );
            rows.push(rowObj);
            return null;
          });
          return null;
        });
        return null;
      });
    } else {
    }

    return (
      <>
        <PageContainer>
          {/* <TeacherDashboardNavbar></TeacherDashboardNavbar> */}
          {/* <TeacherDashboardSidenav></TeacherDashboardSidenav> */}
          {/* <PageWrapper> */}
          <CafeDetailsParentWrapper>
            <TeacherCafeDetails></TeacherCafeDetails>
          </CafeDetailsParentWrapper>
          <TextTitle>Evaluate Tests</TextTitle>
          <TableWrapper>
            <CustomPaginationActionsTable
              rows={rows}
            ></CustomPaginationActionsTable>
            {/* <EnhancedTable2></EnhancedTable2> */}
          </TableWrapper>
          {/* </PageWrapper> */}
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  testList: selectTestList,
  test: selectTestDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTestListForEvaluationStart: () =>
    dispatch(fetchTestListForEvaluationStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherTestCheck);
