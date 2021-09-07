import { useState, useEffect } from 'react';
import { Button, Space } from 'antd';
import {useQueryClient} from 'react-query';
import { categories, sizes, orientation } from '../../../../mockData';
import PriceSlider from './components/PriceSlider';
import MoreFilters from './components/MoreFilters';
import RadioFilter from './components/RadioFilter';

const ArtworksFilter = ({searchMutation}) => {
  const [filters, setFilters] = useState({category: ['painting', 'print', 'sculpture', 'photography'], orientation: ['landscape', 'portrait', 'square'], size: ['big', 'small', 'medium']});
  const [moreFilters, setMoreFilters] = useState(false);
  const queryClient = useQueryClient();

  const onCategoryChange = (e) => {
    let category;
    if (e.target.value === 'all') {
      category = ['painting', 'print', 'sculpture', 'photography'];
      setFilters({...filters, category: category});
    } else {
      category = e.target.value;
      setFilters({...filters, category: category});
    }
  };

  const onOrientationChange = (e) => {
    let orientat;
    console.log(e.target.value);
    if (e.target.value === 'all') {
      orientat = ['landscape', 'portrait', 'square'];
      setFilters({...filters, orientation: orientat});
    } else {
      orientat = e.target.value;
      setFilters({...filters, orientation: orientat});
    }
  };

  const onSizeChange = (e) => {
    let size;
    if (e.target.value === 'all') {
      size = ['big', 'small', 'medium'];
      setFilters({...filters, size: size});
    } else {
      size = e.target.value;
      setFilters({...filters, size: size});
    }
  };

  useEffect(() => {
    searchMutation(filters);
  }, [filters, searchMutation]);


  return (
    <div className="artworks-filter__container">
      <div className="filter-categories__container">
        <RadioFilter isCategory={true} onChange={onCategoryChange} elements={categories} />
      </div>
      <div className="filter-price-orientation-size__container">
        <div className="slider-price__container">
          Price $: <PriceSlider max={10000} />
        </div>
        <div className="radio-orientation__container">
          <RadioFilter onChange={onOrientationChange} title="Orientation:" elements={orientation} />
        </div>
        <div className="radio-size__container">
          <RadioFilter onChange={onSizeChange} title="Size:" elements={sizes} />
        </div>
      </div>
      <Space>
        <Button type="link" onClick={() => setMoreFilters(!moreFilters)}>
          {moreFilters ? 'Less filters' : 'More Filters'}
        </Button>
        <Button type="link" onClick={() => queryClient.invalidateQueries('artworks')}>Reset Filters</Button>
      </Space>
      {moreFilters && <MoreFilters />}
    </div>
  );
};

export default ArtworksFilter;
