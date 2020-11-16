import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TestimonialsTitle = styled.h2`
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 2rem;

  @media screen and (max-width: 900px) {
    font-size: 35px;
  }
`;
