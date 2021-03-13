import styled from 'styled-components';

export const Body = styled.div`
display: flex;
flex-direction: row;
`;

export const Container = styled.div`
width: 50vw;
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  width: 100%;
  /* min-height: calc(100vh - 100px); */
  /* border: 4px solid black; */
`;

export const CafeDetailsParentWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  /* min-height: 35%; */
  /* border: 4px solid yellow; */
`;
export const PageWrapper = styled.div`
  margin-top: 90px;
  margin-left: 21vw;
  /* margin-right: 20px; */
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* overflow: scroll; */
  /* min-height: calc(100vh - 100px); */
  /* height: calc(100vh - 90px); */
  /* height: calc(100vh-75px); */
  width: calc(100% - 320px);
  /* border: 4px solid red; */

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    width: 100%;
    /* margin-left: 10px; */
    /* margin-right: 0; */
  }
`;

export const CafeTableWrapper = styled.div`
display: flex;
margin-top: 11vh;
margin-left: 21vw; 
 flex-direction: column;
  // border: 4px solid yellow;
`;


export const TableWrapper = styled.div`
 width: 1000px;
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
