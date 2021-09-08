import {useState} from 'react';
import ArtistsFilter from '../../../modules/artists/components/ArtistsFilter/ArtistsFilter';
import FilteredArtists from '../../../modules/artists/components/FilteredArtists';
import {useQuery, useMutation} from 'react-query';
import { listArtists, searchArtists } from '../../../modules/artists/api/api-artists';
import { Redirect } from 'react-router-dom';
import SpinLoader from '../../../components/SpinLoader';

const Artists = () => {
  const [filteredArtists, setFilteredArtists] = useState([]);

  const {data: artists = [], isLoading, isError } = useQuery('artists', () => listArtists().then(res => res.json()).then(data => data), {
    onSuccess: () => setFilteredArtists(artists),
    staleTime: Infinity,
    cacheTime: Infinity
  });

  const { mutate: searchArtistMutation, status } = useMutation(
    (filter) =>
      searchArtists(filter)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        setFilteredArtists(data);
      }
    }
  );

  if (isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className='artists-page'>
      {filteredArtists && <ArtistsFilter searchArtistMutation={searchArtistMutation} />}
      {isLoading ? (<SpinLoader />) : (filteredArtists.length > 0 ? (<FilteredArtists specialty='Artists' artists={filteredArtists} />) : (<FilteredArtists specialty='No artists to display' artists={[]} />))}

    </div>
  );
};

export default Artists;
