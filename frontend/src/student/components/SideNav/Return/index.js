import React from 'react';
import styled from 'styled-components';
import { ReturnDiv, ReturnIcon, ReturnText } from './ReternElements';
import home from '../../../icons/home.svg';

const ReturnBtn = () => {
  return (
    <ReturnDiv>
      <ReturnIcon src={home} />
      <ReturnText>Back To Home</ReturnText>
    </ReturnDiv>
  );
};

export default ReturnBtn;
