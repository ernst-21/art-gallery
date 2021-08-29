import React from 'react';
import ArtworksCarousel from './ArtworksCarousel';
import FeaturedArtworks from './FeaturedArtworks';
import RecommendedArtists from '../Artists/RecommendedArtists';

const Home = () => {
  return (
    <div className='home-page'>
      <ArtworksCarousel />
      <FeaturedArtworks />
      <RecommendedArtists />
    </div>
  );
};

export default Home;
