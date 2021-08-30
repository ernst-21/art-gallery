import { artists } from '../../mockData';
import ElementsGrid from '../../components/ElementsGrid';

const RecommendedArtists = () => {
  const recommended = artists.filter((item) => item.recommended === true);
  return (
    <div className='section recommended-section'>
      <ElementsGrid
        title="Recommended"
        elements={recommended}
        artworks={false}
      />
    </div>
  );
};

export default RecommendedArtists;
