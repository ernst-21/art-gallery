import FilteredArtworks from '../../../modules/artworks/FilteredArtworks';
import ArtworksFilter from '../../../modules/artworks/ArtworksFilter';
import {listArtworksByCategory} from '../../../modules/artworks/api-artworks';
import {useQuery} from 'react-query';
import SpinLoader from '../../../components/SpinLoader';
import { Redirect, useParams } from 'react-router-dom';
import {titleWrangler} from '../../../utils/category-title-wrangler';

const Artworks = () => {
  const category = useParams().artCategory;
  const title = titleWrangler(category);

  const {data: artworks = [], isLoading, isError} = useQuery(['artworks', category], () => listArtworksByCategory({artCategory: category}).then(res => res.json()).then(data => data));

  if (isError) {
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
