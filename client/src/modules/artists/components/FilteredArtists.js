import ElementsGrid from '../../../components/ElementsGrid';

const FilteredArtists = (props) => {
  return (
    <div className='section filtered-artists__section'>
      <ElementsGrid
        title={props.specialty}
        elements={props.artists}
        artworks={false}
      />
    </div>
  );
};

export default FilteredArtists;
