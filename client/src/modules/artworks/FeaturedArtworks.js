import {useState} from 'react';
import ElementsGrid from '../../components/ElementsGrid';
import { useQuery, useQueryClient} from 'react-query';
import { listArtworks } from './api-artworks';
import SpinLoader from '../../components/SpinLoader';
import { Redirect } from 'react-router-dom';

const FeaturedArtworks = () => {
  const [redirectToNetError, setRedirectToNetError] = useState(false);

  const queryClient = useQueryClient();

  const { data: featured = [], isLoading} = useQuery(
    'featured',
    () => listArtworks().then((data) => data), {
      onSuccess: (data) => {
        if (data && !data.error) {
          queryClient.invalidateQueries('featured').then(data => data);
        } else {
          setRedirectToNetError(true);
        }
      }
    });

  const featuredArtworks = featured.filter(item => item.featured === true);

  if (redirectToNetError) {
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
