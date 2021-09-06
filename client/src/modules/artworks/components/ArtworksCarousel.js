import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { forCarousel } from '../../../mockData';

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
        <Link to='/artwork/carousel/stories' key={i}>
          <div className="carousel-image-container">
            <img
              className="carousel-image"
              src={item.url}
              alt="carousel-photo"
            />
            <span className="promo-text">{item.promo}</span>
          </div>
        </Link>
      ))}
    </Carousel>
  );
};

export default memo(ArtworksCarousel);
