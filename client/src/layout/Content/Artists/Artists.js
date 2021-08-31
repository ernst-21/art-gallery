import ArtistsFilter from '../../../modules/artists/ArtistsFilter';
import FilteredArtists from '../../../modules/artists/FilteredArtists';

const Artists = () => {
  return (
    <div className='artists-page'>
      <ArtistsFilter />
      <FilteredArtists />
    </div>
  );
};

export default Artists;
