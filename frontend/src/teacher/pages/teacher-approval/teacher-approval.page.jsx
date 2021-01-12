import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeacherCafeDetails from "../../components/cafe-details/cafe-details.component";
import TeacherDashboardNavbar from "../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component";
import TeacherDashboardSidenav from "../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component";
import CustomPaginationActionsTable from "../../components/teacher-enrolledstudent/table-component";
import { selectUnVerifiedStudents } from '../../redux/unverified-students/unverified-student.selectors';
import { fetchUnVerifiedStudentStart } from '../../redux/unverified-students/unverified-students.actions';
// import EnhancedTable2 from '../../components/teacher-enrolledstudent/table2.Component';

import {
  CafeDetailWrapper,
  Body,
  NavBar,
  SideNav,
  CafeTableWrapper,
  TableWrapper,
  CafeDetailsParentWrapper ,
} from "./teacher-approval.styles";

class TeacherApproval extends React.Component {
  componentDidMount(){
    const {fetchUnVerifiedStudentStart} = this.props
    fetchUnVerifiedStudentStart()
  }
  render() {

    function createData(ID, FirstName, LastName, Age, FullName){
      return { ID, FirstName, LastName, Age, FullName };
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
    
   

    console.log( 'rows', rows)

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
              </CafeDetailsParentWrapper >
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

const mapStateToProps = createStructuredSelector({
  unverifiedStudents: selectUnVerifiedStudents,

})

const mapDispatchToProps = (dispatch) => ({
  fetchUnVerifiedStudentStart: () => dispatch(fetchUnVerifiedStudentStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeacherApproval);