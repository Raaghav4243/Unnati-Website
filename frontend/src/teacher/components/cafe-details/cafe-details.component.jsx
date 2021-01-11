import React from 'react';

// import { ReactComponent as CafeIcon } from '../../icons/cafe.svg';

import CafeImage from '../../assets/image.png';

import {
  Container,
  CafeDetailsContainer,
  CafeTitle,
  CafeDetailsWrapper,
  CafeLogo,
  CafeDetails,
  CafeName,
  CafeAddress,
  CafeFaculty,
  ButtonWrapper,
  ContactButton,
  ClassmatesContainer,
  ClassmatesTitle,
  ClassmatesWrapper,
  Number,
  Prompt,
} from './cafe-details.styles';

const TeacherCafeDetails = ({
  cafeName,
  cafeAddress,
  facultyIncharge,
  classmates,
}) => {
  return (
    <>
      <Container>
        <CafeDetailsContainer>
          <CafeTitle>Cafe Details</CafeTitle>
          <CafeDetailsWrapper>
            <CafeLogo>
              <img
                src={CafeImage}
                style={{ height: '100px', width: '100px' }}
              />
            </CafeLogo>
            <CafeDetails>
              <CafeName>{cafeName}cafeName</CafeName>
              <CafeAddress>
                <strong>Address :</strong> {cafeAddress}
              </CafeAddress>
              <CafeFaculty>
                <strong>Faculty Incharge :</strong>
                {facultyIncharge}
              </CafeFaculty>
              <ButtonWrapper>
                <ContactButton>Contact Teacher</ContactButton>
              </ButtonWrapper>
            </CafeDetails>
          </CafeDetailsWrapper>
        </CafeDetailsContainer>
        <ClassmatesContainer>
          <ClassmatesTitle>You have</ClassmatesTitle>
          <ClassmatesWrapper>
            <Number>{classmates}2</Number>
            <Prompt>Students</Prompt>
          </ClassmatesWrapper>
        </ClassmatesContainer>
      </Container>
    </>
  );
};

export default TeacherCafeDetails;
