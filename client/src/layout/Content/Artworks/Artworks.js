import { useState } from 'react';
import FilteredArtworks from '../../../modules/artworks/components/FilteredArtworks';
import ArtworksFilter from '../../../modules/artworks/components/ArtworksFilter/ArtworksFilter';
import {
  listArtworks,
  searchArtworks
} from '../../../modules/artworks/api/api-artworks';
import { useQuery, useMutation } from 'react-query';
import SpinLoader from '../../../components/SpinLoader';
import { Redirect } from 'react-router-dom';

const Artworks = () => {
  const [filteredArtworks, setFilteredArtworks] = useState([]);

  const { data: receivedArtworks = [], isLoading, isError } = useQuery(
    'artworks',
    () =>
      listArtworks()
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: () => setFilteredArtworks(receivedArtworks),
      staleTime: Infinity,
      cacheTime: Infinity
    }
  );

  const { mutate: searchMutation, status } = useMutation(
    (filter) =>
      searchArtworks(filter)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        setFilteredArtworks(data);
      }
    }
  );

  if (isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="artworks-page">
      {filteredArtworks && <ArtworksFilter searchMutation={searchMutation} />}
      {isLoading ? (
        <SpinLoader />
      ) : filteredArtworks.length > 0 ? (
        <FilteredArtworks title="Artworks" artworks={filteredArtworks} />
      ) : (
        <FilteredArtworks title="No artworks to display" artworks={[]} />
      )}
    </div>
  );
};

export default Artworks;
