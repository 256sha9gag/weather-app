import generateId from "./generateId.js";

const normalizeHour = (dt) => {
  const date = new Date(dt * 1000);
  const hour = date.getHours();
  let normalizeHour = hour;

  if (hour.toString().length === 1) {
    normalizeHour = `0${normalizeHour}`;
  }

  return `${normalizeHour}:00`;
}

const normalizeTemp = (temp) => Math.round(Number(temp)).toString();

const getHourlyData = (data) => data.list.reduce((acc, item, index) => {
  if (index < 8) {
    acc.push({ 
      date: normalizeHour(item.dt), 
      temp: normalizeTemp(item.main.temp), 
      icon: item.weather[0].icon,
      id: generateId(),
    });
  }

  return acc;
  }, []);

export default getHourlyData;
