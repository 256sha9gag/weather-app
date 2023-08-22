const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'SET_COUNT_FORECAST':
      return { ...state, countForecast: payload };
    case 'SET_TYPE_FORECAST':
      return { ...state, typeForecast: payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'TOGGLE_SIDEBAR_SEARCH_SHOW':
      return { ...state, sidebarSearchShow: state.sidebarSearchShow ? false : true };
    case 'SET_ERROR_MESSAGE':
      return { ...state, errorMessage: payload};
    case 'SET_CITY':
      return { ...state, cities: [...state.cities, payload] };
    case 'REMOVE_LAST_CITY':
      return { ...state, cities: state.cities.slice(1) };
    case 'SET_CURRENT_LOCATION':
      return { ...state, currentLocation: payload};
    case 'SET_IS_LOADED':
      return { ...state, isLoaded: payload };
    case 'SET_CURRENT_WEATHER':
      return { ...state, currentWeather: payload };
    case 'SET_DAILY_FORECAST':
      return { ...state, daily: payload };
    case 'SET_HOURLY_FORECAST':
      return { ...state, hourly: payload };
    case 'RESET_CURRENT_INDEX':
      return { ...state, currentIndex: 0 };
    case 'NEXT_CARD':
      return { ...state, currentIndex: state.currentIndex + 1 };
    case 'PREV_CARD':
      return { ...state, currentIndex: state.currentIndex - 1 };
    case 'SET_STEP':
      return { ...state, step: payload };
    default:
      return state;
  }
};

export default reducer;
