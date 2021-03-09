import styled from 'styled-components';

import { ReactComponent as TestSVG } from '../../icons/clipboard-test.svg';

export const TestStartPageWrapper = styled.div`
  width: 100%;
  margin: 0 1rem;
  /* border: 4px solid blue; */
  /* width: 100%; */
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

export const TestLogo = styled(TestSVG)`
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

export const TestPrompt = styled.div`
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

export const TestStartPageContainer = styled.div`
  width: 100%;
  /* border: 4px solid black; */
  display: flex;
  flex-direction: column;
`;
export const TestTitleWrapper = styled.div`
  /* width: 100%; */
  /* border: 2px solid orange; */
  display: flex;
  /* align-items: center; */
  /* padding-left: 1rem; */
  font-size: 20px;
  font-weight: 700;
  /* height: 50px; */
  padding-bottom: 10px;
  width: 150px;
  border-bottom: 2px solid grey;
  text-transform: uppercase;
`;

// export const TestPrompt = styled.div`
//   /* width: 100%; */
//   margin-top: 20px;
//   /* border: 2px solid orange; */
//   font-size: 20px;
//   min-height: 150px;
// `;

export const PromptWrapper = styled.span`
  /* width: 100%; */
  font-weight: 300;
`;

export const TestName = styled.div`
  /* width: 100%; */
  /* border: 2px solid orange; */
  /* font-size: 20px; */
`;

export const TestDuration = styled.div`
  /* width: 100%; */
  /* border: 2px solid orange; */
  /* font-size: 20px; */
`;

export const TestMessage = styled.div`
  /* width: 100%; */
  /* border: 2px solid orange; */
  /* font-size: 20px; */
`;

export const QuestionsPromptContainer = styled.div`
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
export const Prompt = styled.div``;
export const StartTestButton = styled.button``;
