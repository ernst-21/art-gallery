import { useState, useContext } from 'react';
import FilteredArtworks from '../../../modules/artworks/components/FilteredArtworks';
import ArtworksFilter from '../../../modules/artworks/components/ArtworksFilter/ArtworksFilter';
import {
  listArtworks,
  searchArtworks
} from '../../../modules/artworks/api/api-artworks';
import { useQuery, useMutation } from 'react-query';
import SpinLoader from '../../../components/SpinLoader';
import { Redirect } from 'react-router-dom';
import {FilterContext} from '../../../context/FilterContext';

const Artworks = () => {
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const {filters} = useContext(FilterContext);

  const { isLoading, isError } = useQuery(
    'artworks',
    () =>
      listArtworks()
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: () => searchMutation(filters),
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

  // useEffect(() => {
  //   setFilteredArtworks(receivedArtworks);
  // }, [receivedArtworks]);

  if (isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="artworks-page">
      <ArtworksFilter searchMutation={searchMutation} />
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
