import React, { Component } from 'react';
import { CarouselContent } from './Carousel';
import { carouselSlidesData } from './data';
class Carousel extends Component {
  render() {
    return <CarouselContent slides={carouselSlidesData}></CarouselContent>;
  }
}

export { Carousel };
