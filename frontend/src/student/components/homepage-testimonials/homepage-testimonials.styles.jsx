import styled from 'styled-components';

export const TestimonialContainer = styled.div`
  /* margin-top: 100px; */
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin: 2rem 1rem;
    /* padding-top: 1rem; */
    text-align: center;
    /* border: 1px solid black; */
    /* font-size: 35px; */
  }
`;

export const TestimonialTitleWrapper = styled.div`
  margin: 100px 2rem;
`;

export const TestimonialTitle = styled.h1`
  font-size: 40px;
`;

export const TestimonialCardsContainer = styled.div`
  display: -webkit-box;
  overflow-x: auto;
  margin: 5rem 13rem;

  @media screen and (max-width: 768px) {
    margin: 2rem 8rem;
  }
`;
