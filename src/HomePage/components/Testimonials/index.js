import React from 'react';
import TestimonialCard from './TestimonialCard';
import {
  TestimonialCardsContainer,
  TestimonialContainer,
  TestimonialTitle,
  TestimonialTitleWrapper,
} from './TestimonialElements';
const Testimonial = () => {
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
          <TestimonialCard />
        </TestimonialCardsContainer>
      </TestimonialContainer>
    </>
  );
};

export default Testimonial;
