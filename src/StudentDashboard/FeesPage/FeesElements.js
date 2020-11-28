import React from 'react';
import styled from 'styled-components';
import {Due, Paid} from './FeeAmount'

export const OnlineButton = styled.button
`
    
  margin: 5vh 8vw;
  padding: 1vh 1vw;
  color: whitesmoke;
  background-color: #404040;
  box-shadow: 4px 4px #D3D3D3;
`
export const DueAmount = styled.div
`
  
margin-left:15vh;
font-size: 4vh;

margin-top:4vh;
color:red;
font-size: 1.3rem;
`

export const PaidAmount = styled.div
`margin-left: 15vh;
font-size: 4vh;
margin-top:4vh;
color:green;
font-size: 1.3rem;
`


export const FeesCat = styled.div
`margin-left:3vw;
font-size: 5vh;
margin-top:5vh;
color:#888888;
font-size: 1.5rem;
`
export const FeesBox = styled.div
`
display: inline-block;
border: 1px solid #eee;
 box-shadow: 0px 3px 3px #D3D3D3, 
      -3px 5px 5px #D3D3D3, 3px 3px 5px #D3D3D3;
width: 30vw;
height: 60vh;
margin-left: 4vw;
overflow: visible;
`


export const FeesHead = styled.div
`margin-top: 10vh;
margin-left:4vw;
font-size: 4vh;
color:#888888;
font-weight: 550;
font-size: 1.7rem;u
`

export const BoxAndHead = styled.div
`
display: flex;
flex-direction: column;
`
export const PastHead = styled.div
`
margin-top: 10vh;
margin-left:4vw;
font-size: 4vh;
color:#888888;
font-weight: 550;
font-size: 1.7rem;

`
export const SubCol = styled.div
`
display: inline-block;
border: 1px solid #D3D3D3;
box-shadow:  5px #D3D3D3;
width: 20vw;
height: 60vh;
text-align: center;
color: #7b7b7b;
overflow: visible;
`
export const SubHead = styled.div
`


`
export const SubCol1 = styled.div
`

display: inline-block;
border: 1px solid #D3D3D3;
 box-shadow:  5px #D3D3D3;
width: 25vw;
height: 60vh;
text-align: center;
color: #7b7b7b;
`

export const FlexHeadCol = styled.div
`

display: flex;
`

export const PastBody = styled.div
`

display: inline-block;
border: 1px solid #eee;
 box-shadow: 0px 3px 3px #D3D3D3, 
      -3px 5px 5px #D3D3D3, 3px 3px 5px #D3D3D3;
width: 30vw;
height: 60vh;
margin-left: 4vw;
overflow: visible;
`
export const BothBox = styled.div
`

display: flex;
`
export const FullPage = styled.div
`
display: flex;  
flex-direction: row;

font-family: Montserrat;
`