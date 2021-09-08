import { useState } from 'react';

const useFilterChange = (filterSubject) => {
  const [filters, setFilters] = useState(filterSubject);

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
    setFilters({ ...filters, [name]: value });
  };

  const onCheckboxChange = (e, name) => {
    let value;
    if (e.target.checked === false) {
      value = [true, false];
      setFilters({ ...filters, [name]: value });
    } else if (e.target.checked === true) {
      value = true;
      setFilters({ ...filters, [name]: value });
    }
  };
  return {
    filters,
    onRadioChange,
    onSelectChange,
    onSliderChange,
    onCheckboxChange
  };
};

export default useFilterChange;
