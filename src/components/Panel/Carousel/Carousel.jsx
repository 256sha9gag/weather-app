import React from 'react';

import CarouselRight from '../../Buttons/CarouselRight/CarouselRight';
import CarouselLeft from '../../Buttons/CarouselLeft/CarouselLeft';
import './carousel.css';
import ForecastCards from '../ForecastCards/ForecastCards';

const Carousel = () => {
  return (
    <div className='panel__forecast'>
      <CarouselLeft />
      <ForecastCards />
      <CarouselRight />
    </div>
  );
};

export default Carousel;
