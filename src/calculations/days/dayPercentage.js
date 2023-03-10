/**
 * DAY TIME ==> 07:30 -> 08:00
 * WORKDAY ==> 09:00 -> 14:00
 * AFTERNOON ==> 14:00 -> 20:00
 * NIGHT TIME ==> 20:00 -> 07:30
 */

import day from "./day";

export default function dayPercentage() {
  const date = new Date();
  let actualTime, timePercentage;
  const nightTime = 11 * 60 * 60 * 1000 + 30 * 60 * 1000;
  const dayTime = 30 * 60 * 1000;
  const workTime = 6 * 60 * 60 * 1000;
  const completeMorning = dayTime+workTime;
  const afternoonTime = 6 * 60 * 60 * 1000;
  actualTime =
    date.getHours() * 60 * 60 * 1000 +
    date.getMinutes() * 60 * 1000 +
    date.getSeconds() * 1000;
  const nightStart = 20 * 60 * 60 * 1000;
  const dayStart = 7 * 60 * 60 * 1000 + 30 * 60 * 1000;
  const workStart = 8 * 60 * 60 * 1000;
  const afternoonStart = 14 * 60 * 60 * 1000;
  switch (day()) {
    case "NOCHE":
      if (date.getHours() <= 20) {
        timePercentage =
          100 -
          ((nightTime - (actualTime + 4 * 60 * 60 * 1000)) * 100) / nightTime;
      } else {
        timePercentage =
          100 - ((nightTime - (actualTime - nightStart)) * 100) / nightTime;
      }
      break;
    case "DÍA":
    case "HORAS DE TRABAJO":
      timePercentage =
        100 - (completeMorning - ((actualTime - dayStart) * 100) / completeMorning);
      break;
    case "TARDE":
      timePercentage =
        100 -
        (afternoonTime - ((actualTime - afternoonStart) * 100) / afternoonTime);
      break;
  }

  return timePercentage;
}
