import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import arrows from '../../icons/arrows.svg';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';
import { selectUserCafeDetails } from '../../redux/cafe/cafe.selectors';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
import {
  PageContainer,
  CafeDetailsParentWrapper,
  TextTitle,
  DropDownWrapper,
  StudentTitle,
  CourseTitle,
  StudentDropDown,
  CourseDropDown,
  ButtonWrapperdiv,
  DropWrapper,
  ImageWrapper,
  RemarksFieldWrapper,
  RemarksWrapper,
} from './course-fees-styles';
import { fetchVerifiedStudentStart } from '../../redux/verified-students/verified-students.actions';
import { selectVerifiedStudents } from '../../redux/verified-students/verified-student.selectors';
import { feeUpdateStart } from '../../redux/fee-update/fee-update.actions';
import { selectFeeUpdateConfirmation } from '../../redux/fee-update/fee-update.selector';
import Popup from 'reactjs-popup';
class TeacherDashboardFeesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      FeeAmount: null,
      Remarks: null,
      name: null,
      fee: null,
      remarks: null,
    };
  }
  componentDidMount() {
    const { fetchUserCafeStart, fetchVerifiedStudentStart } = this.props;
    // if(allCourses is null), then fetchAllCoursesStart() as well.
    fetchUserCafeStart();
    fetchVerifiedStudentStart();
  }

  handleNameChange = (e) => {
    const id = e.target.value;
    this.setState({ userId: id });
  };

  handleFeeAmount = (e) => {
    const feeValue = e.target.value;
    this.setState({ FeeAmount: feeValue });
  };

  handleRemarks = (e) => {
    const value = e.target.value;
    this.setState({ Remarks: value });
  };

  handleSubmit = (e) => {
    const userId = this.state.userId;
    const remarks = this.state.Remarks;
    const amount = this.state.FeeAmount;
    const data = { amount, remarks };
    const { feeUpdateStart } = this.props;
    feeUpdateStart(userId, data);
    this.setState({
      FeeAmount: null,
      Remarks: null,
      name: null,
      fee: null,
      remarks: null,
    });
  };

  render() {
    const { verifiedStudents, updateConfirmation } = this.props;
    return (
      <>
        <PageContainer>
          {/* <TeacherDashboardNavbar /> */}
          {/* <TeacherDashboardSidenav /> */}
          {/* <PageWrapper> */}
          <CafeDetailsParentWrapper>
            <TeacherCafeDetails />
          </CafeDetailsParentWrapper>
          <TextTitle>Enter Fee</TextTitle>

          <DropDownWrapper>
            <StudentDropDown>
              <StudentTitle>Student</StudentTitle>

              <DropWrapper>
                <FormControl
                  variant='outlined'
                  className='hello'
                  style={{ minWidth: 150 }}
                >
                  <InputLabel htmlFor='outlined-age-native-simple'>
                    Select
                  </InputLabel>
                  <Select onChange={this.handleNameChange}>
                    <option aria-label='None' value='none'>
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
                  id='filled-basic'
                  label='Fees'
                  variant='filled'
                  onChange={this.handleFeeAmount}
                  value={this.state.fee}
                />
              </DropWrapper>
            </CourseDropDown>
            <RemarksWrapper>
              <CourseTitle>Remarks</CourseTitle>
              <RemarksFieldWrapper>
                <TextField
                  id='filled-basic'
                  label='Remarks'
                  variant='filled'
                  onChange={this.handleRemarks}
                  value={this.state.remarks}
                />
              </RemarksFieldWrapper>
            </RemarksWrapper>
          </DropDownWrapper>
          <Popup
            trigger={
              <ButtonWrapperdiv>
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  fullWidth='true'
                  onClick={this.handleSubmit}
                >
                  UPDATE
                </Button>
              </ButtonWrapperdiv>
            }
            position='right'
          >
            {' '}
            {updateConfirmation ? (
              <div style={{ color: 'green' }}>{updateConfirmation}</div>
            ) : (
              <div style={{ color: 'red' }}>Fees not updated</div>
            )}
          </Popup>

          {/* </PageWrapper> */}
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
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
