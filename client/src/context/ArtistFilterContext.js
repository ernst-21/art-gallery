import { createContext, useState } from 'react';
import {artistFiltersDefaults} from '../mockData';

export const ArtistFilterContext = createContext();

export function ArtistFilterProvider({ children }) {
  const [filters, setFilters] = useState(artistFiltersDefaults);

  return (
    <ArtistFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </ArtistFilterContext.Provider>
  );
}
