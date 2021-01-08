import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 4px solid red; */
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* flex-direction: column; */
  /* justify-content: space-between; */

  /* @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  } */
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;
export const EnrolledCourseCardWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  overflow-x: auto;
`;
