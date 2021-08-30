import React from 'react';
import ArtworksCarousel from '../../../modules/artworks/ArtworksCarousel';
import FeaturedArtworks from '../../../modules/artworks/FeaturedArtworks';
import RecommendedArtists from '../../../modules/artists/RecommendedArtists';

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
