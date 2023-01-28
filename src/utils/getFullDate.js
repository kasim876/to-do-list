function getDayOfWeek(date) {
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  return days[date.getDay()];
}

function getMonth(date) {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  return months[date.getMonth()];
}

export default function getFullDate(date) {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000);
  date = typeof date === 'object' ? date : new Date(date);

  if (today.toDateString() === date.toDateString()) {
    return 'сегодня';
  } else if (tomorrow.toDateString() === date.toDateString()) {
    return 'завтра';
  } else {
    return `${getDayOfWeek(date)}, ${date.getDate()} ${getMonth(date)}`;
  }
}