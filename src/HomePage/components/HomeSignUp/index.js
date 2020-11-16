import React from 'react';
import {
  SignUpContainer,
  TitleWrapper,
  SignUpTitle,
  StudentWrapper,
  SignUpStudent,
  ButtonWrapper,
  SignUpButton,
} from './HomeSignUpElements';

const HomeSignUp = () => {
  return (
    <>
      <SignUpContainer>
        <TitleWrapper>
          <SignUpTitle>SIGN UP NOW</SignUpTitle>
        </TitleWrapper>
        <ButtonWrapper>
          <SignUpButton to='/'>Signup as a Student</SignUpButton>
        </ButtonWrapper>
        <ButtonWrapper>
          <SignUpButton to='/'>Signup as an Entrepreneur</SignUpButton>
        </ButtonWrapper>
      </SignUpContainer>
    </>
  );
};

export default HomeSignUp;
