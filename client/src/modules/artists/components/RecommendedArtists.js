import { useQuery } from 'react-query';
import ElementsGrid from '../../../components/ElementsGrid';
import { listArtists } from '../api/api-artists';
import { Redirect } from 'react-router-dom';
import SpinLoader from '../../../components/SpinLoader';

const RecommendedArtists = () => {
  const { data: artists = [], isLoading, isError } = useQuery(
    'recommended',
    () =>
      listArtists()
        .then((res) => res.json())
        .then((data) => data)
  );
  const recommended = artists.filter((item) => item.recommended === true);

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="section recommended-section">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <ElementsGrid
          title="Recommended"
          elements={recommended}
          artworks={false}
        />
      )}
    </div>
  );
};

export default RecommendedArtists;
