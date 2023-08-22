import React from 'react';

import SidebarForm from '../SidebarForm/SidebarForm';
import SearchClose from '../../Buttons/SearchClose/SearchClose';
import './sidebarSearch.css'
import useStoreContext from '../../../hook/useStoreContext';
import HistorySearchCities from '../HistorySearchCities/HistorySearchCities';

const SidebarSearch = () => {
  const { state } = useStoreContext();

  return (
    <div className={!state.sidebarSearchShow ? 'sidebar__search' : 'sidebar__search-open'}>
      <SearchClose />
      <SidebarForm />
      <HistorySearchCities />
    </div>
  );
};

export default SidebarSearch;