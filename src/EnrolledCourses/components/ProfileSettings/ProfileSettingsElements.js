import React from 'react';
import styled from 'styled-components'

export const ProfileSettings = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 1vh 0 0 0
`

export const ProfileSettingsHeading = styled.div`
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 550;
    color: #7b7b7b;
    font-size: var(--heading-font);
    padding: 1vh 1vw;
    @media screen and (max-width: 900px){
        font-size: var(--heading-font-small);
    }
`

export const ProfileSettingsOption = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 1vh 1vw;
`

export const ProfileSettingsIcon = styled.img`
    height: var(--icon-size);
    @media screen and (max-width: 900px){
        height: var(--icon-size-small);
    }
`

export const ProfileSettingsText = styled.div`
    margin: 0;
    font-size: var(--subheading-font);
    color: #7b7b7b;
    padding: 0 1vw 0 1vw;
    @media screen and (max-width: 900px){
        font-size: var(--subheading-font-small);
    }
`