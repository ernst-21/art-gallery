import React from 'react';
import { Carousel } from 'antd';
import { forCarousel } from '../../mockData';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 7000,
  cssEase: 'ease-in-out'
};

const ArtworksCarousel = () => {
  return (
    <Carousel {...settings}>
      {forCarousel.map((item, i) => (
        <div className="carousel-image-container" key={i}>
          <img className="carousel-image" src={item.url} alt="carousel-photo" />
          <span className="promo-text">{item.promo}</span>
        </div>
      ))}
    </Carousel>
  );
};

export default ArtworksCarousel;
