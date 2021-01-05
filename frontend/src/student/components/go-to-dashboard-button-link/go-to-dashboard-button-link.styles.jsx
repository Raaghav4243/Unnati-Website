import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoToDashboardButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px;
  outline: none;
  /* border: 1px solid black; */
  cursor: pointer;
  color: ${({ color }) => (color ? color : '#000')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
  /* padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')}; */
  width: ${({ big }) => (big ? '200px' : '180px')};
  height: ${({ big }) => (big ? '50px' : '45px')};
  transition: all 0.2s ease-in-out, font-weight 0ms;

  &:hover {
    transition: all 0.2s ease-in-out, font-weight 0ms;
    background-color: ${({ backgroundColorOnHover }) =>
      backgroundColorOnHover ? backgroundColorOnHover : '#fff'};
    border: ${({ borderOnHover }) => (borderOnHover ? borderOnHover : '#000')};
    color: ${({ colorOnHover }) => (colorOnHover ? colorOnHover : '#000')};
  }

  &.scroll {
    background-color: #f8971d;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 10px;
    font-size: 0.75rem;
  }
`;
