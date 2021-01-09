import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInBtnLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px;
  outline: none;
  /* border: 0.5px solid black; */
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.9);
  cursor: pointer;
  color: ${({ color }) => (color ? color : '#000')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
  /* padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')}; */
  width: ${({ big }) => (big ? '200px' : '120px')};
  height: ${({ big }) => (big ? '50px' : '45px')};
  transition: all 200ms ease-in-out;

  &:hover {
    transition: all 200ms ease-in-out;
    background-color: ${({ backgroundColorOnHover }) =>
      backgroundColorOnHover ? backgroundColorOnHover : '#fff'};
    /* border: ${({ borderOnHover }) =>
      borderOnHover ? borderOnHover : '1px solid #000'}; */
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.9);
    color: ${({ colorOnHover }) => (colorOnHover ? colorOnHover : '#000')};
  }

  &.scroll {
    background-color: #f8971d;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    /* width: 90%; */
    height: auto;
    padding: 10px;
    font-size: 0.75rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

// export const SignInBtnLink = styled(Link)`
//   color: #fff;
//   background-color: #f8971d;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   text-decoration: none;
//   transition: all 0.2s ease-in-out;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* For shine */
//   background-repeat: no-repeat;
//   background-position: -120px -120px, 0 0;

//   background-image: -webkit-linear-gradient(
//     top left,
//     rgba(255, 255, 255, 0.2) 0%,
//     rgba(255, 255, 255, 0.2) 37%,
//     rgba(255, 255, 255, 0.8) 45%,
//     rgba(255, 255, 255, 0) 50%
//   );
//   background-image: -moz-linear-gradient(
//     0 0,
//     rgba(255, 255, 255, 0.2) 0%,
//     rgba(255, 255, 255, 0.2) 37%,
//     rgba(255, 255, 255, 0.8) 45%,
//     rgba(255, 255, 255, 0) 50%
//   );
//   background-image: -o-linear-gradient(
//     0 0,
//     rgba(255, 255, 255, 0.2) 0%,
//     rgba(255, 255, 255, 0.2) 37%,
//     rgba(255, 255, 255, 0.8) 45%,
//     rgba(255, 255, 255, 0) 50%
//   );
//   background-image: linear-gradient(
//     0 0,
//     rgba(255, 255, 255, 0.2) 0%,
//     rgba(255, 255, 255, 0.2) 37%,
//     rgba(255, 255, 255, 0.8) 45%,
//     rgba(255, 255, 255, 0) 50%
//   );

//   -moz-background-size: 250% 250%, 100% 100%;
//   background-size: 250% 250%, 100% 100%;

//   -webkit-transition: background-position 0s ease;
//   -moz-transition: background-position 0s ease;
//   -o-transition: background-position 0s ease;
//   transition: background-position 0s ease;

//   &:hover {
//     background-position: 0 0, 0 0;

//     -webkit-transition-duration: 0.5s;
//     -moz-transition-duration: 0.5s;
//     transition-duration: 0.5s;
//   }

// `;
