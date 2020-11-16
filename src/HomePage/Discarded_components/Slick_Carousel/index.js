import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
// import './index.css';

class Slick_Carousel_One extends React.Component {
  render() {
    var settings = {
      dots: true,
      slidesToShow: 4,
    };
    return (
      <div className='container'>
        <Slider {...settings}>
          <div>
            <h3>Kitty</h3>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
        </Slider>
      </div>
    );
  }
}

export { Slick_Carousel_One };
