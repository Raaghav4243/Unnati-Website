import styled from 'styled-components';

export const Nav = styled.div`
  background: #000000;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
  /* border: 10px solid orange; */
  width: 100vw;
  @media screen and (max-width: 425px) {
    /* font-size: 1.5rem; */
    /* position: static; */
    /* max-width: 100px; */
    /* display: none; */
    justify-content: space-around;
  }
`;

export const DashboardButtonWrapper = styled.div`
  /* margin-right: auto; */
  position: absolute;
  left: 10px;

  @media screen and (max-width: 550px) {
    /* font-size: 1.5rem; */
    /* position: static; */
    max-width: 100px;
    /* display: none; */
  }

  @media screen and (max-width: 425px) {
    /* font-size: 1.5rem; */
    position: static;
    /* max-width: 100px; */
    /* display: none; */
  }
`;
