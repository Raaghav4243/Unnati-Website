/*

Sign up:
- we have to make sure that user fills in the details for signing in after sign up.
- No use of JWT in sign up

Login : 
- JWT Token is used here
- Token is received from backend
- Store token in redux and local storage using data.token
- 

*/

import React from 'react';
import SignUpContainer from '../../components/sign-up/sign-up.container';
import SignIn from '../../components/sign-in/sign-in.component';

import {
  SignInAndSignUpContainer,
  Container,
  SignUpWrapper,
  MainTitle,
  Title,
  SignInWrapper,
} from './signup-and-signin-page.styles';
import SignInPageNavbar from '../../components/signin-and-signup-page-navbar/signin-and-signup-page-navbar.component';

class SignInAndSignUpPage extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <>
        <SignInPageNavbar />
        <SignInAndSignUpContainer>
          <Container>
            <SignInWrapper>
              <SignIn />
            </SignInWrapper>
            <SignUpWrapper>
              <MainTitle>Don't have an account?</MainTitle>
              <Title>Sign up today</Title>
              <SignUpContainer />
            </SignUpWrapper>
          </Container>
        </SignInAndSignUpContainer>
      </>
    );
  }
}

export default SignInAndSignUpPage;
