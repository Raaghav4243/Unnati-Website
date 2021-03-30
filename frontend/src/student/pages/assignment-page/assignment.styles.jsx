import styled from 'styled-components';

export const AssignmentNavbar = styled.div`
  background: #1a1919;
  /* background-color: #4f4f4f; */
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 75px;
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
  /* border: 2px solid orange; */
  width: 100%;
  padding: 0.75rem 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    /* padding: 0; */
  }
`;

export const ButtonWrapper = styled.div`
  /* width: 100%; */
  /* border: 4px solid red; */
  margin-left: 2rem;
  @media screen and (max-width: 768px) {
    margin: 1rem;
    /* align-items: flex-start; */
    /* padding: 1rem; */
  }
`;

export const NavRight = styled.div`
  /* width: 100%; */
  /* border: 2px solid red; */
  display: flex;
  padding: 0 0 0 1rem;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    /* align-items: flex-start; */
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const PageWrapper = styled.div`
  /* width: 100%; */
  min-height: calc(100vh - 75px - 66px);
  margin-top: calc(75px + 66px);
  padding: 0.75rem 2rem;
  margin-left: 300px;
  /* border: 4px solid blue; */
  /* background: #ffedbc; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: calc(75px + 66px + 150px);
  }
`;

export const TimerWrapper = styled.div`
  /* left: 10; */
  /* background-color: red; */
  /* border: 2px solid blue; */
  display: flex;
  color: #fff;
`;

export const TimeHeader = styled.div`
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const TimeWrapper = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

export const Form = styled.form`
  width: 100%;
  /* margin-left: 300px; */
  /* max-width: 500px; */
  /* border: 4px solid red; */
`;

export const AssignmentTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;
export const QuestionsWrapper = styled.div`
  /* border: 4px solid blue; */
  /* padding: 1rem; */
  width: 100%;
  /* max-width: calc(800px + 1rem); */
  /* margin-top: 20px; */
  /* border-top: 8px solid #ffc222; */
  /* border-radius: 8px; */
  /* padding: 1rem; */
`;
export const QuestionCardWrapper = styled.div`
  background-color: #fff;
  /* border: 4px solid blue; */
  /* width: 100%; */
  margin-bottom: 1.5rem;
  /* border: 1px solid #bababa; */
  border-radius: 6px;
  /* padding: 1.5rem; */
  min-height: 170px;

  /* min-height: 200px;
  width: 800px;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  margin-bottom: 15px; */
`;

export const QuestionStatementContainer = styled.div`
  /* font-size: 18px; */
  margin-bottom: 0.5rem;
  background: #f5f5f5;
  display: flex;
  /* border: 4px solid red; */
  border-radius: 6px;
  min-height: 70px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const QuestionPrompt = styled.div`
  /* font-weight: 600; */
  /* border: 2px solid orange; */
  display: flex;
  flex-direction: column;
`;

export const QuestionStatement = styled.div`
  font-weight: 600;
  font-size: 18px;
  /* border: 2px solid orange; */
`;

export const QuestionNoSpan = styled.div`
  /* font-weight: 600; */
  /* width: 100%; */
  /* border: 1px solid red; */
  color: #393939;
  font-size: 14px;
  display: flex;
  align-items: center;
`;
export const MarksPrompt = styled.div`
  /* font-weight: 600; */
  /* border: 2px solid orange; */
  font-size: 20px;
  font-family: Montserrat, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionsOptionsContainer = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  /* border: 2px solid blue; */
  width: 100%;
  /* padding: 1rem; */
`;

export const OptionWrapper = styled.div`
  /* font-size: 18px; */
  margin-bottom: 0.25rem;
  background: #f5f5f5;
  display: flex;
  /* border: 4px solid red; */
  border-radius: 6px;
  /* min-height: 70px; */
  padding: 0.5rem 1rem;
  display: flex;
  background: ${({ status }) => {
    console.log('STATUS IS', status);
    return status ? `${status}` : null;
  }};
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
`;

export const ResponseSheet = styled.div`
  /* border: 4px solid red; */
  width: 100%;
  /* max-width: 800px; */
`;

export const Scorecard = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  background: #eeeded;

  /* border: 1px solid #bababa; */
  border-radius: 6px;
  padding: 1rem 2rem;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 5px;
  /* border: 2px solid orange; */
`;

export const PromptWrapper = styled.div`
  font-size: 18px;
  /* margin-bottom: 10px; */
  margin: 0.5rem;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid blue; */
`;

export const Prompt = styled.div``;
export const Score = styled.div`
  font-weight: 600;
`;

export const ScoreDiv = styled.div`
  background-color: orange;
  color: white;
  width: 30vw;
  text-align: center;
  margin: 1vh 0;
  padding: 0.5rem;
`;
