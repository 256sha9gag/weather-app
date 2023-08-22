import normalizeDate from "./normalizeDate.js";
import generateId from "./generateId.js";

const normalizeDailyData = (list) => {
  const result = list.map((item) => {
    const maxTemp = Math.round(Math.max(...item.map((data) => data.main.temp_max)));
    const minTemp = Math.round(Math.min(...item.map((data) => data.main.temp_min)));
    const iconItem = item.filter((data) => new Date(Number(data.dt * 1000)).getHours() === 15);
    let icon = item[0].weather[0].icon;
  
    if (iconItem[0]) {
      icon = iconItem[0].weather[0].icon;
    }

    return {
      maxTemp,
      minTemp,
      icon,
      date: normalizeDate(Number(item[0].dt)),
      id: generateId(),
    };
  });

  result[0].date = 'Завтра';

  return result;
};


const getDailyData = (data) => {
  const dailyData = [];
  let currentDay = null;

  data.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const day = date.getDate();

    if (currentDay !== day) {
      currentDay = day;
      dailyData.push([]);
    }

    dailyData[dailyData.length - 1].push(item);

  })

  if (dailyData.length > 5) {
    return normalizeDailyData(dailyData.slice(1));
  }
  
  return normalizeDailyData(dailyData);
};

export default getDailyData;
