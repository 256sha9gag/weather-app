import React, { useState, useRef, useEffect } from 'react';

import SearchSubmit from '../../Buttons/SearchSubmit/SearchSubmit';
import getLocation from '../../../api/getLocationApi';
import getWeatherData from '../../../api/getWeatherApi';
import useStoreContext from '../../../hook/useStoreContext';
import generateId from '../../../utilities/generateId';
import normalizeData from '../../../utilities/normalizeData';
import './sidebarForm.css';
import getHourlyData from '../../../utilities/getHourlyData';
import getDailyData from '../../../utilities/getDailyData';

const SidebarForm = () => {
  const [value, setValue] = useState('');
  const { state, dispatch } = useStoreContext();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }


  useEffect(() => {
    dispatch({ type: 'SET_IS_LOADED', payload: false })
    const { lat, lon } = state.currentLocation
    getWeatherData(lat, lon, 'weather')
      .then((response) => {
        dispatch({ type: 'SET_CURRENT_WEATHER', payload: normalizeData(response) })
        dispatch({ type: 'SET_IS_LOADED', payload: true })
      })
      .catch((error) => {
        dispatch({ type: 'SET_IS_LOADED', payload: false })
        console.log(error)
      })

    getWeatherData(lat, lon, 'forecast')
    .then((response) => {
      dispatch({ type: 'SET_HOURLY_FORECAST', payload: getHourlyData(response) });
      dispatch({ type: 'SET_DAILY_FORECAST', payload: getDailyData(response.list) });
    })
    .catch((error) => {
      dispatch({ type: 'SET_IS_LOADED', payload: false })
      console.log(error);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentLocation])

  useEffect(() => {
    if (state.sidebarSearchShow) {
      inputRef.current.focus();
    }
  }, [state.sidebarSearchShow]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const englishRegex = /^[A-Za-z]+$/;
    const numberRegex = /^[0-9]+$/;

    if (englishRegex.test(value)) {
      alert('Пожалуйста, введите русские буквы');
      setValue('');
      return;
    }

    if (numberRegex.test(value)) {
      alert('Пожалуйста, введите буквы');
      setValue('');
      return;
    }

    if (value === '') {
      alert('Вы не ввели данные для поиска');
      return;
    }

    try {
      const data = await getLocation(value); 
      if (data.length === 0) {
        dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Упс! Город не найден, попробуйте другой' });
      } else {
        const cityData = data[0];
        if (state.cities.length > 4) {
          dispatch({ type: 'REMOVE_LAST_CITY' });
        }
        dispatch({ type: 'SET_ERROR_MESSAGE', payload: null });
        dispatch({ type: 'TOGGLE_SIDEBAR_SEARCH_SHOW' });
        
        const isUnique = state.cities.every((city) => city.name !== cityData.name);

        if (isUnique) {
          dispatch({ type: 'SET_CITY', payload: { name: cityData.name, id: generateId(), lat: cityData.lat, lon: cityData.lon }});
        }

        dispatch({ type: 'SET_CURRENT_LOCATION', payload: { name: cityData.name, lat: cityData.lat, lon: cityData.lon } });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: error.name });
    }
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="sidebar__search-form">
      <input
        ref={inputRef}
        onChange={handleChange}
        type='search'
        value={value}
        placeholder="Введите город"
        className="sidebar__input btn"
        aria-label="Поиск"
        id="search-input"
      />
      <label className='sidebar__label' htmlFor="search-input" />
      <SearchSubmit />
    </form>
  );
};

export default SidebarForm;
