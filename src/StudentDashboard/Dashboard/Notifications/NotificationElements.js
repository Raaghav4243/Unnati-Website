import React from 'react';
import styled from 'styled-components';

export const Notification = styled.div`
    height: auto;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`;

export const NotificationDiv = styled.div`
    height: auto;
    width: 70vw;
    border: 1px solid black;
    padding: 0.5vh 0;
    display: flex;
    flex-direction: row;
    margin: 0.5vh 0;
    border-left: 2px solid red;

`;

export const NotificationIcon = styled.img`
    height: var(--icon-size);
    padding: 0 0.5vw;
`;

export const NotificationText = styled.div`
    color: #7b7b7b;
    font-weight: 500;
`;