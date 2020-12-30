import styled from 'styled-components';

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

//export const SideNav = styled.div`
//width: 20vw;
//height: 89vh;
//background: #ffffff;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  font-size: 2.5vw;
//  border: 4px solid black;
//  font-family: 'Montserrat', sans-serif;
//`

export const CourseVideoPage = styled.div`
display: flex;
flex-direction: row;
`;

export const CourseVideoPDFContainer = styled.div`
  padding-top: 6vh;
  height: 75vh;
  width: 80vw;
  display: flex;
  flex-direction: column;

`;
