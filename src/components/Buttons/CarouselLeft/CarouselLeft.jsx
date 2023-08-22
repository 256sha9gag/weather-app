import React from 'react';

import CarouselLeftIcon from './CarouselLeftIcon';
import './carouselLeft.css';
import useStoreContext from '../../../hook/useStoreContext';


const CarouselLeft = () => {
  const { state, dispatch } = useStoreContext();

  const handleClick = (e) => {
    e.preventDefault();

    if (state.currentIndex > 0) {
      dispatch({ type: 'PREV_CARD' });
    }

  }
  
  return (
    <button 
      className="panel__left-button"
      type="button"
      onClick={handleClick}
      disabled={state.currentIndex === 0}
    >
      <CarouselLeftIcon />
    </button>
  );
};

export default CarouselLeft;