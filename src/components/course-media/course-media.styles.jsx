import styled from 'styled-components';

export const CourseMediaContainer = styled.div`
  /* border: 4px solid red; */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  height: 230px;
  border-radius: 10px;
  /* width: 22vw; */
  width: 394px;
  margin: 5px 0px 5px calc(10px + 3vw);
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1422px) {
    margin: 5px 0px 40px 0px;
  }
`;
export const CourseMediaWrapper = styled.div`
  /* border: 2px solid green; */
  /* height: 212px; */
  /* height: 100%; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* border-radius: 10px; */
`;

export const CourseImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25); */

  /* border: 0.5px solid #ababab; */

  /* border: 1px solid red; */
`;
