import FilteredArtworks from '../../../modules/artworks/FilteredArtworks';
import ArtworksFilter from '../../../modules/artworks/ArtworksFilter';

const Artworks = () => {
  return (
    <div className="artworks-page">
      <ArtworksFilter />
      <FilteredArtworks />
    </div>
  );
};

export default Artworks;
