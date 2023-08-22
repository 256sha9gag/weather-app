import React from 'react';

import './sidebarIcon.css'
import useStoreContext from '../../../hook/useStoreContext';

const SidebarIcon = () => {
  const { state } = useStoreContext();
  const { icon } = state.currentWeather;

  return (
    <figure className='sidebar__icon'>
      {state.isLoaded ? (
        <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="weather icon" />
      ) : null}
    </figure>
  );
};

export default SidebarIcon;