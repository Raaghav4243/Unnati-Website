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
  CafeDetailsContainer
} from './profile-page.styled.components';

//redux used
import { selectCurrentUserUserName, selectCurrentUserId, selectCurrentUserEmail, selectPhoneNumber, selectCurrentUserFirstName, selectCurrentUserLastName } from '../../redux/user/user.selectors';
import { selectUserCafeDetails } from '../../redux/cafe/cafe.selectors';
import { fetchUserCafeStartAsync } from '../../redux/cafe/cafe.actions'
import { CafeDetails } from '../../components/CafeDetails/Cafe.Details.Styles';
import StudentNavbar from '../../components/student-navbar/student-navbar.component';


class Profile extends React.Component {
  // componentDidMount() {
  //   const { fetchUserCafeStartAsync } = this.props;
  //   console.log('Component Mounted');
  //   fetchUserCafeStartAsync();
  // }

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
          <ProfileDetailsContainer>

            <PersonalDetailsHeading>Personal Details</PersonalDetailsHeading>
            <WrapperContainer>
              <DetailsWrapper>
                <DetailsHeading>First Name</DetailsHeading>
                <DetailsHeading>Middle Name</DetailsHeading>
                <DetailsHeading>Last Name*</DetailsHeading>
              </DetailsWrapper>
              <DetailsWrapper>
                <Details>{userfirstname}</Details>
                <Details>{userlastname}</Details>
                <Details>{userlastname}</Details>
              </DetailsWrapper>
            </WrapperContainer>

            <WrapperContainer>
              <DetailsWrapper>
                <DetailsHeading>Username</DetailsHeading>
                <DetailsHeading>  Email ID</DetailsHeading>
                <DetailsHeading>  Phone Number</DetailsHeading>
              </DetailsWrapper>
              <DetailsWrapper>
                <Details>{userusername}</Details>
                <Details>{useremail}</Details>
                <Details>{userphonenumber}</Details>
              </DetailsWrapper>
            </WrapperContainer>


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
                <Details>uug</Details>
                <Details>uug</Details>
                <Details>uug</Details>
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
