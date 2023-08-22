import normalizeDate from "./normalizeDate.js";

const capitalizeWord = (word) => word.slice(0, 1)
  .toUpperCase()
  .concat(word.slice(1).toLowerCase());

const windDirectionGenerator = (deg) => {
  if (deg >= 337.5 || deg < 22.5) {
    return "С";
  } else if (deg >= 22.5 && deg < 67.5) {
    return "СВ";
  } else if (deg >= 67.5 && deg < 112.5) {
    return "В";
  } else if (deg >= 112.5 && deg < 157.5) {
    return "ЮВ";
  } else if (deg >= 157.5 && deg < 202.5) {
    return "Ю";
  } else if (deg >= 202.5 && deg < 247.5) {
    return "ЮЗ";
  } else if (deg >= 247.5 && deg < 292.5) {
    return "З";
  } else if (deg >= 292.5 && deg < 337.5) {
    return "СЗ";
  }
}

const isFloat = (num) => num % 1 !== 0;

const normalizeData = (data) => {
  const normalizeData = {};
  normalizeData.date = normalizeDate(data.dt);
  normalizeData.temp = Math.round(Number(data.main.temp)).toString();
  normalizeData.feelsLikeTemp = Math.round(Number(data.main.feels_like)).toString();
  normalizeData.humidity = data.main.humidity.toString();
  normalizeData.pressure = Math.round(Number(data.main.pressure) * 0.750062).toString();
  normalizeData.description = capitalizeWord(data.weather[0].description);
  const visibility = Number(data.visibility) / 1000;
  normalizeData.visibility = isFloat(visibility) ? visibility.toFixed(1) : visibility.toString();
  const windSpeed = Number(data.wind.speed);
  normalizeData.windSpeed = isFloat(windSpeed) ?  windSpeed.toFixed(1) : windSpeed.toString();
  normalizeData.windDeg = data.wind.deg;
  normalizeData.windDirection = windDirectionGenerator(normalizeData.windDeg);
  normalizeData.icon = data.weather[0].icon;
  return normalizeData;
};

export default normalizeData;
