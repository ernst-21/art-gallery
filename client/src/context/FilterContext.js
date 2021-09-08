import { createContext, useState } from 'react';
import {filterDefaults} from '../mockData';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(filterDefaults);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
