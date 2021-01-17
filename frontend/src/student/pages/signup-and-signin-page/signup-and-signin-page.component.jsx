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
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';
// import SignUpForm from '../../components/Signup-page/SignupForm';
import { SignInAndSignUpContainer } from './signup-and-signin-page.styles';
import SignInPageNavbar from '../../components/signin-and-signup-page-navbar/signin-and-signup-page-navbar.component';

class SignInAndSignUpPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <SignInPageNavbar />
        <SignInAndSignUpContainer>
          <SignIn />
          <SignUp />
        </SignInAndSignUpContainer>
      </>
    );
  }
}

export default SignInAndSignUpPage;
