import ElementsGrid from '../../components/ElementsGrid';

const FilteredArtworks = (props) => {
  return (
    <div className="section filtered-artworks__section">
      <ElementsGrid
        title={props.title} // change this dynamically
        elements={props.artworks} // and this
        artworks={true}
      />
    </div>
  );
};

export default FilteredArtworks;
