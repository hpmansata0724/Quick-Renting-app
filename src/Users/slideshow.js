import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import p1 from '../images/I1.jpg';
import p2 from '../images/I2.jpg';
import p3 from '../images/I3.jpg';
import p5 from '../images/I5.jpg';

import './Slideshow.css';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <button className="slick-prev"></button>,
    nextArrow: <button className="slick-next"></button>
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
       
        <div>
          <img src={p5} alt="slide2" />
        </div>
        
        <div>
          <img src={p3} alt="slide2" />
        </div>
        <div>
          <img src={p2} alt="slide2" />
        </div>
        <div>
          <img src={p1} alt="slide2" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
