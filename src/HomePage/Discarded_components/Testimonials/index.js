import React, { Component } from 'react';
import { testimonialSlidesData as carouselSlidesdata } from './data';
import Carousel from './Carousel';

class Testimonial extends Component {
  render() {
    return (
      <div>
        <Carousel slides={carouselSlidesdata} />
      </div>
    );
  }
}

export default Testimonial;
