const baseURL = {
  weather: 'https://api.openweathermap.org/data/2.5/weather',
  forecast: 'https://api.openweathermap.org/data/2.5/forecast',
}

const apiKey = process.env.REACT_APP_APIKey;


const createUrl = (lat, lon, type) => {
  const url = new URL(baseURL[type]);
  url.searchParams.append('lat', lat);
  url.searchParams.append('lon', lon);
  url.searchParams.append('appid', apiKey);
  url.searchParams.append('units', 'metric');
  url.searchParams.append('lang', 'ru');

  return url;
};

const getWeatherData = async (lat, lon, type) => {
  const url = createUrl(lat, lon, type);

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return error;
  }

};

export default getWeatherData;
