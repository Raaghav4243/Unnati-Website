import React from 'react';
import styled from 'styled-components';
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>

export const NavBar = styled.div`
/* border: 1px solid #000; */

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



export const PersonalDetailsHeading = styled.div`
/* border: 1px solid #000; */
/* margin-top:0vw; */
padding-left:1vw;
padding-top: 1vh;
padding-bottom: 1vh;
margin-bottom: 1.9vh;
border-radius: 2px;
/* color:#888888; */
color:#000;
background-color:#ffc222;
font-weight: 400;
font-size: 1.5vw;
font-family: 'Montserrat', sans-serif;
`;

export const ProfileDetailsContainer = styled.form`
display: inline-block;
/* border: 1px solid #000; */
border-radius: 5px;
box-shadow: 0px 1.5px 1.5px  #888;
width: 60vw;
height: 36vh;
margin-left: 4vw;
margin-bottom: 1vh;
/* overflow: visible; */
/* margin-top:1vh; */
/* justify-content:space-evenly; */
/* display: flex; */
/* flex-direction: column; */
/* font-family: 'Montserrat', sans-serif; */
`

export const ProfileHeading = styled.div`
margin-top: 7vh;
margin-left:4vw;
font-size: 4vw;
/* border: 1px solid #000; */

color:#888888;
font-weight: 550;
font-size: 4vh;
`

export const ContainerWrapper = styled.div`
padding-left: 1vw;
display: flex;
flex-direction: column;
flex-wrap: wrap;
/* border: 1px solid #000; */

font-family: 'Montserrat', sans-serif;
/* margin-top: 10vh; */
/* margin-left: 21vw; */
`

export const CafeDetailsContainer = styled.div`
display: inline-block;
border: 1px solid #eee;
border-radius: 5px;
/* box-shadow: 0px 1px 1px  #000; */
box-shadow: 0px 1.5px 1.5px  #888;

width: 60vw;
height: 21vh;
/* border: 1px solid #000; */

margin-left: 4vw;
margin-top:5vh;
/* overflow: visible; */
/* justify-content:space-evenly; */
/* display: flex; */
/* flex-wrap: wrap; */
/* flex-direction: column; */
font-family: 'Montserrat', sans-serif;
`

export const PageWrapper = styled.div`
display: flex;  
flex-direction: row;
font-family: 'Montserrat', sans-serif;
/* border: 1px solid #000; */

`

export const DetailsHeading = styled.label`
font-style: italic;
font-size: 1.3vw;
text-align: center;
font-family: 'Montserrat', sans-serif;
/* border: 1px solid #000; */

`

export const DetailsWrapper = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
/* border: 1px solid #000; */

`

export const Details = styled.input`
display: inline-block;
border: 1px solid #696969;
border: 1px solid #000;
width: 14vw;
height: 4vh;
margin-bottom:2.5vh;
margin-top:0.1vh;

justify-content:space-evenly;
display: flex;
flex-direction: column;
border-radius: 5px;
text-align:center;
font-size: 1.3vw;
font-family: 'Montserrat', sans-serif;
`

export const CafeInfo = styled.div`
/* display: inline-block;
border: 1px solid #696969;
width: 14vw;
height: 4vh;
margin-top:1vh;
justify-content:space-evenly;
display: flex;
flex-direction: column;
border-radius: 15px;
text-align:center;
font-size: 1.5vw;
font-family: 'Montserrat', sans-serif; */
display: inline-block;
border: 1px solid #696969;
border: 1px solid #000;
width: 14vw;
height: 4vh;
margin-bottom:2.5vh;
margin-top:0.5vh;
justify-content:space-evenly;
display: flex;
flex-direction: column;
border-radius: 5px;
text-align:center;
font-size: 1.3vw;
font-family: 'Montserrat', sans-serif;
/* border: 1px solid #000; */

`

export const WrapperContainer = styled.div`  
display: flex;
/* width: 4vw; */
/* margin-left: 10vw */
flex-direction:column;
flex-wrap: wrap;
/* border: 1px solid #000; */

`

export const ButtonWrapper = styled.div`  
/* display: flex; */
width: 12vw;
margin-left: 44.3vw;
margin-top: 0.5vh;
margin-bottom:1vh;
/* flex-direction:column; */
/* flex-wrap: wrap; */
/* border: 1px solid #000; */

`

export const SaveButton = styled.button`  
width: 10vw;
display: flex;
justify-content: center;
font-size: 14px;
border-radius: 10px;
color: #2475b0;
background-color: #ffffff;
cursor: pointer;
/* border: 1px solid blue; */
margin-left:20vw;
`

// import React from 'react';
// import styled from 'styled-components';
// <link
//   href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
//   rel='stylesheet'
// ></link>;

// export const NavBar = styled.div`
//   background: #ffffff;
//   height: 11vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 2vw;
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   border: 4px solid black;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const SideNav = styled.div`
//   width: 20vw;
//   height: 89vh;
//   background: #ffffff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 2.5vw;
//   border: 4px solid black;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const PersonalDetailsHeading = styled.div`
//   margin-top: 0.8vw;
//   margin-left: 1vw;
//   color: #888888;
//   font-weight: 400;
//   font-size: 2vw;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const ProfileDetailsContainer = styled.form`
//   display: inline-block;
//   border: 1px solid #eee;
//   border-radius: 6px;
//   box-shadow: 1px 3px 3px 2px #d3d3d3;
//   width: 60vw;
//   height: 35vh;
//   margin-left: 4vw;
//   overflow: visible;
//   margin-top: 1vh;
//   justify-content: space-evenly;
//   display: flex;
//   flex-direction: column;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const ProfileHeading = styled.div`
//   margin-top: 7vh;
//   margin-left: 4vw;
//   font-size: 4vw;
//   color: #888888;
//   font-weight: 550;
//   font-size: 4vh;
// `;

// export const ContainerWrapper = styled.div`
//   padding-left: 1vw;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const CafeDetailsContainer = styled.div`
//   display: inline-block;
//   border: 1px solid #eee;
//   border-radius: 6px;
//   box-shadow: 1px 3px 3px 2px #d3d3d3;
//   width: 60vw;
//   height: 25vh;
//   margin-left: 4vw;
//   margin-top: 5vh;
//   overflow: visible;
//   justify-content: space-evenly;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const PageWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const DetailsHeading = styled.label`
//   font-style: italic;
//   font-size: 1.5vw;
//   text-align: center;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const DetailsWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `;

// export const Details = styled.input`
//   display: inline-block;
//   border: 1px solid #696969;
//   width: 14vw;
//   height: 4vh;
//   margin-top: 1vh;
//   justify-content: space-evenly;
//   display: flex;
//   flex-direction: column;
//   border-radius: 15px;
//   text-align: center;
//   font-size: 1.5vw;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const CafeInfo = styled.div`
//   display: inline-block;
//   border: 1px solid #696969;
//   color: #888888;
//   width: 14vw;
//   height: 4vh;
//   margin-top: 1vh;
//   justify-content: space-evenly;
//   display: flex;
//   flex-direction: column;
//   border-radius: 15px;
//   text-align: center;
//   font-size: 1.5vw;
//   font-family: 'Montserrat', sans-serif;
// `;

// export const WrapperContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
// `;
