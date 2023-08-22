import React, { useEffect } from 'react';

import useStoreContext from '../../../hook/useStoreContext';
import LightThemeIcon from './LightThemeIcon/LightThemeIcon';
import DarkThemeIcon from './DarkThemeIcon/DarkThemeIcon';
import './switcherThemes.css';

const SwitcherThemes = () => {
  const { state, dispatch } = useStoreContext()
  useEffect(() => {
    const root = document.documentElement;

    state.theme !== 'light' ? root.setAttribute('data-theme', 'dark') : root.removeAttribute('data-theme');
  }, [state.theme]);

  const handleClick = () => {
    dispatch({type: 'TOGGLE_THEME'});
  }

  return (
    <button 
      onClick={handleClick}
      className='sidebar__switcher-themes'
      type='button'
    >
      {state.theme === 'light' ? (<LightThemeIcon />) : (<DarkThemeIcon />)}
    </button>
  );
};

export default SwitcherThemes;
