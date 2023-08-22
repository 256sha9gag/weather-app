import React from 'react';

import useStoreContext from '../../../hook/useStoreContext';

import './tabs.css';

const Tabs = () => {
  const { state, dispatch } = useStoreContext();

  const handleClickToggle = (type) => {
    dispatch({ type: 'SET_TYPE_FORECAST', payload: type });
    dispatch({ type: 'RESET_CURRENT_INDEX', payload: type });
  }
  
  return (
    <nav className='panel__nav'>
      <h3 className='panel__text-h3'>
        Прогноз
      </h3>
      <ul className="panel__tabs">
        <li
          onClick={() => handleClickToggle('daily')}
          className={state.typeForecast === 'daily'? 'panel__tab-active' : 'panel__tab'}>
          на неделю
        </li>
        <li
          onClick={() => handleClickToggle('hourly')}
          className={state.typeForecast === 'hourly'? 'panel__tab-active' : 'panel__tab'}
        >
          почасовой
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
