import React from 'react';
import ArtworksCarousel from '../../../modules/artworks/components/ArtworksCarousel';
import FeaturedArtworks from '../../../modules/artworks/components/FeaturedArtworks';
import RecommendedArtists from '../../../modules/artists/components/RecommendedArtists';

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
