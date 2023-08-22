const normalizeDate = (dt) => {
  const weekdays = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const month = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен', 
    'Окт',
    'Ноя',
    'Дек'
  ]
  const date = new Date(dt * 1000);
  const dayIndex = date.getDay();
  const dateNumber = date.getDate();
  const monthIndex = date.getMonth();
  return `${weekdays[dayIndex]}, ${dateNumber} ${month[monthIndex]}`;
}

export default normalizeDate;
