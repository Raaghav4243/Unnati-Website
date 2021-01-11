import styled from 'styled-components';

export const CourseOverviewWrapper = styled.div`
  margin-top: 75px;
  width: 100vw;
  /* border: 4px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CourseLowerContainer = styled.div`
  /* border: 4px solid blue; */
  margin: 1rem 0rem;
  min-height: 274px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CourseLowerWrapper = styled.div`
  /* border: 4px solid pink; */
  display: flex;
  width: 75%;
  @media screen and (max-width: 1428px) {
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
