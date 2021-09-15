import {memo} from 'react';
import ElementsGrid from '../../../components/ElementsGrid';

const FilteredArtworks = ({title, artworks }) => {
  return (
    <div className="section filtered-artworks__section">
      <ElementsGrid
        title={title}
        elements={artworks}
        artworks={true}
      />
    </div>
  );
};

export default memo(FilteredArtworks);
