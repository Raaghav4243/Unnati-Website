import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoToDashboardButtonLink = styled(Link)`
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
  width: ${({ big }) => (big ? '200px' : '180px')};
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
    /* font-size: 0.6rem; */
  }
`;
