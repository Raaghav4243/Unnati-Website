import styled from 'styled-components';

export const CourseItem = styled.div`
  height: 225px;
  width: 225px;
  padding: 2rem;
  margin: 3rem;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.7);

    h3 {
      transition: display 1s ease-in-out;
      display: block;
      text-align: center;
    }

    div {
      height: 90%;
    }

    div img {
      height: 100%;
    }
  }

  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin: 3rem 1rem;
  }
`;

export const ImgWrap = styled.div`
  height: 95%;
  text-align: center;
`;

export const CourseItemImg = styled.img`
  height: 100%;
`;

export const CourseItemTitle = styled.h3`
  margin: 1rem 0;
  display: none;
`;
