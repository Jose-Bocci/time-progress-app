import calcDayOfYear from "../dayOfYear";
import month from "./month";

const January = { start: 0, end: 30 },
  February = { start: 31, end: 58 },
  March = { start: 59, end: 89 },
  April = { start: 90, end: 119 },
  May = { start: 120, end: 150 },
  June = { start: 151, end: 180 },
  July = { start: 181, end: 211 },
  August = { start: 212, end: 242 },
  September = { start: 243, end: 272 },
  October = { start: 273, end: 303 },
  November = { start: 304, end: 333 },
  December = { start: 334, end: 364 };

export default function monthPercentage() {
  const dayOfYear = calcDayOfYear();
  let monthPercentage;

  switch (month()) {
    case "ENERO":
      monthPercentage = ((dayOfYear - January.start) * 100) / 31;
      break;
    case "FEBRERO":
      monthPercentage = ((dayOfYear - February.start) * 100) / 28;
      break;
    case "MARZO":
      monthPercentage = ((dayOfYear - March.start) * 100) / 31;
      break;
    case "ABRIL":
      monthPercentage = ((dayOfYear - April.start) * 100) / 30;
      break;
    case "MAYO":
      monthPercentage = ((dayOfYear - May.start) * 100) / 31;
      break;
    case "JUNIO":
      monthPercentage = ((dayOfYear - June.start) * 100) / 30;
      break;
    case "JULIO":
      monthPercentage = ((dayOfYear - July.start) * 100) / 31;
      break;
    case "AGOSTO":
      monthPercentage = ((dayOfYear - August.start) * 100) / 31;
      break;
    case "SEPTIEMBRE":
      monthPercentage = ((dayOfYear - September.start) * 100) / 30;
      break;
    case "OCTUBRE":
      monthPercentage = ((dayOfYear - October.start) * 100) / 31;
      break;
    case "NOVIEMBRE":
      monthPercentage = ((dayOfYear - November.start) * 100) / 30;
      break;
    case "DICIEMBRE":
      monthPercentage = ((dayOfYear - December.start) * 100) / 31;
      break;
  }
  // if (dayOfYear >= December.start && dayOfYear <= December.end) {
  //   monthPercentage = ((dayOfYear - December.start) * 100) / 30;
  // }
  // if (dayOfYear >= November.start && dayOfYear <= November.end) {
  //   monthPercentage = ((dayOfYear - November.start) * 100) / 30;
  // }
  // if (dayOfYear >= October.start && dayOfYear <= October.end) {
  //   monthPercentage = ((dayOfYear - October.start) * 100) / 30;
  // }
  // if (dayOfYear >= September.start && dayOfYear <= September.end) {
  //   monthPercentage = ((dayOfYear - September.start) * 100) / 30;
  // }
  // if (dayOfYear >= August.start && dayOfYear <= August.end) {
  //   monthPercentage = ((dayOfYear - August.start) * 100) / 30;
  // }
  // if (dayOfYear >= July.start && dayOfYear <= July.end) {
  //   monthPercentage = ((dayOfYear - July.start) * 100) / 30;
  // }
  // if (dayOfYear >= June.start && dayOfYear <= June.end) {
  //   monthPercentage = ((dayOfYear - June.start) * 100) / 30;
  // }
  // if (dayOfYear >= May.start && dayOfYear <= May.end) {
  //   monthPercentage = ((dayOfYear - May.start) * 100) / 30;
  // }
  // if (dayOfYear >= April.start && dayOfYear <= April.end) {
  //   monthPercentage = ((dayOfYear - April.start) * 100) / 30;
  // }
  // if (dayOfYear >= March.start && dayOfYear <= March.end) {
  //   monthPercentage = ((dayOfYear - March.start) * 100) / 31;
  // }
  // if (dayOfYear >= February.start && dayOfYear <= February.end) {
  //   monthPercentage = ((dayOfYear - February.start) * 100) / 30;
  // }
  // if (dayOfYear >= January.start && dayOfYear <= January.end) {
  //   monthPercentage = ((dayOfYear - January.start) * 100) / 30;
  // }
  return parseFloat(monthPercentage.toFixed(2));
}
