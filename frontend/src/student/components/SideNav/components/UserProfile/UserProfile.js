import React from 'react';
import styled from 'styled-components';

export const UserProfile = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
  
`

export const ImgWrap = styled.div`
  height: var(--profile-pic);
  align-self: center;
  margin: 2vh 0 0 0;
`;

export const UserImage = styled.img`
    height: 100%
`;

export const UserName = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding: 1.3vh 1vw;
    font-size: 2.5rem;
    font-weight: 540;
    @media screen and (max-width: 900px){
        font-size: 1.6rem;
    }
`