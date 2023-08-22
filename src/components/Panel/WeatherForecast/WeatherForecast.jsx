import React from 'react';

import Tabs from '../Tabs/Tabs';
import Carousel from '../Carousel/Carousel';
import './weatherForecast.css';

const WeatherForecast = () => {
  return (
    <section className='panel__weather-forecast'>
      <Tabs />
      <Carousel />
    </section>
  );
};

export default WeatherForecast;
