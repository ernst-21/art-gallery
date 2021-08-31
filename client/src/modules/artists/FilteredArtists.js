import {artists} from '../../mockData';
import ElementsGrid from '../../components/ElementsGrid';

const FilteredArtists = () => {
  return (
    <div className='section filtered-artists__section'>
      <ElementsGrid
        title="All Artists" // change this dynamically
        elements={artists} // and this
        artworks={false}
      />
    </div>
  );
};

export default FilteredArtists;
