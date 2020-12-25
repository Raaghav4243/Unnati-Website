import styled from 'styled-components';
import { Link } from 'react-scroll';

// const HeroButton = styled(Link)`
//   width: 180px;
//   background-color: ${({ backgroundColor }) =>
//     backgroundColor ? backgroundColor : '#fff'};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background-color */
// `;

const HeroButton = styled(Link)`
  border-radius: 50px;
  /* background: ${({ primary }) => (primary ? '#ffffff' : '#ffffff')}; */
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};

  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ color }) => (color ? color : '#010606')};
  /* color: ${({ dark }) => (dark ? '#010606' : '#fff')}; */
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out, font-weight 0ms;
    /* background: ${({ primary }) => (primary ? '#fff' : '#01BF71')}; */
    background-color: ${({ backgroundColorOnHover }) =>
      backgroundColorOnHover ? backgroundColorOnHover : '#fff'};
    color: ${({ colorOnHover }) => (colorOnHover ? colorOnHover : '#000')};
    /* font-weight: bolder; */
    border: ${({ borderOnHover }) => (borderOnHover ? borderOnHover : '#000')};
  }
`;

export default HeroButton;
