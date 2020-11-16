import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const SignUpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem 4rem 1rem;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  width: 450px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const SignUpTitle = styled.h1`
  font-size: 2rem;
  color: #000;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 450px;
  margin: 1rem;
  border: 1px solid #000;
  border-radius: 3rem;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #000;

  &:hover {
    background: red;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const SignUpButton = styled(Link)`
  font-size: 1.75rem;
  text-decoration: none;
  color: #000;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 1rem;

  &:hover {
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
