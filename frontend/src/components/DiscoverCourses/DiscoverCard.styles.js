import styled from 'styled-components';

export const MoreCourses = styled.div
` display: flex;
flex-direction: column;
 
`;

export const Boxes = styled.div
` display: flex;
display: inline-block;
height: 30vh;
width:100vw;
overflow-x: auto; 
overflow-y: hidden;
`;
export const Box = styled.div
`   display: inline-block;
    border: 1px solid #eee;
    width: 17vw;
    height: 20vh;
  background-image: linear-gradient(to right, #1E8983  , #0DC985);
     border-radius: 20px;
    margin-top:10px;
  `;
  
export const ConfirmChanges = styled.button
`display: inline-block;
    width: 13vw;
    height: 4.5vh;
    background-color: #ffffff;
     border-radius: 12px;
    margin-left:2vw;
    margin-top:2vh;
    border:none;
    color: #11BB85;
    ;
    
`
export const EnrolledCourseDetails = styled.div`
 display: flex;
`
export const EnrolledCourseImg = styled.img`
height: 10vh;
margin-top:1.5vh;
`
export const EnrolledCourseName = styled.div`
    margin-top:3vh;
    font-size: 1.3em;
    color: white;
`