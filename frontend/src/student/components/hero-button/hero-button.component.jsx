import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px;
  color: #000000;
  /* text-decoration: none; */
  outline: none;
  border: none;
  cursor: pointer;
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
    font-weight: bolder;
  }
`;

export default HeroButton;
