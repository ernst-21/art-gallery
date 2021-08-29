import React from 'react';
import { Carousel } from 'antd';
import { forCarousel } from '../../../mockData';

const ArtworksCarousel = () => {
  return (
    <Carousel>
      {forCarousel.map((item, i) => (
        <div className="carousel-image-container" key={i}>
          <img className='carousel-image' src={item.url} alt="carousel-photo" />
          <span className='promo-text' >{item.promo}</span>
        </div>
      ))}
    </Carousel>
  );
};

export default ArtworksCarousel;
