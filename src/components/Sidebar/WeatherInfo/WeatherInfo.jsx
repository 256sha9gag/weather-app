import React from 'react';

import './weatherInfo.css'
import useStoreContext from '../../../hook/useStoreContext';

const WeatherInfo = () => {
  const { state } = useStoreContext();
  const { date, temp, feelsLikeTemp, description } = state.currentWeather;
  return (
    <section className='sidebar__weather-info'>
      <h1 className='sidebar__temp'>
        {temp} <span className='sidebar__degree'>°C</span>
      </h1>
      <h2 className="sidebar__weather-type">
        {description}
      </h2>
      <h5 className="sidebar__weather-description">
        Ощущается как {feelsLikeTemp} °C
      </h5>
      <section className="sidebar__date">
        <h5>Сегодня</h5>
        <h5>{date}</h5>
      </section>
      <section className="sidebar__location">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9999 3.33334C13.5499 3.33334 8.33325 8.55001 8.33325 15C8.33325 23.75 19.9999 36.6667 19.9999 36.6667C19.9999 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.4499 3.33334 19.9999 3.33334ZM19.9999 19.1667C18.8949 19.1667 17.835 18.7277 17.0536 17.9463C16.2722 17.1649 15.8333 16.1051 15.8333 15C15.8333 13.8949 16.2722 12.8351 17.0536 12.0537C17.835 11.2723 18.8949 10.8333 19.9999 10.8333C21.105 10.8333 22.1648 11.2723 22.9462 12.0537C23.7276 12.8351 24.1666 13.8949 24.1666 15C24.1666 16.1051 23.7276 17.1649 22.9462 17.9463C22.1648 18.7277 21.105 19.1667 19.9999 19.1667Z" fill="#EC6E4D"/>
        </svg>
        <h5>{state.currentLocation.name}</h5>
      </section>
    </section>
  );
};

export default WeatherInfo;
