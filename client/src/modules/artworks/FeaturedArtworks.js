import { artworks } from '../../mockData';
import ElementsGrid from '../../components/ElementsGrid';


const FeaturedArtworks = () => {
  const featured = artworks.filter((item) => item.featured === true);
  return (
    <div className="section featured-section">
      <ElementsGrid title='Featured' elements={featured} artworks={true}/>
    </div>
  );
};

export default FeaturedArtworks;
