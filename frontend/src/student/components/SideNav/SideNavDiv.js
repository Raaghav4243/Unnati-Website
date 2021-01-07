import React from 'react';
import styled from 'styled-components';

export const SideNavDiv = styled.div`
  /* height: auto;
    width: 18vw;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.06);
    font-family: 'Montserrat', sans-serif; */
  border: 1px solid black;
  width: 300px;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 75px;
  transition: 350ms;
  z-index: 10;
  overflow: auto;
`;
