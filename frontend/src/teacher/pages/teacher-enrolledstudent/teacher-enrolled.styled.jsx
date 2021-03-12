import styled from 'styled-components';

export const Body = styled.div`
display: flex;
flex-direction: row;
`;

export const Container = styled.div`
width: 50vw;
`;


export const CafeTableWrapper = styled.div`
display: flex;
margin-top: 11vh;
margin-left: 21vw; 
 flex-direction: column;
  // border: 4px solid yellow;
`;

export const CafeDetailsParentWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  /* min-height: 35%; */
  /* border: 4px solid yellow; */
`;

export const TableWrapper = styled.div`
 width: 1000px;
 margin-left: 1vh;
 margin-top:0.5vh;
`;

export const CafeDetailWrapper = styled.div`
margin-top: 2vh;
margin-left: 3vw;
height: 35vh
`

export const NavBar = styled.div`
background: #ffffff;
  height: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  position: sticky;
  top: 0;
  z-index: 10;
  border: 4px solid black;
  font-family: 'Montserrat', sans-serif;
`

export const SideNav = styled.div`
width: 20vw;
height: 89vh;
background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;
  border: 4px solid black;
  font-family: 'Montserrat', sans-serif;
`



export const EnrolledCoursesWrapper = styled.div`
display: flex;
width: 100vw;
overflow-x: auto;
overflow-y: hidden;
`;

export const TextTitle = styled.div`
width: 100%;
  height: 25px;
  /* border: 2px solid red; */
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;
