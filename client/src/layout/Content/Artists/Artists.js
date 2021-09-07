import ArtistsFilter from '../../../modules/artists/components/ArtistsFilter';
import FilteredArtists from '../../../modules/artists/components/FilteredArtists';
import {useQuery} from 'react-query';
import { listArtists } from '../../../modules/artists/api/api-artists';
import { Redirect } from 'react-router-dom';
import SpinLoader from '../../../components/SpinLoader';

const Artists = () => {
  const {data: artists = [], isLoading, isError } = useQuery('artists', () => listArtists().then(res => res.json()).then(data => data));

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className='artists-page'>
      <ArtistsFilter />
      {isLoading ? (<SpinLoader />) : (<FilteredArtists specialty='All artists' artists={artists} />)}

    </div>
  );
};

export default Artists;
