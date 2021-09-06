import {useState} from 'react';
import {Button, Space} from 'antd';
import {categories, sizes, orientation} from '../../../../mockData';
import PriceSlider from './components/PriceSlider';
import MoreFilters from './components/MoreFilters';
import RadioFilter from './components/RadioFilter';

const ArtworksFilter = () => {
  const [moreFilters, setMoreFilters] = useState(false);
  return (
    <div className="artworks-filter__container">
      <div className="filter-categories__container">
        <RadioFilter elements={categories} />
      </div>
      <div className="filter-price-orientation-size__container">
        <div className="slider-price__container">
          Price $: <PriceSlider max={10000} />
        </div>
        <div className="radio-orientation__container">
          <RadioFilter title='Orientation:' elements={orientation} />
        </div>
        <div className="radio-size__container">
          <RadioFilter title='Size:' elements={sizes} />
        </div>
      </div>
      <Space>
        <Button type="link" onClick={() => setMoreFilters(!moreFilters)}>
          {moreFilters ? 'Less filters' : 'More Filters'}
        </Button>
        <Button type="link" >
          Reset Filters
        </Button>
      </Space>
      {moreFilters && <MoreFilters />}
    </div>
  );
};

export default ArtworksFilter;
