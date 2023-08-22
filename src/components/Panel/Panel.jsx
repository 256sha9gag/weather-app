import React from 'react';

import WeatherForecast from './WeatherForecast/WeatherForecast';
import DetailedInfo from './DetailedInfo/DetailedInfo';
import './panel.css'

const Panel = () => {
  return (
    <div className='panel'>
      <WeatherForecast />
      <DetailedInfo />
    </div>
  );
};

export default Panel;