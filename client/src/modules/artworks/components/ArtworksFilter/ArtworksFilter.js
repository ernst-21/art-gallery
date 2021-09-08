import { useState, useEffect } from 'react';
import { Button, Space } from 'antd';
import { categories, sizes, orientation } from '../../../../mockData';
import SliderFilter from '../../../../components/SliderFilter';
import MoreFilters from './components/MoreFilters';
import RadioFilter from './components/RadioFilter';
import useFilterChange from '../../../../hooks/useFilterChange';
import {filterDefaults} from '../../../../mockData';

const ArtworksFilter = ({ searchMutation }) => {
  const { filters, onRadioChange, onSelectChange, onSliderChange } = useFilterChange(filterDefaults);
  const [moreFilters, setMoreFilters] = useState(false);

  const onCategoryChange = (e) => {
    onRadioChange(e, 'category', filterDefaults.category);
  };

  const onOrientationChange = (e) => {
    onRadioChange(e, 'orientation', filterDefaults.orientation);
  };

  const onSizeChange = (e) => {
    onRadioChange(e, 'size', filterDefaults.size);
  };

  const onGalleriesChange = (value) => {
    onSelectChange(value, 'gallery', filterDefaults.gallery);
  };

  const onArtistChange = (value) => {
    onSelectChange(value, 'artist', filterDefaults.artist);
  };

  const onThemesChange = (value) => {
    const finalValue = value.toString().toLowerCase();
    onSelectChange(finalValue, 'tags', filterDefaults.tags);
  };

  const onColorChange = (e) => {
    onRadioChange(e, 'colors', filterDefaults.colors);
  };

  const onPriceChange = (value) => {
    onSliderChange(value, 'price');
  };

  useEffect(() => {
    searchMutation(filters);
  }, [filters, searchMutation]);

  return (
    <div className="artworks-filter__container">
      <div className="filter-categories__container">
        <RadioFilter
          isCategory={true}
          onChange={onCategoryChange}
          elements={categories}
        />
      </div>
      <div className="filter-price-orientation-size__container">
        <div className="slider-price__container">
          Price $: <SliderFilter min={0} max={10000} onAfterChange={onPriceChange}/>
        </div>
        <div className="radio-orientation__container">
          <RadioFilter
            onChange={onOrientationChange}
            title="Orientation:"
            elements={orientation}
          />
        </div>
        <div className="radio-size__container">
          <RadioFilter onChange={onSizeChange} title="Size:" elements={sizes} />
        </div>
      </div>
      <Space>
        <Button type="link" onClick={() => setMoreFilters(!moreFilters)}>
          {moreFilters ? 'Less filters' : 'More Filters'}
        </Button>
        <Button type="link" onClick={() => window.location.reload()}>
          Reset Filters
        </Button>
      </Space>
      {moreFilters && <MoreFilters onGalleriesChange={onGalleriesChange} onArtistChange={onArtistChange} onThemesChange={onThemesChange} onColorChange={onColorChange} />}
    </div>
  );
};

export default ArtworksFilter;
