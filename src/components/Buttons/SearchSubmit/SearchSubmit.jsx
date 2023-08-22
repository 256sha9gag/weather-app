import React from 'react';

import './searchSubmit.css';
import useStoreContext from '../../../hook/useStoreContext';

const SearchSubmit = () => {
  const { state } = useStoreContext();

  return (
    <button 
      className="sidebar__btn-submit btn" 
      type="submit"
      disabled={!state.isLoaded}
    >
      Найти
    </button>
  );
};

export default SearchSubmit;