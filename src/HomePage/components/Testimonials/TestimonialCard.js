import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { VscQuote } from 'react-icons/vsc';
import {
  CardContainer,
  CardUpper,
  ImageWrapper,
  Image,
  JobWrapper,
  NameTag,
  JobTag,
  CardLower,
  QuoteWrapper,
  InfoWrapper,
} from './TestimonialCardElements';

const TestimonialCard = () => {
  return (
    <CardContainer>
      <CardUpper>
        <ImageWrapper>
          <Image
            src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            alt='profile_pic'
          />
        </ImageWrapper>
        <JobWrapper>
          <NameTag>JAKE PERALTA</NameTag>
          <JobTag>B99 Associate</JobTag>
        </JobWrapper>
      </CardUpper>
      <CardLower>
        <QuoteWrapper>
          <VscQuote />
        </QuoteWrapper>
        <InfoWrapper>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation aliquip ex ea commodo
            consequat."
          </p>
        </InfoWrapper>
      </CardLower>
    </CardContainer>
  );
};

export default TestimonialCard;
