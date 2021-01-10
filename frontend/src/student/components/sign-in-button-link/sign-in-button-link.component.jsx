//libraries used
import React from 'react';

//redux used

//components used
import { SignInBtnLink } from './sign-in-button-link.styles';

//styles used

const SignInButton = ({ scrollClass }) => {
  return (
    <>
      <SignInBtnLink to='/signup' className={scrollClass ? 'scroll' : null}>
        Sign In
      </SignInBtnLink>
    </>
  );
};

export default SignInButton;
