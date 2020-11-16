import styled from 'styled-components';

export const AboutItem = styled.div`
  border: 1px solid #000;
  border-radius: 40px;
  height: 225px;
  width: 225px;
  padding: 2rem;
  margin: 3rem;

  &:hover {
    background-color: red;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin: 3rem 1rem;
  }
`;

export const ImgWrap = styled.div`
  height: 40%;
  text-align: center;
`;

export const AboutItemImg = styled.img`
  height: 100%;
`;

export const AboutItemTitle = styled.h3`
  text-align: center;
  margin: 1rem 0;
`;

export const AboutItemInfo = styled.p`
  overflow: hidden;
  font-size: 0.7rem;
  text-align: center;
`;
