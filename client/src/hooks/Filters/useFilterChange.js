import { useContext, useCallback } from 'react';

const useFilterChange = (filterContext) => {
  const {filters, setFilters} = useContext(filterContext);

  const onRadioChange = useCallback((e, name, arr) => {
    let value;
    if (e.target.value === 'all' || e.target.value === 'All') {
      value = arr;
      setFilters({ ...filters, [name]: value });
    } else {
      value = e.target.value;
      setFilters({ ...filters, [name]: value });
    }
  }, [filters, setFilters]);

  const onSelectChange = useCallback((value, name, arr) => {
    if (value === 'all' || value === 'All') {
      value = arr;
      setFilters({ ...filters, [name]: value });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  }, [filters, setFilters]);

  const onSliderChange = useCallback((value, name) => {
    setFilters({ ...filters, [name]: value });
  }, [filters, setFilters]);

  const onCheckboxChange = useCallback((e, name) => {
    let value;
    if (e.target.checked === false) {
      value = [true, false];
      setFilters({ ...filters, [name]: value });
    } else if (e.target.checked === true) {
      value = true;
      setFilters({ ...filters, [name]: value });
    }
  }, [filters, setFilters]);
  return {
    filters,
    setFilters,
    onRadioChange,
    onSelectChange,
    onSliderChange,
    onCheckboxChange
  };
};

export default useFilterChange;
