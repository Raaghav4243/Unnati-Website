import styled from 'styled-components';
import { ReactComponent as CafeSVG } from '../../icons/school.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 4px solid red; */
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 0.75rem 0 0;
  }
`;
export const CafeDetailsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  /* border: 4px solid violet; */
`;
export const CafeTitle = styled.div`
  width: 100%;
  height: 25px;
  /* border: 2px solid red; */
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;
export const CafeDetailsWrapper = styled.div`
  width: 100%;
  height: 170px;
  padding: 1rem 0 1rem 0;

  /* border: 2px solid orange; */
  border-radius: 10px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CafeLogo = styled.div`
  height: 100%;
  width: 25%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;

  align-items: center;
`;

export const CafeIcon = styled(CafeSVG)`
  height: 100px;
  width: 100px;

  @media screen and (max-width: 1200px) {
    /* margin-left: 0; */
    height: 80%;
    width: 80%;
  }
`;
export const CafeDetails = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 2px solid blue; */
  /* font-family: 'Montserrat', sans-serif; */
`;

export const CafeName = styled.div`
  width: 100%;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  /* border: 2px solid blue; */
  margin-bottom: 10px;
`;
export const CafeAddress = styled.div`
  width: 100%;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  /* border: 2px solid blue; */
  margin-bottom: 5px;
`;
export const CafeFaculty = styled.div`
  width: 100%;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  /* border: 2px solid blue; */
  margin-bottom: 20px;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  font-size: 16px;
  /* border: 2px solid blue; */
`;
export const ContactButton = styled.div`
  width: 150px;
  padding: 5px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  border-radius: 10px;
  color: #fff;
  background-color: #f48c06;
  cursor: pointer;
  /* border: 1px solid blue; */
`;

export const ClassmatesContainer = styled.div`
  width: 100%;
  max-width: 220px;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-left: 55px;
  /* border: 4px solid blue; */
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

export const ClassmatesTitle = styled.div`
  width: 100%;
  height: 25px;
  /* border: 2px solid red; */
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;

export const ClassmatesWrapper = styled.div`
  width: 200px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  /* background-color: #2475b0; */
  background-color: #f48c06;
  color: #ffffff;
  /* border: 2px solid blue; */
`;

export const Number = styled.div`
  font-size: 64px;
`;
export const Prompt = styled.div`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
`;
export const PopupWrapper = styled.div`
  width: 100%;
  /* height: 120px; */
  /* padding: 2.5vh 2.5vw 2.5vh 2.5vw; */
  padding: 20px;
  border: 2px solid orange;
  border-radius: 10px;
  background-color: #f48c06;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ContactDetails = styled.div``;
