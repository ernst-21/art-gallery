import ElementsGrid from '../../../components/ElementsGrid';

const FilteredArtworks = ({title, artworks, searchMutation}) => {
  return (
    <div className="section filtered-artworks__section">
      <ElementsGrid
        searchMutation={searchMutation}
        title={title}
        elements={artworks}
        artworks={true}
      />
    </div>
  );
};

export default FilteredArtworks;
