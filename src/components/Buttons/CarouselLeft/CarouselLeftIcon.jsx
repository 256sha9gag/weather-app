import React from 'react';
import useStoreContext from '../../../hook/useStoreContext';

const CarouselLeftIcon = () => {
  const { state } = useStoreContext();

  const opacity = state.currentIndex === 0 ? "0.3" : "1";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
      <circle opacity={opacity} cx="19" cy="19" r="19" transform="rotate(-180 19 19)" fill={state.theme === 'light' ? 'white' : '#212331'}/>
      <path opacity={opacity} d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5" stroke="#ACACAC" strokeWidth="3"/>
    </svg>
  );
};

export default CarouselLeftIcon;
