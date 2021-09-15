import {useContext} from 'react';
import { galleries, artists, themes, colors } from '../../../../../mockData';
import SelectElements from '../../../../../components/SelectElements';
import RadioFilter from './RadioFilter';
import {FilterContext} from '../../../../../context/FilterContext';
import {settingDefault} from '../../../../../utils/defaultFilters-wrangler';

const MoreFilters = (props) => {
  const {filters} = useContext(FilterContext);
  return (
    <div className="artworks-more-filter__container">
      <div className="select-filters__container">
        <div className="select-filter__container">
          <SelectElements defaultValue={settingDefault(filters.gallery)} onChange={props.onGalleriesChange} label="Galleries:" elements={galleries} />
        </div>
        <div className="select-filter__container">
          <SelectElements defaultValue={settingDefault(filters.artist)} onChange={props.onArtistChange} label="Artists:" elements={artists} />
        </div>
        <div className="select-filter__container">
          <SelectElements defaultValue={settingDefault(filters.tags)} onChange={props.onThemesChange} label="Themes:" elements={themes} />
        </div>
      </div>
      <div className='color-filters__container'>
        <RadioFilter defaultValue={settingDefault(filters.colors)} elements={colors} title='Select color in artwork:' onChange={props.onColorChange} />
      </div>
    </div>
  );
};

export default MoreFilters;
