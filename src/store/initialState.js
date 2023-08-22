const initialState = {
  currentWeather: {},
  hourly: [],
  daily: [],
  isLoaded: false,
  currentLocation: {name: 'Москва', lat: '55.625578', lon: '37.6063916'},
  cities: [],
  errorMessage: null,
  sidebarSearchShow: false,
  typeForecast: 'daily',
  theme: 'light',
  currentIndex: 0,
  step: null,
}

export default initialState;
