export default function leapYear(year) {
  return !(year & 3 || (!(year % 25) && year && 15));
}
