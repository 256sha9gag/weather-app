import React from 'react';

import SearchOpen from '../../Buttons/SearchOpen/SearchOpen';
import SwitcherThemes from '../../Buttons/SwitcherThemes/SwitcherThemes';
import './sidebarButtons.css';

const SidebarButtons = () => {
  return (
    <div className='sidebar__btns-wrapper'>
      <SearchOpen />
      <SwitcherThemes />
    </div>
  );
};

export default SidebarButtons;