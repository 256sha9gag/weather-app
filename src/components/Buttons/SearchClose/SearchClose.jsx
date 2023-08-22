import React from 'react';

import SearchCloseIcon from './SearchCloseIcon/SearchCloseIcon';
import './searchClose.css';
import useStoreContext from '../../../hook/useStoreContext';

const SearchClose = () => {
  const { dispatch } = useStoreContext();

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR_SEARCH_SHOW' });
  }

  return (
    <button 
      className='sidebar__btn-close'
      type="button"
      onClick={handleClick}
    >
      <SearchCloseIcon />
    </button>
  );
};

export default SearchClose;
