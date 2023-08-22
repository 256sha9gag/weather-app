import React from 'react';

import './searchOpen.css';
import useStoreContext from '../../../hook/useStoreContext';

const SearchOpen = () => {
  const { dispatch } = useStoreContext();

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR_SEARCH_SHOW' });
  }

  return (
    <button
      type='button'
      className='sidebar__search-open-btn btn'
      onClick={handleClick}
    >
      Поиск города
    </button>
  );
};

export default SearchOpen;
