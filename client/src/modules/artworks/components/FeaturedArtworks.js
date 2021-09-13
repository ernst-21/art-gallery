import { useQuery } from 'react-query';
import { listFeatured } from '../api/api-artworks';
import SpinLoader from '../../../components/SpinLoader';
import { Redirect } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle';
import Masonry from 'react-masonry-css';
import FeaturedCard from './FeaturedCard';

const FeaturedArtworks = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    576: 1
  };

  const {
    data: featured = [],
    isLoading,
    isError
  } = useQuery('featured', () =>
    listFeatured()
      .then((res) => res.json())
      .then((data) => data)
  );

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="section featured-section">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="elements-grid">
          <SectionTitle title="Featured" />
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {featured.map((item) => (
              <FeaturedCard
                key={item._id}
                name={item.name}
                category={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                gallery={item.gallery}
                url={item.url}
              />
            ))}
          </Masonry>
        </div>
      )}
    </div>
  );
};

export default FeaturedArtworks;
