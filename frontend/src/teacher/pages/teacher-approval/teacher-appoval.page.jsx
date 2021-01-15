
import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeacherCafeDetails from "../../components/cafe-details/cafe-details.component";
import TeacherDashboardNavbar from "../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component";
import TeacherDashboardSidenav from "../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component";
import CustomPaginationActionsTable from "../../components/teacher-approval.page/styledtable-component";
import { selectApproveConfirmation, selectUnVerifiedStudents } from '../../redux/unverified-students/unverified-student.selectors';
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
  ButtonWrapper,
  TextTitle
} from "./teacher-approval.styles";

class TeacherApproval extends React.Component {
  componentDidMount(){
    const {fetchUnVerifiedStudentStart} = this.props
    fetchUnVerifiedStudentStart()
  }
  render() {

    function createData(ID, FirstName, LastName, email, ButtonId){
      return { ID, FirstName, LastName, email, ButtonId };
    }


    const {unverifiedStudents} = this.props;
    console.log(unverifiedStudents)

    let rows = [
      
            
    ];

    if(unverifiedStudents){
      unverifiedStudents.map((student, index) => {
        let rowObj = createData(index+1, student.firstName, student.lastName, student.email, student._id);
        console.log('rowObj', rowObj)
        rows.push(rowObj)
       })
    }else{
      
    }

    const {approveConfirmation} = this.props
    return (
      <>
        <TeacherDashboardNavbar></TeacherDashboardNavbar>
        <Body>
          <TeacherDashboardSidenav></TeacherDashboardSidenav>
          <CafeTableWrapper>
          <CafeDetailsParentWrapper> 
              <TeacherCafeDetails></TeacherCafeDetails>
              </CafeDetailsParentWrapper >
              <TextTitle>Approve Students</TextTitle>
            <TableWrapper>
              
              {
                approveConfirmation ? <div>{approveConfirmation}</div> : null
              }
              <CustomPaginationActionsTable rows={rows}></CustomPaginationActionsTable>
              {/* <EnhancedTable2></EnhancedTable2> */}
            </TableWrapper>
            <ButtonWrapper onClick={this.handleSubmit}>Approve</ButtonWrapper>
          </CafeTableWrapper>
        </Body>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  unverifiedStudents: selectUnVerifiedStudents,
  approveConfirmation: selectApproveConfirmation

})

const mapDispatchToProps = (dispatch) => ({
  fetchUnVerifiedStudentStart: () => dispatch(fetchUnVerifiedStudentStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeacherApproval);