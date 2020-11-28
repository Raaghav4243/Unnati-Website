import styled from 'styled-components'

export const AssignmentPageDiv = styled.div`
padding: 4vh 0 0 6vw;
`;

export const AssignmentPageHeading = styled.div`
font-size: 2rem;
color: #7b7b70;
font-weight: 550;
font-family: var(--font-style);
border-bottom: 2px solid black;
width: 8em;
`;

export const AssignmentPageQuestionsDiv = styled.div`
margin-top: 5vh;
overflow: scroll;
    height: 60vh;
    box-shadow: 0 20px 20px rgba(0,0,0,0.06);
    ::-webkit-scrollbar {
        width: 0px;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */}

`;

export const AssignmentQuestionsDiv = styled.form`
    padding: 1rem;

`; 

export const AssignmentQuestions = styled.label`

`;

export const AssignmentOptions = styled.input`

`;

export const AssignmentSubmitBtn = styled.button`
        padding: 0.2rem;
        margin: 3vh 0 0 30vw; 

`;


