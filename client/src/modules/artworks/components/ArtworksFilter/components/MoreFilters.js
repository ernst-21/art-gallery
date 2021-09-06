import { galleries } from '../../../../../mockData';
import { artists } from '../../../../../mockData';
import { themes } from '../../../../../mockData';
import SelectElements from '../../../../../components/SelectElements';
import ColorRadio from './ColorRadio';

const MoreFilters = () => {
  return (
    <div className="artworks-more-filter__container">
      <div className="select-filters__container">
        <div className="select-filter__container">
          <SelectElements label="Galleries:" elements={galleries} />
        </div>
        <div className="select-filter__container">
          <SelectElements label="Artists:" elements={artists} />
        </div>
        <div className="select-filter__container">
          <SelectElements label="Themes:" elements={themes} />
        </div>
      </div>
      <div className='color-filters__container'>
        <ColorRadio />
      </div>
    </div>
  );
};

export default MoreFilters;
