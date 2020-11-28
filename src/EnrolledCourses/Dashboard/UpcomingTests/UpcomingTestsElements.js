import styled from 'styled-components'

export const UpcomingTests = styled.div`
    margin: 2vh 0 0 0;
`;

export const UpcomingTestsHeading = styled.div`
font-size: var(--heading-font);
color: #7b7b70;
font-weight: 550;
font-family: var(--font-style);
`;

export const UpcomingTestsDiv = styled.div`
box-shadow: 0 20px 20px rgba(0,0,0,0.06);
    padding: 2vh 1vw;
    overflow: scroll;
    height: 23vh;
    box-shadow: 0 20px 20px rgba(0,0,0,0.06);
    ::-webkit-scrollbar {
        width: 0px;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */}
`;

export const UpcomingTestsContent = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 38vw;
        padding: 1vh 0;

        
`;

export const UpcomingTestsDate = styled.div`
font-family: var(--font-style);
font-size: 0.85rem;
color: #7b7b7b;
`;

export const UpcomingTestsCourse = styled.div`
font-family: var(--font-style);
font-size: 0.85rem;
color: #7b7b7b;
`;

export const UpcomingTestsTopic = styled.div`
font-family: var(--font-style);
font-size: 0.85rem;
`;