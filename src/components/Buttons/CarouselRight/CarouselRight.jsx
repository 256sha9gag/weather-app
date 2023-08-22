import React from 'react';

import CarouselRightIcon from './CarouselRightIcon';
import './carouselRight.css';
import useStoreContext from '../../../hook/useStoreContext';

const CarouselRight = () => {
  const { state, dispatch } = useStoreContext();

  const handleClick = (e) => {
    e.preventDefault();
    if (state.currentIndex + state.step < state[state.typeForecast].length - 1) {
      dispatch({ type: 'NEXT_CARD' });
    } 

  }

  return (
    <button 
      className="panel__right-button"
      onClick={handleClick}
      type="button"
      disabled={!(state.currentIndex + state.step < state[state.typeForecast].length - 1)}
    >
      <CarouselRightIcon />
    </button>
  );
};

export default CarouselRight;