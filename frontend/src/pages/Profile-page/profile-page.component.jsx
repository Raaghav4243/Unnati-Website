//libraries used
import React from 'react'
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
  CafeInfo
} from './profile-page.styled.components';

//redux used
import { selectCurrentUserUserName, selectCurrentUserId, selectCurrentUserEmail, selectPhoneNumber, selectCurrentUserFirstName, selectCurrentUserLastName } from '../../redux/user/user.selectors';
import { selectUserCafeDetails } from '../../redux/cafe/cafe.selectors';
import { fetchUserCafeStartAsync } from '../../redux/cafe/cafe.actions'
import { CafeDetails } from '../../components/CafeDetails/Cafe.Details.Styles';
import StudentNavbar from '../../components/student-navbar/student-navbar.component';


class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      updatedUserInfo: {
        role: 'STUDENT',
        cafe: '5fa5796e9542c50df4285b04'
      }
    }
  }
  // componentDidMount() {
  //   const { fetchUserCafeStartAsync } = this.props;
  //   console.log('Component Mounted');
  //   fetchUserCafeStartAsync();
  // }

  handleOnChange = (e) => {
    const { value, name, placeholder } = e.target
    let resp = this.state.updatedUserInfo
    resp[name] = value
    if (!value) {
      return resp[name] = placeholder
    }
    this.setState(
      {
        updatedUserInfo: resp
      },
      () => {
        console.log(this.state);
      }
    );
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('hi')
    let data = this.state.updatedUserInfo
    fetch('/updateUser/5fa6af42769f165e982b2ea9', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    const { userusername, useremail, userphonenumber, userlastname, userfirstname, userCafe, userId } = this.props;
    console.log(userfirstname);
    console.log(userCafe);
    return <>
      <NavBar>NAVBAR</NavBar>

      <PageWrapper>
        <SideNav>SIDENAV</SideNav>
        <ContainerWrapper>
          <ProfileHeading>PROFILE </ProfileHeading>
          <ProfileDetailsContainer
            onChange={(e) => this.handleOnChange(e)}
            onSubmit={this.handleSubmit}
          >

            <PersonalDetailsHeading>Personal Details</PersonalDetailsHeading>
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
                <DetailsHeading htmlFor='email'>  Email ID</DetailsHeading>
                <DetailsHeading htmlFor='phoneNumber'>  Phone Number</DetailsHeading>
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
                <DetailsHeading>Username</DetailsHeading>
                <DetailsHeading>  Email ID</DetailsHeading>
                <DetailsHeading>  Phone Number</DetailsHeading>
              </DetailsWrapper>
              <DetailsWrapper>
                <CafeInfo>uug</CafeInfo>
                <CafeInfo>uug</CafeInfo>
                <CafeInfo>uug</CafeInfo>
              </DetailsWrapper>
            </WrapperContainer>

          </CafeDetailsContainer>
        </ContainerWrapper>
      </PageWrapper>
    </>
  }
}
const mapStateToProps = createStructuredSelector({
  userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  userfirstname: selectCurrentUserFirstName,
  userlastname: selectCurrentUserLastName,
  userusername: selectCurrentUserUserName,
  useremail: selectCurrentUserEmail,
  userphonenumber: selectPhoneNumber
});

//export default Profile;
export default connect(mapStateToProps)(Profile);
