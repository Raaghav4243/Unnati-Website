import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

import {
  TestimonialItem,
  UpperWrapper,
  ImgContainer,
  Profile,
  Position,
  Name,
  Job,
  LowerWrapper,
  Quote,
  Info,
} from './TestimonialCardElements';

const TestimonialCard = ({ img, name, job, info }) => {
  return (
    <TestimonialItem>
      <UpperWrapper>
        <ImgContainer>
          <Profile src={img} alt={name}></Profile>
        </ImgContainer>
        <Position>
          <Name>{name}</Name>
          <Job>{job}</Job>
        </Position>
      </UpperWrapper>
      <LowerWrapper>
        <Quote>
          <FaQuoteLeft />
        </Quote>
        <Info>{info}</Info>
      </LowerWrapper>
    </TestimonialItem>
  );
};

export default TestimonialCard;
