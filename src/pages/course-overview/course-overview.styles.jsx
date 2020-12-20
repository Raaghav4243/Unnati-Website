import styled from 'styled-components';

export const CourseOverviewPage = styled.div`
  width: 100vw;
  /* border: 4px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CourseLowerContainer = styled.div`
  /* border: 4px solid grey; */
  margin: 1rem 0rem;
  min-height: 274px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CourseLowerWrapper = styled.div`
  /* border: 4px solid pink; */
  width: 80%;
  display: flex;
  padding: 1rem 1rem 1rem 3rem;
  flex-wrap: wrap-reverse;
  align-items: flex-end;
  /* justify-content: space-between; */
  @media screen and (max-width: 1422px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
