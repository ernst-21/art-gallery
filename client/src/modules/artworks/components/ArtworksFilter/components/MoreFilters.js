import { galleries, artists, themes, colors } from '../../../../../mockData';
import SelectElements from '../../../../../components/SelectElements';
import RadioFilter from './RadioFilter';

const MoreFilters = (props) => {
  return (
    <div className="artworks-more-filter__container">
      <div className="select-filters__container">
        <div className="select-filter__container">
          <SelectElements onChange={props.onGalleriesChange} label="Galleries:" elements={galleries} />
        </div>
        <div className="select-filter__container">
          <SelectElements onChange={props.onArtistChange} label="Artists:" elements={artists} />
        </div>
        <div className="select-filter__container">
          <SelectElements onChange={props.onThemesChange} label="Themes:" elements={themes} />
        </div>
      </div>
      <div className='color-filters__container'>
        <RadioFilter elements={colors} title='Select color in artwork:' onChange={props.onColorChange} />
      </div>
    </div>
  );
};

export default MoreFilters;
