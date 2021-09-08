import {useEffect} from 'react';
import { artistFiltersDefaults, discipline } from '../../../../mockData';
import SelectElements from '../../../../components/SelectElements';
import CheckboxRecommended from './components/CheckboxRecommended';
import SliderFilter from '../../../../components/SliderFilter';
import { Button } from 'antd';
import useFilterChange from '../../../../hooks/useFilterChange';

const ArtistsFilter = ({searchArtistMutation}) => {
  const { filters, onCheckboxChange, onSelectChange, onSliderChange } = useFilterChange(artistFiltersDefaults);

  const onRecommendedChange = (e) => {
    onCheckboxChange(e, 'recommended');
  };

  const onDisciplineChange = (value) => {
    const finalValue = value.toString().toLowerCase();
    onSelectChange(finalValue, 'discipline', artistFiltersDefaults.discipline);
  };

  const onLikesChange = (value) => {
    onSliderChange(value, 'likes');
  };

  useEffect(() => {
    searchArtistMutation(filters);
  }, [filters, searchArtistMutation]);

  return (
    <div className="artist-filter__container">
      <div className="filter-action">
        <h1>Find Artists</h1>
      </div>
      <div className="artists-filters">
        <div className="recommended-filter">
          <CheckboxRecommended onChange={onRecommendedChange} />
        </div>
        <div className="artists-discipline-filter">
          <SelectElements
            onChange={onDisciplineChange}
            elements={discipline}
            label="Specialty:"
          />
        </div>

        <div className="artist-likes-filter">
          Likes: <SliderFilter min={0} max={10} onAfterChange={onLikesChange} />
        </div>
      </div>
      <div className="reset-filter__btn">
        <Button type="link" onClick={() => window.location.reload()}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default ArtistsFilter;
