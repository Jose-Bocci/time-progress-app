import calcDayOfYear from "../dayOfYear";

const January = { start: 1, end: 31 },
  February = { start: 32, ende: 59 },
  March = { start: 60, end: 90 },
  April = { start: 91, end: 120 },
  May = { start: 121, end: 151 },
  June = { start: 152, end: 181 },
  July = { start: 182, end: 212 },
  August = { start: 213, end: 243 },
  September = { start: 244, end: 273 },
  October = { start: 274, end: 304 },
  November = { start: 305, end: 334 },
  December = { start: 335, end: 365 };

export default function monthPercentage() {
  const dayOfYear = calcDayOfYear();
  let monthPercentage;
  if (dayOfYear >= December.start && dayOfYear <= December.end) {
    monthPercentage = ((dayOfYear - December.start) * 100) / 30;
  }
  if (dayOfYear >= November.start && dayOfYear <= November.end) {
    monthPercentage = ((dayOfYear - November.start) * 100) / 30;
  }
  if (dayOfYear >= October.start && dayOfYear <= October.end) {
    monthPercentage = ((dayOfYear - October.start) * 100) / 30;
  }
  if (dayOfYear >= September.start && dayOfYear <= September.end) {
    monthPercentage = ((dayOfYear - September.start) * 100) / 30;
  }
  if (dayOfYear >= August.start && dayOfYear <= August.end) {
    monthPercentage = ((dayOfYear - August.start) * 100) / 30;
  }
  if (dayOfYear >= July.start && dayOfYear <= July.end) {
    monthPercentage = ((dayOfYear - July.start) * 100) / 30;
  }
  if (dayOfYear >= June.start && dayOfYear <= June.end) {
    monthPercentage = ((dayOfYear - June.start) * 100) / 30;
  }
  if (dayOfYear >= May.start && dayOfYear <= May.end) {
    monthPercentage = ((dayOfYear - May.start) * 100) / 30;
  }
  if (dayOfYear >= April.start && dayOfYear <= April.end) {
    monthPercentage = ((dayOfYear - April.start) * 100) / 30;
  }
  if (dayOfYear >= March.start && dayOfYear <= March.end) {
    monthPercentage = ((dayOfYear - March.start) * 100) / 30;
  }
  if (dayOfYear >= February.start && dayOfYear <= February.end) {
    monthPercentage = ((dayOfYear - February.start) * 100) / 30;
  }
  if (dayOfYear >= January.start && dayOfYear <= January.end) {
    monthPercentage = ((dayOfYear - January.start) * 100) / 30;
  }
  return Math.floor(monthPercentage);
}
