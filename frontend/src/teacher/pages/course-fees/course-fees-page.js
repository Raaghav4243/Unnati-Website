import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import arrows from "../../icons/arrows.svg";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField/TextField";
//redux
import { fetchUserCafeStart } from "../../redux/cafe/cafe.actions";
import {
  selectUserCafeDetails,
  selectUserCafeNumberOfClassmates,
} from "../../redux/cafe/cafe.selectors";
//import { selectCurrentUserId } from '../../redux/user/user.selectors';

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import TeacherCafeDetails from "../../components/cafe-details/cafe-details.component";

import {
  PageContainer,
  CafeDetailsParentWrapper,
  EnrolledCoursesParentWrapper,
  DiscoverCourseParentWrapper,
  PageWrapper,
  TextTitle,
  DropDownWrapper,
  StudentTitle,
  CourseTitle,
  StudentDropDown,
  CourseDropDown,
  ButtonWrapper,
  DropWrapper,
  ImageWrapper,
  RemarksFieldWrapper,
  RemarksWrapper,
} from "./course-fees-styles";
import TeacherDashboardNavbar from "../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component";
import TeacherDashboardSidenav from "../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component";
import { fetchVerifiedStudentStart } from "../../redux/verified-students/verified-students.actions";
import { selectVerifiedStudents } from "../../redux/verified-students/verified-student.selectors";
import { feeUpdateStart } from "../../redux/fee-update/fee-update.actions";
import { selectFeeUpdateConfirmation } from "../../redux/fee-update/fee-update.selector";
class TeacherDashboardFeesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      FeeAmount: null,
      Remarks: null,
    };
  }
  componentDidMount() {
    const {
      userId,
      fetchUserCafeStart,
      fetchVerifiedStudentStart,
    } = this.props;
    // if(allCourses is null), then fetchAllCoursesStart() as well.
    fetchUserCafeStart();
    fetchVerifiedStudentStart();
  }

  handleNameChange = (e) => {
    const id = e.target.value;
    console.log(id);
    this.setState({ userId: id }, () => {
      console.log(this.state);
    });
  };

  handleFeeAmount = (e) => {
    const feeValue = e.target.value;
    console.log(feeValue);
    this.setState({ FeeAmount: feeValue }, () => {
      console.log(this.state);
    });
  };

  handleRemarks = (e) => {
    const value = e.target.value;
    console.log(value);
    this.setState({ Remarks: value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = (e) => {
    const userId = this.state.userId;
    const remarks = this.state.Remarks;
    const amount = this.state.FeeAmount;
    const data = { amount, remarks };
    console.log("page data", userId, data);
    const { feeUpdateStart } = this.props;
    feeUpdateStart(userId, data);
  };

  render() {
    const { verifiedStudents, updateConfirmation } = this.props;
    console.log("rendered verified students", verifiedStudents);
    console.log(updateConfirmation);
    // let cafeId = localStorage.getItem('user')
    // cafeId = JSON.parse(cafeId)
    // cafeId = cafeId.cafe
    // console.log(cafeId)

    return (
      <>
        <PageContainer>
          <TeacherDashboardNavbar />
          <TeacherDashboardSidenav />
          <PageWrapper>
            <CafeDetailsParentWrapper>
              <TeacherCafeDetails />
            </CafeDetailsParentWrapper>
            <TextTitle>Enter Fee</TextTitle>
            {updateConfirmation ? <div style={{color: "green"}}>{updateConfirmation}</div> : null}
            <DropDownWrapper>
              <StudentDropDown>
                <StudentTitle>Student</StudentTitle>
                
                <DropWrapper>
                  <FormControl
                    variant="outlined"
                    className="hello"
                    style={{ minWidth: 150 }}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Select
                    </InputLabel>
                    <Select
                      // native
                      // value={state.age}
                      onChange={this.handleNameChange}
                      label="Age"
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple",
                      }}
                    >
                      <option aria-label="None" value="none">
                        NONE
                      </option>
                      {verifiedStudents
                        ? verifiedStudents.map((student, index) => {
                            return (
                              <option key={index} value={student._id}>
                                {student.firstName}
                              </option>
                            );
                          })
                        : null}
                    </Select>
                  </FormControl>
                </DropWrapper>
              </StudentDropDown>
              <ImageWrapper src={arrows} />
              <CourseDropDown>
                <CourseTitle>Fee Amount</CourseTitle>
                <DropWrapper>
                  <TextField
                    id="filled-basic"
                    label="Fees"
                    variant="filled"
                    onChange={this.handleFeeAmount}
                  />
                </DropWrapper>
              </CourseDropDown>
              <RemarksWrapper>
                <CourseTitle>Remarks</CourseTitle>
                <RemarksFieldWrapper>
                  <TextField
                    id="filled-basic"
                    label="Remarks"
                    variant="filled"
                    onChange={this.handleRemarks}
                  />
                </RemarksFieldWrapper>
              </RemarksWrapper>
            </DropDownWrapper>
            <ButtonWrapper onClick={this.handleSubmit}>Update</ButtonWrapper>
          </PageWrapper>
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  verifiedStudents: selectVerifiedStudents,
  updateConfirmation: selectFeeUpdateConfirmation,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
  fetchVerifiedStudentStart: () => dispatch(fetchVerifiedStudentStart()),
  feeUpdateStart: (userId, data) => dispatch(feeUpdateStart(userId, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherDashboardFeesPage);
