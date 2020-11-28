import React from 'react'
import styled from 'styled-components'

export const AssignmentStartPage = styled.div`
    display: flex;
`;

export const AssignmentStartDiv = styled.div`
    padding: 10vh 10vw;
`;

export const AssignmentHeading  =styled.div`
font-size: 2rem;
color: #7b7b70;
font-weight: 550;
font-family: var(--font-style);
border-bottom: 2px solid black;
width: 8em;
`;

export const AssignmentDetails = styled.div`
    margin: 10vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 30vh;

`;

export const AssignmentTitle = styled.div`
color: #7b7b70;
font-family: var(--font-style);
`;

export const AssignmentDuration = styled.div`
font-family: var(--font-style);
color: #7b7b70;
`;

export const AssignmentHighestScore = styled.div`
font-family: var(--font-style);
display: flex;
color: #7b7b7b;

`;

export const AssignmentAttemptsLeft = styled.div`

`;

export const StartBtn = styled.button`
    border-radius: 25%,
    border: 1px solid black;
    padding: 0.5rem;
    background-color: white;
    border-radius: 30vh;
    color: #7b7b7b;
    font-weight: 600;
`

export const NextAssignmentText = styled.div`
    text-align: center;
    font-size: 1rem;
`

export const AssignmentHighestScores = styled.div`
 color: blue;
`;