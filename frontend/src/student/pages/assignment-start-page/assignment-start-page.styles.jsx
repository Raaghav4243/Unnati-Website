import styled from 'styled-components';

export const AssignmentStartPageContainer = styled.div`
  width: 100%;
  /* border: 4px solid black; */
  display: flex;
  flex-direction: column;
`;

export const AssignmentTitleWrapper = styled.div`
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

export const AssignmentPrompt = styled.div`
  /* width: 100%; */
  margin-top: 20px;
  /* border: 2px solid orange; */
  font-size: 20px;
  min-height: 150px;
`;

export const PromptWrapper = styled.span`
  /* width: 100%; */
  font-weight: 300;
`;

export const AssignmentName = styled.div`
  /* width: 100%; */
  /* border: 2px solid orange; */
  /* font-size: 20px; */
`;

export const AssignmentDuration = styled.div`
  /* width: 100%; */
  /* border: 2px solid orange; */
  /* font-size: 20px; */
`;

export const AssignmentHighestScore = styled.div`
  /* width: 100%; */
  /* border: 2px solid orange; */
  /* font-size: 20px; */
`;

export const AssignmentAttemptsContainer = styled.div`
  /* width: 100%; */
  /* border: 2px solid violet; */
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
