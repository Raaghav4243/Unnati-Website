//libraries used
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from "@material-ui/core/Button/Button";

//styles used
import {
  NavBar,
  SideNav,
  PageWrapper,
  ButtonWrapper,
  WrapperContainer,
  Details,
  DetailsWrapper,
  DetailsHeading,
  PersonalDetailsHeading,
  ProfileDetailsContainer,
  ProfileHeading,
  ContainerWrapper,
  CafeDetailsContainer,
  CafeInfo,
  SaveButton,
} from './profile-page.styled.components';

//redux used
import {
  selectCurrentUserUserName,
  selectCurrentUserId,
  selectCurrentUserEmail,
  selectPhoneNumber,
  selectCurrentUserFirstName,
  selectCurrentUserLastName,
  selectCurrentUserRole,
  selectCurrentUserCafeId,
} from '../../redux/user/user.selectors';
import { selectUserCafeDetails, selectUserCafeTeacherInChargeId, selectUserCafeTeacherInChargeName } from '../../redux/cafe/cafe.selectors';
// import StudentNavbar from '../../components/student-dashboard-navbar/student-dashboard-navbar.component';
import { updateUserStart } from '../../redux/user/user.actions';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import { selectUpdateConfirmation } from '../../../student/redux/user/user.selectors';
// import { ButtonWrapper } from '../../components/cafe-details/cafe-details.styles';

class TeacherProfile extends React.Component {
  constructor(props) {
    super(props);
    const {
      userId,
      userfirstname,
      userlastname,
      userphonenumber,
      userusername,
      cafeId,
      userrole,
      useremail,
    } = props;
    this.state = {
      updatedUserInfo: {
        role: `${userrole}`,
        cafe: `${cafeId}`,
        email: `${useremail}`,
        firstName: `${userfirstname}`,
        lastName: `${userlastname}`,
        phoneNumber: `${userphonenumber}`,
        username: `${userusername}`,
      },
    };
  }

  handleOnChange = (e) => {
    const { value, name, placeholder } = e.target;
    let resp = this.state.updatedUserInfo;
    resp[name] = value;
    if (!value) {
      return (resp[name] = placeholder);
    }
    this.setState(
      {
        updatedUserInfo: resp,
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state.updatedUserInfo;
    let user_id = this.props.userId;
    const { updateUserStart } = this.props;
    updateUserStart(user_id, data);
  };

  render() {
   const {
      userusername,
      useremail,
      userphonenumber,
      userlastname,
      userfirstname,
      userCafe,
      updateConfirmation,
      teacherUsername
    } = this.props;
    return (
      <>
        {' '}
        <TeacherDashboardNavbar />
        <TeacherDashboardSidenav />
        <ContainerWrapper>
          <ProfileHeading>PROFILE </ProfileHeading>
          <ProfileDetailsContainer
            onChange={(e) => this.handleOnChange(e)}
            onSubmit={this.handleSubmit}
          >
            <PersonalDetailsHeading>Personal Details</PersonalDetailsHeading>
            {updateConfirmation ? (
              <div style={{ color: 'green' }}>{updateConfirmation}</div>
            ) : null}
            <WrapperContainer>
              <DetailsWrapper>
                <DetailsHeading htmlFor='firstName'>First Name</DetailsHeading>
                <DetailsHeading htmlFor='lastName'>Middle Name</DetailsHeading>
                <DetailsHeading htmlFor='lastName'>Last Name*</DetailsHeading>
              </DetailsWrapper>
              <DetailsWrapper>
                <Details
                  type='type'
                  placeholder={userfirstname}
                  name='firstName'
                  id='firstname'
                />
                <Details
                  type='type'
                  placeholder={userlastname}
                  name='lastName'
                  id='lastName'
                />
                <Details
                  type='type'
                  placeholder={userlastname}
                  name='lastName'
                  id='lastName'
                />
              </DetailsWrapper>
            </WrapperContainer>

            <WrapperContainer>
              <DetailsWrapper>
                <DetailsHeading htmlFor='username'>Username</DetailsHeading>
                <DetailsHeading htmlFor='email'> Email ID</DetailsHeading>
                <DetailsHeading htmlFor='phoneNumber'>
                  {' '}
                  Phone Number
                </DetailsHeading>
              </DetailsWrapper>
              <DetailsWrapper>
                <Details
                  type='type'
                  placeholder={userusername}
                  name='username'
                  id='username'
                />
                <Details
                  type='email'
                  placeholder={useremail}
                  name='email'
                  id='email'
                />
                <Details
                  type='number'
                  placeholder={userphonenumber}
                  name='phoneNumber'
                  id='phoneNumber'
                />
              </DetailsWrapper>
            </WrapperContainer>
            {/* <SaveButton>Save Changes</SaveButton> */}
            <ButtonWrapper>
            <Button size='small' variant='contained' color='primary' fullWidth='True'>Save Changes</Button>
            </ButtonWrapper>
          </ProfileDetailsContainer>
          <CafeDetailsContainer>
            <PersonalDetailsHeading>Cafe Details</PersonalDetailsHeading>
            <WrapperContainer>
              <DetailsWrapper>
                <DetailsHeading>Username</DetailsHeading>
                <DetailsHeading> Email ID</DetailsHeading>
                <DetailsHeading> Phone Number</DetailsHeading>
              </DetailsWrapper>
              <DetailsWrapper>
                <CafeInfo>{teacherUsername}</CafeInfo>
                <CafeInfo>uug</CafeInfo>
                <CafeInfo>uug</CafeInfo>
              </DetailsWrapper>
            </WrapperContainer>
          </CafeDetailsContainer>
        </ContainerWrapper>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  userfirstname: selectCurrentUserFirstName,
  userlastname: selectCurrentUserLastName,
  userusername: selectCurrentUserUserName,
  useremail: selectCurrentUserEmail,
  userphonenumber: selectPhoneNumber,
  userrole: selectCurrentUserRole,
  cafeId: selectCurrentUserCafeId,
  updateConfirmation: selectUpdateConfirmation,
  teacherUsername: selectUserCafeTeacherInChargeName
});

const mapDispatchToProps = (dispatch) => ({
  updateUserStart: (user_id, data) => dispatch(updateUserStart(user_id, data)),
});

//export default Profile;
export default connect(mapStateToProps, mapDispatchToProps)(TeacherProfile);
