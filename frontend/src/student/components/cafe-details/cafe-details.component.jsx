import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { ReactComponent as CafeIcon } from '../../icons/cafe.svg';

import Popup from "reactjs-popup";
import CafeImage from '../../assets/image.png';
import {
  selectUserCafeAddress,
  selectUserCafeName,
  selectUserCafeNumberOfClassmates,
  selectUserCafeTeacherInChargeName,
} from '../../redux/cafe/cafe.selectors';

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
  PopupWrapper,
  ContactDetails,
} from './cafe-details.styles';

const StudentCafeDetails = ({
  cafeName,
  cafeAddress,
  teacherName,
  no_of_classmates,
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
              <CafeName>{cafeName}</CafeName>
              <CafeAddress>
                <strong>Address : </strong> {cafeAddress}
              </CafeAddress>
              <CafeFaculty>
                <strong>Faculty Incharge : </strong>
                {teacherName}
              </CafeFaculty>
              <ButtonWrapper>
              <Popup trigger={<ContactButton>Contact Teacher</ContactButton>} position="right center">
                <PopupWrapper>
                <ContactDetails>Faculty Phone Number: 982738271323</ContactDetails>
                  <ContactDetails>Faculty Email: facultyemail@gmail.com</ContactDetails>
                  <ContactDetails>Enactus Email: enactusdtu@gmail.com</ContactDetails>
                  </PopupWrapper>
  </Popup>
              </ButtonWrapper>
            </CafeDetails>
          </CafeDetailsWrapper>
        </CafeDetailsContainer>
        <ClassmatesContainer>
          <ClassmatesTitle>You have</ClassmatesTitle>
          <ClassmatesWrapper>
            <Number>{no_of_classmates}</Number>
            <Prompt>Classmates</Prompt>
          </ClassmatesWrapper>
        </ClassmatesContainer>
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cafeName: selectUserCafeName,
  cafeAddress: selectUserCafeAddress,
  teacherName: selectUserCafeTeacherInChargeName,
  no_of_classmates: selectUserCafeNumberOfClassmates,
});

export default connect(mapStateToProps)(StudentCafeDetails);
