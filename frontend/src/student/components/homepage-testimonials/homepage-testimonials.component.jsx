import React from 'react';
import TestimonialCard from './homepage-testimonials-card.component';
import {
  TestimonialCardsContainer,
  TestimonialContainer,
  TestimonialTitle,
  TestimonialTitleWrapper,
} from './homepage-testimonials.styles';
const Testimonials = () => {
  return (
    <>
      <TestimonialContainer id='testimonials'>
        <TestimonialTitleWrapper>
          <TestimonialTitle>STUDENT STORIES</TestimonialTitle>
        </TestimonialTitleWrapper>
        <TestimonialCardsContainer>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </TestimonialCardsContainer>
      </TestimonialContainer>
    </>
  );
};

export default Testimonials;
