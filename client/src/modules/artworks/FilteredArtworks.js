import ElementsGrid from '../../components/ElementsGrid';
import {artworks} from '../../mockData';

const FilteredArtworks = () => {
  return (
    <div className='section filtered-artworks__section'>
      <ElementsGrid
        title='All Categories' // change this dynamically
        elements={artworks} // and this
        artworks={true}
      />
    </div>
  );
};

export default FilteredArtworks;
