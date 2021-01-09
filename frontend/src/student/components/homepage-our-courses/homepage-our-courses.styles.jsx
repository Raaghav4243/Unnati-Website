import styled from 'styled-components';

export const CoursesContainer = styled.div`
  background-color: #fff;
  margin: 2rem 5rem 2rem 5rem;
`;

export const CoursesContainerTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 35px;
  }
`;

export const CourseInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 2.5rem;

  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin: 2rem 0;
  }
`;
