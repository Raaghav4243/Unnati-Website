//libraries used
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//styles used
import {
  NavBar,
  SideNav,
  PageWrapper,
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
import {
  selectUserCafeDetails,
  selectUserCafeLocation,
  selectUserCafeName,
  selectUserCafeTeacherInChargeName,
} from '../../redux/cafe/cafe.selectors';
import { fetchUserCafeStartAsync } from '../../redux/cafe/cafe.actions';
import { CafeDetails } from '../../components/recycle-bin/CafeDetails/Cafe.Details.Styles';
// import StudentNavbar from '../../components/student-dashboard-navbar/student-dashboard-navbar.component';
import { updateUserStart } from '../../redux/user/user.actions';
import ProfileSideNav from '../../components/SideNav/SideNav';

class Profile extends React.Component {
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

  // componentDidMnt() {
  //   const { fetchUserCafeStartAsync } = this.props;
  //   console.log('Component Mounted');
  //   fetchUserCafeStartAsync();
  // }

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
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi');
    let data = this.state.updatedUserInfo;
    let user_id = this.props.userId;
    const { updateUserStart } = this.props;
    updateUserStart(user_id, data);
    console.log('data on the page', data);
    //fetch('/updateUser/5fa6af42769f165e982b2ea9', {
    //  method: 'POST', // or 'PUT'
    //  headers: {
    //    'Content-Type': 'application/json',
    //  },
    //  body: JSON.stringify(data),
    //})
    //  .then(response => response.json())
    //  .then(data => {
    //    console.log('Success:', data);
    //  })
    //  .catch((error) => {
    //    console.error('Error:', error);
  };

  render() {
    //   let userData = localStorage.getItem('user')
    // userData = JSON.parse(userData)
    // console.log(userData)
    // console.log(userData.username)
    // const { userusername, useremail, userphonenumber, userlastname, userfirstname, userCafe, userId } = this.props;
    const {
      userusername,
      useremail,
      userphonenumber,
      userlastname,
      userfirstname,
      userCafe,
      userId,
      cafeName,
      cafeLocation,
      cafeTeacherName,
    } = this.props;
    console.log(userfirstname);
    console.log(userCafe);
    console.log(this.props.userId);
    return (
      <>
        {/* <NavBar>NAVBAR</NavBar> */}

        <PageWrapper>
          {/* <ProfileSideNav />  */}

          <ContainerWrapper>
            <ProfileHeading>PROFILE </ProfileHeading>
            <ProfileDetailsContainer
              onChange={(e) => this.handleOnChange(e)}
              onSubmit={this.handleSubmit}
            >
              <PersonalDetailsHeading>Personal Details</PersonalDetailsHeading>
              <WrapperContainer>
                <DetailsWrapper>
                  <DetailsHeading htmlFor='firstName'>
                    First Name
                  </DetailsHeading>
                  <DetailsHeading htmlFor='lastName'>
                    Middle Name
                  </DetailsHeading>
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
              <button>save changes</button>
            </ProfileDetailsContainer>
            <CafeDetailsContainer>
              <PersonalDetailsHeading>Cafe Details</PersonalDetailsHeading>
              <WrapperContainer>
                <DetailsWrapper>
                  <DetailsHeading> Name</DetailsHeading>
                  <DetailsHeading> Location</DetailsHeading>
                  <DetailsHeading> Teacher</DetailsHeading>
                </DetailsWrapper>
                <DetailsWrapper>
                  <CafeInfo>{cafeName}</CafeInfo>
                  <CafeInfo>{cafeLocation}</CafeInfo>
                  <CafeInfo>{cafeTeacherName}</CafeInfo>
                </DetailsWrapper>
              </WrapperContainer>
            </CafeDetailsContainer>
          </ContainerWrapper>
        </PageWrapper>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  userId: selectCurrentUserId,
  userfirstname: selectCurrentUserFirstName,
  userlastname: selectCurrentUserLastName,
  userusername: selectCurrentUserUserName,
  useremail: selectCurrentUserEmail,
  userphonenumber: selectPhoneNumber,
  userrole: selectCurrentUserRole,
  cafeId: selectCurrentUserCafeId,
  cafeName: selectUserCafeName,
  cafeLocation: selectUserCafeLocation,
  cafeTeacherName: selectUserCafeTeacherInChargeName,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserStart: (user_id, data) => dispatch(updateUserStart(user_id, data)),
});

//export default Profile;
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
