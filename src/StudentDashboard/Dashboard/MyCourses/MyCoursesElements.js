import React from 'react'
import styled from 'styled-components'

export const MyCourses = styled.div` 
    width: 35vw;
    height: 60vh;
    
`;

export const MyCoursesHeading = styled.div`
    font-size: var(--heading-font);
    color: #7b7b70;
    font-weight: 550;
    font-family: var(--font-style);
`;

export const MyCoursesDiv = styled.div`
    box-shadow: 0 20px 20px rgba(0,0,0,0.06);
    padding: 2vh 1vw;
    overflow: scroll;
    height: 60vh;
    box-shadow: 0 20px 20px rgba(0,0,0,0.06);
    ::-webkit-scrollbar {
        width: 0px;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */}
`;

export const MyCoursesCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const MyCoursesInfo = styled.div`

`;

export const MyCoursesTopic = styled.div`
    display: flex;
    flex-diretion: row;
    border-bottom: 2px solid grey;
    width: 15vw;
    text-decoration: none;
`;

export const MyCoursesLogo = styled.img`
    height: 3rem;
    margin: 1vh 0;
`;

export const MyCoursesName = styled.div`
    padding: 1.5vh 1.5vw;
    font-size: 1.3rem

`;

export const PercentageCompletion = styled.div`
    padding: 2vh 1vw 0 0;
    font-size: 1.1rem;
    font-family: var(--font-style);

`;

export const UpNext = styled.div`
    margin: 0 0 0 1.5vw;
    
`;

export const UpNextDiv = styled.div`
    display: flex;
    flex-direction: row;
`; 

export const UpNextLogo = styled.img`
    height: 3rem;
`;

export const UpNextText = styled.div`
    font-weight: 700;
    padding: 1vh 1vw;
`;

export const UpNextInfo = styled.div`

`;

export const UpNextTypeDiv = styled.div`
    font-weight: 500;
    margin: 0;

`;

export const UpNextTopicDiv = styled.div`
    margin: 0;
    width: 15vw;
`;

export const MyCoursesContents = styled.div`
    margin: 4vh 0;

`;

export const TopicsCoveredText = styled.div`
    font-family: var(--font-style);
    font-weight: 550;
`;

export const TopicsCoveredDiv = styled.div`
    margin: 2vh 0;
`;

export const Topics = styled.div`
    display: flex;
    flex-direction: row;
    width: 14vw;
    justify-content: space-between;
    padding: 0.5vh 0;
`;


export const TickLogo = styled.img`
    height: 1.4rem;
`;

export const TopicName = styled.div`

`;