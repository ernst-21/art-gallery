import { useState, useEffect, memo } from 'react';
import { Button, Space } from 'antd';
import { categories, sizes, orientation } from '../../../../mockData';
import SliderFilter from '../../../../components/SliderFilter';
import MoreFilters from './components/MoreFilters';
import RadioFilter from './components/RadioFilter';
import useFilterChange from '../../../../hooks/Filters/useFilterChange';
import {FilterContext} from '../../../../context/FilterContext';
import {filterDefaults} from '../../../../mockData';
import {settingDefault} from '../../../../utils/defaultFilters-wrangler';

const ArtworksFilter = ({ searchMutation }) => {
  const { filters, onRadioChange, onSelectChange, onSliderChange } = useFilterChange(FilterContext);
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

  const onLikesChange = (value) => {
    onSliderChange(value, 'voters');
  };

  useEffect(() => {
    searchMutation(filters);
  }, [filters, searchMutation]);

  return (
    <div className="artworks-filter__container">
      <div className="filter-categories__container">
        <RadioFilter
          isCategory={true}
          defaultValue={settingDefault(filters.category)}
          onChange={onCategoryChange}
          elements={categories}
        />
      </div>
      <div className="filter-price-orientation-size__container">
        <div className="slider-price__container">
          Price $: <SliderFilter defaultValue={[filters.price[0], filters.price[1]]} min={0} max={10000} onAfterChange={onPriceChange}/>
        </div>
        <div className="radio-orientation__container">
          <RadioFilter
            defaultValue={settingDefault(filters.orientation)}
            onChange={onOrientationChange}
            title="Orientation:"
            elements={orientation}
          />
        </div>
        <div className="radio-size__container">
          <RadioFilter defaultValue={settingDefault(filters.size)} onChange={onSizeChange} title="Size:" elements={sizes} />
        </div>
        <div className="slider-price__container">
          Likes $: <SliderFilter defaultValue={[filters.voters[0], filters.voters[1]]} min={0} max={10} onAfterChange={onLikesChange}/>
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

export default memo(ArtworksFilter);
