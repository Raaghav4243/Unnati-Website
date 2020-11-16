import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselContainer } from './CourseCarouselElements';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CourseCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel style={{ height: '50%', width: '50%', margin: 'auto' }}>
        <Carousel.Item>
          <img
            src='https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            alt='First slide'
            style={{ height: '100%', width: '100%', display: 'block' }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='https://images.unsplash.com/photo-1602526430780-782d6b1783fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            alt='Second slide'
            style={{ height: '100%', width: '100%', display: 'block' }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            alt='Third slide'
            style={{ height: '100%', width: '100%', display: 'block' }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
};

export default CourseCarousel;
