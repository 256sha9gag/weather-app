import React from 'react';

import './progressbar.css';
import useStoreContext from '../../../hook/useStoreContext';

const Progressbar = () => {
  const { state } = useStoreContext();
  const { humidity } = state.currentWeather;

  return (
    <div className='panel__progressbar-wrapper'>
      <div className='panel__progressbar-percent'>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className='panel__progressbar-scale'>
        <div className='panel__progressbar-completed' style={{ width: `${humidity}%` }}>

        </div>
      </div>
      <div className='panel__progressbar-symbol'>
        <p>%</p>
      </div>
    </div>
  );
};

export default Progressbar;
