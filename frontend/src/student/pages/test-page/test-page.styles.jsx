// import React from 'react';
// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';

export const TestPageContainer = styled.div`
  margin-left: 500px;
  border: 1px solid red;
`;

export const PageWrapper = styled.div`
  margin-top: 90px;
  margin-left: 320px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;

  /* flex-wrap: wrap; */
  /* overflow: s; */
  min-height: 500px;
  /* height: calc(100vh - 90px); */
  /* height: calc(100vh-75px); */
  width: calc(100% - 340px);
  border: 4px solid red;

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const AssignmentTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;
export const QuestionsWrapper = styled.div``;
export const QuestionCardWrapper = styled.div`
  background-color: #f5f5f5;
  height: 200px;
  width: 800px;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 1rem;
`;
export const QuestionStatementContainer = styled.div`
  font-size: 20px;
`;
export const QuestionsOptionsContainer = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
`;

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

export const CheckedInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

// const popIn = keyframes`
// from {
//   opacity: 0;
//   transform: translate(-50%, -50%) scale(1.5) ;
// }
// to {
//   opacity: 1;
//   transform: translate(-50%, -50%) scale(1) ;
// }
// `;

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
