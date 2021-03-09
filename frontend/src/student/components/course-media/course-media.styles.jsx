import styled from 'styled-components';

export const CourseMediaContainer = styled.div`
  /* border: 4px solid red; */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  max-width: 394px;
  min-height: 230px;

  padding: 0.25rem;
  margin: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CourseMediaWrapper = styled.div`
  /* border: 2px solid green; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CourseImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25); */

  /* border: 1px solid red; */
`;
