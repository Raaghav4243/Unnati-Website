import styled from 'styled-components';

export const CourseItem = styled.div`
  height: 225px;
  width: 225px;
  padding: 1rem;
  /* margin: 3rem; */
  /* transition: all 1s ease-in-out; */
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.7);
    cursor: pointer;

    h3 {
      transition: display 1s ease-in-out;
      display: block;
      text-align: center;
    }

    div {
      /* transition: display 1s ease-in-out; */
      height: 80%;
    }

    div img {
      height: 100%;
    }
  }

  /* @media screen and (max-width: 900px) and (min-width: 768px) {
    margin: 3rem 1rem;
  } */
`;

export const ImgWrap = styled.div`
  height: 90%;
  text-align: center;
`;

export const CourseItemImg = styled.img`
  height: 100%;
`;

export const CourseItemTitle = styled.h3`
  margin: 0.75rem 0;
  /* display: none; */
  /* border: 1px solid red; */
  text-align: center;
`;
