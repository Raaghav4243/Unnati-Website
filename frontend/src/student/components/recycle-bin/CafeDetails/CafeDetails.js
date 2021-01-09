import React from 'react';
import {
  CafeDetails,
  CafeName,
  CafeAddress,
  Faculty,
  Contact,
  CafeImage,
} from './Cafe.Details.Styles';
import image from '../../../assets/image.png';
import {
  HorizontalFlexBox1,
  VerticleFlexBox,
} from '../../../pages/student-dashboard/student-dashboard.styles';

const CafeOverview = (props) => {
  const { cafe_name, cafe_address, faculty_incharge } = props;

  return (
    <CafeDetails>
      <HorizontalFlexBox1>
        <CafeImage src={image}></CafeImage>
        <VerticleFlexBox>
          <CafeName>{cafe_name}</CafeName>
          <CafeAddress>
            <strong>Address : </strong> {cafe_address}
          </CafeAddress>
          <Faculty>
            <strong>Faculty Incharge : </strong>
            {faculty_incharge}
          </Faculty>
          <Contact>Contact Faculty</Contact>
        </VerticleFlexBox>
      </HorizontalFlexBox1>
    </CafeDetails>
  );
};

export default CafeOverview;
