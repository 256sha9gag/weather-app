import React from 'react';

import ErrorMessage from './ErrorMessage';
import useStoreContext from '../../../hook/useStoreContext';
import IconChevron from './IconChevron';
import getWeatherData from '../../../api/getWeatherApi';
import normalizeData from '../../../utilities/normalizeData';
import './historySearchCities.css'

const HistorySearchCities = () => {
  const { state, dispatch } = useStoreContext();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_IS_LOADED', payload: false })
    const selectedLocation = state.cities.filter((city) => city.name === e.target.value);
    const { lat, lon } = selectedLocation[0];

    getWeatherData(lat, lon)
      .then((response) => {
        dispatch({ type: 'SET_CURRENT_WEATHER', payload: normalizeData(response) })
        dispatch({ type: 'SET_IS_LOADED', payload: true })
      })
      .catch((error) => {
        dispatch({ type: 'SET_IS_LOADED', payload: false })
        console.log(error)
      })

    dispatch({ type: 'TOGGLE_SIDEBAR_SEARCH_SHOW' });
  }

  return (
    <>
      <ErrorMessage />
      <div className='sidebar__history-wrapper'>
        {state.cities.map((city) => (
          <button
            onClick={handleClick}
            type='button'
            value={city.name}
            className="sidebar__city"
            key={city.id}
          >
            {city.name}
            <IconChevron />
          </button>
        ))}
      </div>
    </>
  );
};

export default HistorySearchCities;
