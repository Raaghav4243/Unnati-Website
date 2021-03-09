import styled from 'styled-components';
import { ReactComponent as ChooseTopicSVG } from '../../icons/timeline.svg';

export const PageWrapper = styled.div`
  margin-top: 75px;
  margin-left: 300px;
  /* margin-right: 20px; */
  display: flex;
  /* flex-wrap: wrap; */
  /* overflow: s; */
  min-height: 500px;
  /* height: calc(100vh - 90px); */
  /* height: calc(100vh-75px); */
  width: calc(100% - 300px);
  /* border: 4px solid red; */

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const SelectTopicWrapper = styled.div`
  /* border: 4px solid red; */
  width: 100%;
  min-height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 150px;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 4px solid red; */
  background-color: #000;
  margin-bottom: 20px;
  border-radius: 50%;
`;

export const ChooseTopicLogo = styled(ChooseTopicSVG)`
  /* background-color: #fff; */
  stroke: grey;
`;

export const Title = styled.div`
  width: 100%;
  max-width: 250px;
  /* height: 25px; */
  /* border: 2px solid red; */
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 10px;
  text-align: center;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`;
