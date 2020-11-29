import React from 'react'
import styled from 'styled-components'

export const DueAssignments = styled.div`
    
`;

export const DueAssignmentsHeading = styled.div`
font-size: 1.6rem;
color: #7b7b70;
font-weight: 550;
font-family: var(--font-style);
`;

export const DueAssignmentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding 1vh 1vw;
    box-shadow: 0 20px 20px rgba(0,0,0,0.06);
    overflow: scroll;
    height: 30vh;
    box-shadow: 0 20px 20px rgba(0,0,0,0.06);
    font-family: var(--font-style);
    ::-webkit-scrollbar {
        width: 0px;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */}
    
`;

export const DueAssignmentsDate = styled.div`
        color: #7b7b7b;
        font-family: var(--font-style);

`;

export const DueAssignmentsTopic = styled.div`
font-family: var(--font-style);
padding: 0 1vw;
`;

export const DueAssignmentsContent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.6vh 0;
`;