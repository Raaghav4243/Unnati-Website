import styled from 'styled-components';

export const CourseVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* border: 4px solid blue; */
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

export const LectureVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  padding: 2rem;
  height: calc(100vh - 75px);
`;

export const LectureNotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  padding: 1.5rem 2rem 2rem 2rem;

  height: calc(100vh - 130px);
`;
