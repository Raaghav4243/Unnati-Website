import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoToHomepageLink = styled(Link)`
  /* font-family: 'Montserrat'; */
  justify-content: space-between;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-align: nowrap;

  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    /* padding-left: 10%; */
    font-size: 1.25rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 1rem;
    /* padding-left: 10%; */
  }
`;

export const Name = styled.p`
  color: ${({ fontColor }) => (fontColor ? fontColor : '#ffffff')};
  text-align: nowrap;
  /* font-family: 'Montserrat'; */
  font-weight: 500;
  letter-spacing: 2px;
  padding-left: 10px;
  /* width: 160px; */
`;
