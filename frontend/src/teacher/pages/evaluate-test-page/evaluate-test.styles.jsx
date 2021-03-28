import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  width: 100%;
  /* min-height: calc(100vh - 100px); */
  /* border: 4px solid black; */
`;
export const CafeDetailsParentWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  /* min-height: 35%; */
  /* border: 4px solid yellow; */
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
  width: 100%;
  max-width: 1100px;
`;

export const QuestionCardWrapper = styled.div`
  /* border: 4px solid blue; */
  /* width: 100%; */
  margin-bottom: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 6px;
  padding: 1.5rem;
  min-height: 170px;

  /* min-height: 200px;
  width: 800px;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  margin-bottom: 15px; */
`;

export const QuestionStatement = styled.div`
  width: 100%;
  /* max-width: calc(800px - 1.5rem); */
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
  -ms-word-break: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  margin-bottom: 1rem;

  /* margin-bottom: 1.5rem; */
  /* border: 1px solid #bababa; */
  /* border-radius: 6px; */
  /* padding: 1.5rem; */
  /* min-height: 170px; */

  /* min-height: 200px;
  width: 800px;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  margin-bottom: 15px; */
`;

export const ResponseAndMarksWrapper = styled.div`
  width: 100%;
  /* border: 4px solid red; */
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    /* padding: 0 0.75rem 0 0; */
  }
`;

export const Responses = styled.div`
  width: 100%;
  max-width: calc(800px - 1.5rem);
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  /* border: 4px solid violet; */
`;

export const ResponseContainer = styled.div`
  width: 100%;
  min-height: 30px;
  /* max-width: calc(800px - 1.5rem); */
  /* height: 200px; */
  display: flex;
  /* flex-direction: column; */
  /* border: 2px solid red; */
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    /* padding: 0 0.75rem 0 0; */
  }
`;

export const Prompt = styled.div`
  width: 100%;
  max-width: 150px;
  padding-left: 1.5rem;

  /* max-width: calc(800px - 1.5rem); */
  /* height: 200px; */
  display: flex;
  justify-content: space-between;

  /* flex-direction: co; */
  /* border: 2px solid blue; */

  @media screen and (max-width: 768px) {
    /* width: 100%; */
    padding-left: 0;
    /* margin-top: 0.25rem; */
    /* padding: 0 0.75rem 0 0; */
  }
`;

export const Response = styled.div`
  /* width: 100%; */
  width: calc(100% - 150px);
  padding-left: 0.5rem;
  /* max-width: 150px; */
  /* max-width: calc(800px - 1.5rem); */
  /* height: 200px; */
  display: flex;
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  /* flex-direction: co; */
  /* border: 2px solid blue; */
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    margin-top: 0.25rem;
    /* padding: 0 0.75rem 0 0; */
  }
`;

export const MarksWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  /* height: 200px; */
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  margin-left: 55px;
  /* border: 4px solid blue; */
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

export const TextTitle = styled.div`
  width: 100%;
  height: 25px;
  /* border: 2px solid red; */
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;

export const CourseTitle = styled.div`
  width: 100%;
  height: 25px;
  /* border: 2px solid red; */
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;

export const DropDownWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;
export const StudentTitle = styled.div`
  width: 50%;
  height: 25px;
  // border: 2px solid red;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;

export const StudentDropDown = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CourseDropDown = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10vw;
`;

export const ButtonWrapper = styled.button`
  width: 9vw;
  height: 5.7vh;
  display: flex;
  justify-content: center;
  font-size: 18px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #2475b0;
  cursor: pointer;
  padding: 1.3vh 1vw 1vh 1vw;
  margin-top: 2vh;
  border: none;
  outline: none;
  margin-left: 1vw;
`;

export const DropWrapper = styled.div`
  margin-top: 1vh;
`;

export const ImageWrapper = styled.img`
  margin-left: 5vw;
  margin-top: 3vh;
`;

export const TestWrapper = styled.div`
  width: 98%;
  height: 200px;
  padding: 1rem 0 1rem 0;
  // border : 1px solid black;

  border: 2px solid orange;
  border-radius: 10px;
  background-color: #f3f3f3;
  justify-content: space-between;
  /* margin-top: 2vh;
  margin-left: 0vw; */
`;

export const Questions = styled.div`
  margin-left: 3vw;
  margin-top: 2vh;
  font-size: 22px;
`;
export const Answers = styled.div`
  margin: 2vh 0 1vh 3vw;
  font-family: 'Montserrat';
  font-size: 18px;
`;
export const QuestionAnswers = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: auto;
`;

export const CorrectAnswer = styled.span`
  color: #3dba0d;

  font-style: oblique;
`;

export const ButtonWrapperdiv = styled.div`
  width: 11vw;
  height: 5.7vh;
  /* display: flex; */
  /* justify-content: center; */
  /* font-size: 18px; */
  /* border-radius: 10px; */
  /* color: #FFFFFF; */
  /* background-color: #2475B0; */
  cursor: pointer;
  /* padding: 1.3vh 1vw 1vh 1vw; */
  margin-top: 2vh;
  margin-bottom: 3vh;
  margin-left: 0.2vw;
  border: none;
  outline: none;
  border-radius: 5px;
`;
