import { useState } from 'react';
import {filterDefaults} from '../mockData';

const useFilterChange = () => {
  const [filters, setFilters] = useState(filterDefaults);

  const onRadioChange = (e, name, arr) => {
    let value;
    if (e.target.value === 'all' || e.target.value === 'All') {
      value = arr;
      setFilters({ ...filters, [name]: value });
    } else {
      value = e.target.value;
      setFilters({ ...filters, [name]: value });
    }
  };

  const onSelectChange = (value, name, arr) => {
    if (value === 'all' || value === 'All') {
      value = arr;
      setFilters({ ...filters, [name]: value });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };
  const onSliderChange = (value, name) => {
    setFilters({...filters, [name]: value});
  };
  return { filters, onRadioChange, onSelectChange, onSliderChange };
};

export default useFilterChange;
