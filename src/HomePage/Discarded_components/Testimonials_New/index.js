import React from 'react';
import {
  TestimonialCardOne,
  TestimonialCardTwo,
  TestimonialCardThree,
  TestimonialCardFour,
  TestimonialCardFive,
  TestimonialCardSix,
} from './data';

import {
  TestimonialsContainer,
  TestimonialsTitle,
} from './TestimonialsElements';

import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <TestimonialsContainer id='testimonials'>
      <TestimonialsTitle>Student Stories</TestimonialsTitle>
      <TestimonialCard {...TestimonialCardOne} />
    </TestimonialsContainer>
  );
};

export default Testimonials;
