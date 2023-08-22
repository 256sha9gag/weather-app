import React from 'react';

import SidebarSearch from './SidebarSearch/SidebarSearch';
import SidebarButtons from './SidebarButtons/SidebarButtons';
import SidebarIcon from './SidebarIcon/SidebarIcon';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarButtons />
      <SidebarIcon />
      <WeatherInfo />
      <SidebarSearch />
    </div>
  )
}

export default Sidebar;
