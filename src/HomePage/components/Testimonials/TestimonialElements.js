import styled from 'styled-components';

export const TestimonialContainer = styled.div`
  margin: 0 2rem;
  text-align: center;
`;

export const TestimonialTitleWrapper = styled.div`
  margin: 0rem 2rem;
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
