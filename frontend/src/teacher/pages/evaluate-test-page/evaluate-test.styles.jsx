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
export const PageWrapper = styled.div`
  margin-top: 90px;
  margin-left: 21vw;
  /* margin-right: 20px; */
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* min-height: calc(100vh - 100px); */
  /* height: calc(100vh - 90px); */
  /* height: calc(100vh-75px); */
  width: calc(100% - 320px);
  /* border: 4px solid red; */

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    width: 100%;
    /* margin-left: 10px; */
    /* margin-right: 0; */
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
  display:flex;
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
  display:flex;
  flex-direction: column;
`;
export const CourseDropDown = styled.div`
  display:flex;
  flex-direction: column;
  margin-left:10vw;
`;

export const ButtonWrapper = styled.button`
width: 9vw;
height:5.7vh;
display: flex;
justify-content: center;
font-size: 18px;
border-radius: 10px;
color: #FFFFFF;
background-color: #2475B0;
cursor: pointer;
padding: 1.3vh 1vw 1vh 1vw;
margin-top: 2vh;
border: none;
outline:none;
margin-left:1vw;
`;

export const DropWrapper = styled.div`
margin-top: 1vh;
`;

export const ImageWrapper = styled.img`
margin-left: 5vw;
margin-top: 3vh;
`

export const TestWrapper = styled.div`
  width: 98%;
  height: 200px;
  padding: 1rem 0 1rem 0;
// border : 1px solid black;
  
  /* border: 2px solid orange; */
  border-radius: 10px;
  background-color: #f3f3f3;
  justify-content: space-between;
  margin-top: 2vh;
  margin-left: 0vw;
`;

export const QuestionsWrapper = styled.div`
display:flex;
flex-direction: column;
margin-left : 0vw;
border : 0px solid black;
`
export const Questions = styled.div`
margin-left: 3vw;
margin-top: 2vh;
font-size: 22px;
`
export const Answers = styled.div`
margin: 2vh 0 1vh 3vw;
font-family: 'Montserrat';
font-size: 18px;

`
export const QuestionAnswers = styled.div`
display: flex;
flex-direction: column;
width:50vw;
height: auto;

`
export const QuestionAndMarksWrapper = styled.div`
display: flex;
align-content: space-around;
`
export const MarksWrapper = styled.div`
margin-top: 10vh;
margin-left: 10vw;
// border : 1px solid black;
width: 15vw;

`
export const CorrectAnswer = styled.span`
color: #3DBA0D;

font-style: oblique;
`

export const ButtonWrapperdiv = styled.div`
width: 11vw;
height:5.7vh;
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
outline:none;
border-radius : 5px;
`;