import styled from 'styled-components'
import React from 'react'

export const ReturnDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2vh 1vw 1.5vh 1vw; 
  align-self: center;
`;

export const ReturnIcon = styled.img`
  height: 1.4rem;
  @media screen and (max-width: 900px){
    height: 1rem;
  }
`

export const ReturnText = styled.div`
  margin: 0;
  font-size: var(--subheading-font);
  color: #7b7b7b;
  padding: 0 1vw 0 1vw;
  @media screen and (max-width: 900px){
    font-size: var(--subheading-font-small);
  }
`