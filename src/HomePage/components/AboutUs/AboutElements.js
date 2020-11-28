import React, { Component } from "react";
import styled from "styled-components";

export const AboutUsContainer = styled.div`
  background-color: #fff;
  margin: 3rem 0rem;
`;

export const AboutTitleContainer = styled.div`
  /* margin: 10px 0; */
  margin: 2rem 0;
`;

export const AboutTitle = styled.h1`
  font-size: calc(30px + 1vw);
  font-weight: bold;
  text-align: center;

  /* @media screen and (max-width: 900px) {
    font-size: 35px;
  } */
`;

export const AboutInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* margin: 2rem 2.5rem; */
  /* 
  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin: 2rem 0;
  } */

  margin: 0 calc(30px + 10vw);
`;
