import ElementsGrid from '../../../components/ElementsGrid';

const FilteredArtists = (props) => {
  return (
    <div className='section filtered-artists__section'>
      <ElementsGrid
        title={props.specialty} // change this dynamically
        elements={props.artists} // and this
        artworks={false}
      />
    </div>
  );
};

export default FilteredArtists;
