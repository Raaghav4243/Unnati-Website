// import React from 'react';
// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';

export const TestPageContainer = styled.div`
  margin-left: 500px;
  /* border: 1px solid red; */
`;

export const TestNavbar = styled.div`
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
  /* border: 10px solid orange; */
  width: 100%;
  padding: 0.75rem 2rem;
`;

export const ButtonWrapper = styled.div`
  /* width: 100%; */
  /* border: 4px solid red; */
  margin-left: 2rem;
`;

export const NavRight = styled.div`
  /* width: 100%; */
  /* border: 4px solid red; */
  display: flex;
  padding: 0 0 0 1rem;
  justify-content: space-between;
`;

export const TimePrompt = styled.div`
  color: #fff;
`;

export const PageWrapper = styled.div`
  /* width: 100%; */
  min-height: calc(100vh - 75px- 66px);
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
  }
`;

export const Form = styled.form`
  width: 100%;
  /* margin-left: 300px; */
  /* max-width: 500px; */
  /* border: 4px solid red; */
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
  /* min-height: 170px; */

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

export const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100;
  /* color: ; */
  width: calc(100% - 320px);
  max-width: 800px;
  display: flex;
  background-color: #f5f5f5;
  /* border: 4px solid blue; */
  justify-content: space-between;
  align-items: center;
  height: 50px;

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    width: 100%;
  }
`;

export const TimerWrapper = styled.div`
  /* left: 10; */
  /* background-color: red; */
  display: flex;
  color: #fff;
`;

export const TimeHeader = styled.div`
  font-size: 20px;
  display: flex;
`;

export const TimeWrapper = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

export const TestTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;
// export const QuestionsWrapper = styled.div``;
// export const QuestionCardWrapper = styled.div`
//   background-color: #f5f5f5;
//   min-height: 200px;
//   max-width: 800px;
//   width: 100%;
//   border-radius: 6px;
//   margin-bottom: 10px;
//   padding: 1rem;
// `;
// export const QuestionStatementContainer = styled.div`
//   font-size: 20px;
//   display: flex;
//   flex-wrap: wrap;
// `;
// export const QuestionsOptionsContainer = styled.div`
//   font-size: 10px;
//   display: flex;
//   flex-direction: column;
//   margin-left: 40px;
//   margin-top: 10px;
// `;

export const RadioLabel = styled.label`
  /* input[type='radio'] {
  }
  display: inline-block;
  background-color: #ddd;
  padding: 10px 20px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid #444;
  border-radius: 4px;

  input[type='radio']::checked {
    background-color: #bfb;
    border-color: #4c4;
  } */
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 0.6em 1.75em;
  font-size: 16px;
`;

export const RadioInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const popIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5) ;
}
to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) ;
}
`;

export const RadioIndicator = styled.div`
  border: 1px solid;
  border-radius: 1em;
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  left: -1.5em;

  ${RadioLabel}:hover & {
    background: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${RadioInput}:checked + &::after {
    display: block;
    border: solid #263238;
    border-radius: 1em;
    background-color: #263238;
    width: 0.5em;
    height: 0.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${RadioInput}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;

export const CheckedLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 0.6em 1.75em;
  font-size: 16px;
`;

export const CheckedInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const CheckedIndicator = styled.div`
  border: 1px solid;
  /* border-radius: 1em; */
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  left: -1.5em;

  ${RadioLabel}:hover & {
    background: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${CheckedInput}:checked + &::after {
    display: block;
    /* border: solid #263238; */
    /* border-radius: 1em; */
    background-color: #f8971d;
    /* width: 0.5em; */
    /* height: 0.5em; */
    width: 1em;
    height: 1em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${CheckedInput}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;

export const TextLabel = styled.label`
  /* input[type='radio'] {
  }
  display: inline-block;
  background-color: #ddd;
  padding: 10px 20px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid #444;
  border-radius: 4px;

  input[type='radio']::checked {
    background-color: #bfb;
    border-color: #4c4;
  } */
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 0.6em 1.75em;
  font-size: 16px;
`;

export const TextInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const TextIndicator = styled.div`
  border: 1px solid;
  /* border-radius: 1em; */
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  left: -1.5em;

  ${RadioLabel}:hover & {
    background: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${CheckedInput}:checked + &::after {
    display: block;
    border: solid #263238;
    border-radius: 1em;
    background-color: #263238;
    width: 0.5em;
    height: 0.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${CheckedInput}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;

// export const QuestionsWrapper = styled.div``;
// export const QuestionsWrapper = styled.div``;
// export const QuestionsWrapper = styled.div``;
// export const QuestionsWrapper = styled.div``;
// export const QuestionsWrapper = styled.div``;
// export const QuestionsWrapper = styled.div``;

// export const AssignmentWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
// export const QuestionWrapper = styled.div`
//   display: inline-block;
//   background: #f5f5f5;
//   width: 45vw;
//   height: 21vh;
//   margin-top: 1vh;
//   border-radius: 10px;
//   padding-top: 2vh;
// `;
// export const WrappingQuestions = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-left: 25vw;
// `;
// export const AssignmentName = styled.div`
//   margin-top: 13.57vh;
//   font-size: 20px;
// `;
// export const AssignmentForm = styled.form`
//   margin-top: 1vh;
// `;
// export const AllQuestions = styled.div`
//   overflow: auto;
// `;
// export const Questions = styled.div`
//   margin-left: 2vw;
// `;
// export const Options = styled.div`
//   margin-left: 2vw;
// `;
