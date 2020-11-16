import React, { Component } from 'react';
import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  background-color: #fff;
  /* margin: 3rem 5rem; */
  margin: 3rem 5rem 0 5rem;
`;

export const AboutTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 35px;
  }
`;

export const AboutInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 2.5rem;

  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin: 2rem 0;
  }
`;
