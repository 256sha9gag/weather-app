const createUrl = (query) => {
  const baseUrl = 'https://nominatim.openstreetmap.org/search.php';
  const url = new URL(baseUrl);
  url.searchParams.append('q', query);
  url.searchParams.append('format', 'json');
  url.searchParams.append('addressdetails', '1');
  url.searchParams.append('accept-language', 'ru');
  url.searchParams.append('limit', '1');
  return url;
};

const getWeatherInCity = async (query) => {
  const url = createUrl(query);

  try {
    const response = await fetch(url);
  
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('response status not 200')
    }

  } catch (error) {
    return error;
  }
};

export default getWeatherInCity;
