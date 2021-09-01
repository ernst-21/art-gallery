import ElementsGrid from '../../components/ElementsGrid';
import { useQuery} from 'react-query';
import { listArtworks } from './api-artworks';
import SpinLoader from '../../components/SpinLoader';
import { Redirect } from 'react-router-dom';

const FeaturedArtworks = () => {
  const { data: featured = [], isLoading, isError} = useQuery(
    'featured',
    () => listArtworks().then(res => res.json()).then((data) => data));

  const featuredArtworks = featured.filter(item => item.featured === true);

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="section featured-section">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <ElementsGrid
          title="Featured"
          elements={featuredArtworks}
          artworks={true}
        />
      )}
    </div>
  );
};

export default FeaturedArtworks;
