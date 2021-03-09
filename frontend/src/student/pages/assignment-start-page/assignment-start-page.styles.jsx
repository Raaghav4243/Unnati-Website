import styled from 'styled-components';
import { ReactComponent as AssignmentSVG } from '../../icons/clipboard.svg';

export const AssignmentStartPageWrapper = styled.div`
  width: 100%;
  /* border: 4px solid blue; */
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

export const AssignmentLogo = styled(AssignmentSVG)`
  /* background-color: #fff; */
  /* fill: #fff; */
`;

export const Title = styled.div`
  width: 100%;
  /* height: 25px; */
  /* border: 2px solid red; */
  font-size: 25px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  /* margin-bottom: 10px; */
  text-align: center;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`;

export const AssignmentPrompt = styled.div`
  width: 100%;
  margin-top: 20px;
  /* border: 2px solid orange; */
  font-size: 18px;
  /* min-height: 100px; */
  max-width: 350px;
`;

export const PromptField = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
`;

export const FieldTitle = styled.div`
  /* border: 2px solid red; */
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;

export const FieldValue = styled.div`
  font-weight: 700;
  /* border: 2px solid red; */
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;

export const PromptWrapper = styled.span`
  /* width: 100%; */
  font-weight: 300;
`;

export const AssignmentAttemptsContainer = styled.div`
  /* width: 100%; */
  /* border: 2px solid violet; */
  width: 100%;
  margin: 10px;
  /* border: 2px solid orange; */
  /* font-size: 18px; */
  min-height: 50px;
  max-width: 300px;
  /* font-size: 20px; */
`;

export const AttemptsWrapper = styled.div`
  /* width: 100%; */
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 12px;
  font-size: 1rem;
  max-width: 350px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #f8971d;
    color: #ffffff;
    font-weight: 500;
    transition: all 200ms ease-in-out;
  }
`;

export const ClickPrompt = styled.div`
  width: 100%;
  /* border: 2px solid violet; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-size: 20px; */
`;

export const AttemptsLeftPrompt = styled.div`
  width: 100%;
  /* border: 2px solid violet; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-size: 20px; */
`;
