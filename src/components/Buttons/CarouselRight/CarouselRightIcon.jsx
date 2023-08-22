import React from 'react';
import useStoreContext from '../../../hook/useStoreContext';

const CarouselRightIcon = () => {

  const { state } = useStoreContext();
  const opacity = state.currentIndex + state.step < state[state.typeForecast].length - 1 ? "1" : "0.3";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
      <circle opacity={opacity} cx="19" cy="19" r="19" fill={state.theme === 'light' ? 'white' : '#212331'}/>
      <path opacity={opacity} d="M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5" stroke="#ACACAC" strokeWidth="3"/>
    </svg>
  );
};

export default CarouselRightIcon;