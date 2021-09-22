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
import auth from '../../../modules/auth/api/auth-helper';

const Artworks = () => {
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [title, setTitle] = useState('');
  const {filters} = useContext(FilterContext);

  const { isLoading, isError } = useQuery(
    'artworks',
    () =>
      listArtworks()
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: () => searchMutation(filters)
    }
  );

  const { mutate: searchMutation, status } = useMutation(
    (filter) =>
      searchArtworks(filter)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        if (data.length > 0) {
          setTitle('Artworks');
        } else {
          setTitle('No artworks to display');
        }
        if (auth.isAuthenticated()) {
          const noPurchased = data.filter(item => !item.purchased.includes(auth.isAuthenticated().user._id));
          setFilteredArtworks(noPurchased);
        } else {
          setFilteredArtworks(data);
        }
      }
    }
  );

  if (isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="artworks-page">
      <ArtworksFilter searchMutation={searchMutation} />
      {isLoading ? (
        <SpinLoader />
      ) : (
        <FilteredArtworks title={title.length === 0 ? 'Loading...' : title} artworks={filteredArtworks} />
      )}
    </div>
  );
};

export default Artworks;
