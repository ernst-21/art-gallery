import { useState, useContext } from 'react';
import ArtistsFilter from '../../../modules/artists/components/ArtistsFilter/ArtistsFilter';
import FilteredArtists from '../../../modules/artists/components/FilteredArtists';
import { useQuery, useMutation } from 'react-query';
import {
  listArtists,
  searchArtists
} from '../../../modules/artists/api/api-artists';
import { Redirect } from 'react-router-dom';
import SpinLoader from '../../../components/SpinLoader';
import { ArtistFilterContext } from '../../../context/ArtistFilterContext';

const Artists = () => {
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [title, setTitle] = useState('');
  const { filters } = useContext(ArtistFilterContext);

  const { isLoading, isError } = useQuery(
    'artists',
    () =>
      listArtists()
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: () => searchArtistMutation(filters)
    }
  );

  const { mutate: searchArtistMutation, status } = useMutation(
    (filter) =>
      searchArtists(filter)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        if (data.length > 0) {
          setTitle('Artists');
        } else {
          setTitle('No artists to display');
        }
        setFilteredArtists(data);
      }
    }
  );

  if (isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="artists-page">
      <ArtistsFilter searchArtistMutation={searchArtistMutation} />
      {isLoading ? (
        <SpinLoader />
      ) : (
        <FilteredArtists
          specialty={title.length === 0 ? 'Loading...' : title}
          artists={filteredArtists}
        />
      )}
    </div>
  );
};

export default Artists;
