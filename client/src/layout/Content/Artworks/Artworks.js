import {useState} from 'react';
import FilteredArtworks from '../../../modules/artworks/FilteredArtworks';
import ArtworksFilter from '../../../modules/artworks/ArtworksFilter';
import {listArtworksByCategory} from '../../../modules/artworks/api-artworks';
import {useQuery, useQueryClient} from 'react-query';
import SpinLoader from '../../../components/SpinLoader';
import { Redirect, useParams } from 'react-router-dom';
import {titleWrangler} from '../../../utils/category-title-wrangler';

const Artworks = () => {
  const category = useParams().artCategory;
  const [redirectToNetError, setRedirectToNetError] = useState(false);
  const title = titleWrangler(category);

  const queryClient = useQueryClient();

  const {data: artworks = [], isLoading} = useQuery(['artworks', category], () => listArtworksByCategory({artCategory: category}).then(data => data), {
    onSuccess: (data) => {
      if (data && !data.error) {
        queryClient.invalidateQueries('artworks').then(data => data);
      } else {
        setRedirectToNetError(true);
      }
    }
  });

  if (redirectToNetError) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="artworks-page">
      <ArtworksFilter />
      {isLoading ? (<SpinLoader />) : (<FilteredArtworks title={title} artworks={artworks} />)}
    </div>
  );
};

export default Artworks;
