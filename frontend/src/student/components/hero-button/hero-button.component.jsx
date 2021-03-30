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
  background-color: ${({ background_color }) =>
    background_color ? background_color : '#fff'};
  /* padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')}; */
  width: ${({ big }) => (big ? '200px' : '180px')};
  height: ${({ big }) => (big ? '50px' : '45px')};
  transition: all 0.2s ease-in-out, font-weight 0ms;

  &:hover {
    transition: all 0.2s ease-in-out, font-weight 0ms;
    background-color: ${({ background_color_on_hover }) =>
      background_color_on_hover ? background_color_on_hover : '#fff'};
    border: ${({ border_on_hover }) =>
      border_on_hover ? border_on_hover : '#000'};
    color: ${({ color_on_hover }) =>
      color_on_hover ? color_on_hover : '#000'};
    font-weight: bolder;
  }
`;

export default HeroButton;
