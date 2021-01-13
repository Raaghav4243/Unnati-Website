import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';
import CustomPaginationActionsTable from '../../components/teacher-testCheck/table-component';
import { fetchTestListForEvaluationStart } from '../../redux/test-evaluation/test-evaluation-list.actions';
import { selectTestList } from '../../redux/test-evaluation/test-evaluation-list.selectors';
import { selectTestDetails } from '../../redux/test-sheet/test-sheet.selectors';
// import EnhancedTable2 from '../../components/teacher-enrolledstudent/table2.Component';

import {
  CafeDetailsParentWrapper,
  CafeDetailWrapper,
  Body,
  CafeTableWrapper,
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

    const rows = [createData(1, 'Raaghav', 'Raj', 1)];

    const { testList } = this.props;
    console.log(testList);
    if (testList) {
      testList.map((list, index) => {
        //console.log(list)
        let firstName = list.firstName;
        //console.log('firstnames', firstName)
        list.coursesEnrolled.map((course) => {
          console.log(course);
          let coursename = course.course.courseName;
          let courseid = course.course._id;
          console.log(courseid);
          //console.log('course names', coursename)
          course.testsDone.map((test) => {
            console.log(test);
            let rowObj = createData(
              test.responseSheet,
              firstName,
              coursename,
              test.test,
              courseid
            );
            rows.push(rowObj);
          });
        });
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
            <TextTitle>Evaluate Tests</TextTitle>
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
  testList: selectTestList,
  test: selectTestDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTestListForEvaluationStart: () =>
    dispatch(fetchTestListForEvaluationStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherTestCheck);
