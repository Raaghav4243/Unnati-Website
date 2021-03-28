import styled from 'styled-components';

export const CoursesContainer = styled.div`
  /* background-color: #fff; */
  /* margin: 2rem 5rem 2rem 5rem; */
  /* padding: 3rem 0 0 0; */
  /* border: 1px solid red; */
  width: 100%;
  margin-top: 2rem;
  /* margin-bottom: 2rem; */
  /* padding-top: 1rem; */
`;

export const CourseTitleContainer = styled.div`
  /* margin: 10px 0; */
  /* margin: 2rem 0; */
  /* border: 1px solid blue; */
  /* display: flex;
  justify-content: center; */
  /* align-items: flex-star; */
  margin-top: 80px;
`;

export const CourseTitle = styled.h1`
  font-size: calc(30px + 1vw);
  font-weight: bold;
  text-align: center;

  /* @media screen and (max-width: 900px) {
    font-size: 35px;
  } */
`;

export const CoursesContainerTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 900px) {
    font-size: 35px;
  }
`;

export const CourseInfoWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 2.5rem;

  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin: 2rem 0;
  } */
  /* padding: rem; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3rem;
  padding: 2rem 10rem;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    /* margin: 2rem 0; */
    padding: 0;
  }
  /* justify-content: center; */
`;
