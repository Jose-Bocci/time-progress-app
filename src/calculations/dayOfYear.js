export default function calcDayOfYear(date = new Date()) {
  const dayToday = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const initialDay = Date.UTC(date.getFullYear(), 0, 0);
  const differenceMiliseg = dayToday - initialDay;
  const dayDifference = differenceMiliseg / 1000 / 60 / 60 / 24;
  return dayDifference;
}
