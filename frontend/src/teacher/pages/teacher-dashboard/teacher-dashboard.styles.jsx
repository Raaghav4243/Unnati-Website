import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  /* border: 4px solid blue; */
`;

export const PageWrapper = styled.div`
  margin-top: 90px;
  margin-left: 320px;
  /* margin-right: 20px; */
  display: flex;
  /* flex-wrap: wrap; */
  /* overflow: scroll; */
  /* min-height: calc(100vh - 100px); */
  /* height: calc(100vh - 90px); */
  /* height: calc(100vh-75px); */
  width: calc(100% - 320px);
  /* border: 4px solid red; */

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    width: 100%;
    margin-left: 10px;
    /* margin-right: 0; */
  }
`;

export const HorizontalFlexBox = styled.div`
  display: flex;
  margin-left: 25vw;
  margin-top: 10vh;
  font-family: Montserrat;
`;

export const VerticleFlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CafeDetail = styled.div`
  font-size: 3vh;
`;

export const CafeDetail1 = styled.div`
  font-size: 3vh;
  margin-left: 4vw;
`;

export const HorizontalFlexBox1 = styled.div`
  display: flex;
`;

export const VerticleFlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25vw;
  margin-top: 1vh;
`;
export const CafeDetail2 = styled.div`
  margin-top: 0.6vh;
  font-size: 3vh;
  font-family: Montserrat;
`;

export const EnrolledCoursesWrapper = styled.div`
  display: flex;
  width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const CoverContainer = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  opacity: 0;
  right: 0px;
  top: 0px;
  background-color: red;
`;
