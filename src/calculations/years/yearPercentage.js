import calcDayOfYear from "../dayOfYear";
import leapYear from "../leapYear";

export default function yearPercentage() {
  const daysInYear = leapYear(new Date().getFullYear()) ? 366 : 365;
  const dayOfYear = calcDayOfYear();

  const yearPercentage = (dayOfYear * 100) / daysInYear;
  return parseFloat(yearPercentage.toFixed(2));
}
