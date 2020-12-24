//libraries used
import React from 'react';

//redux used

//components used
import { SignInBtnLink } from './sign-in-button-link.styles';

//styles used

const SignInButton = () => {
  return (
    <>
      <SignInBtnLink to='/signin'>Sign In</SignInBtnLink>
    </>
  );
};

export default SignInButton;
