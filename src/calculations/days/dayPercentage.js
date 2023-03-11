/**
 * DAY TIME ==> 07:30 -> 08:00 (INICIO TRABAJO)
 * WORKDAY ==> 08:00 (INICIO TRABAJO) -> 14:00 (FIN TRABAJO)
 * AFTERNOON ==> 14:00 (FIN TRABAJO) -> 20:00
 * NIGHT TIME ==> 20:00 -> 07:30
 */

import day from "./day";

export default function dayPercentage(
  timeHourStart,
  timeHourEnd,
  timeMinuteStart,
  timeMinuteEnd
) {
  const date = new Date();
  let timePercentage;
  const dayStart = 7 * 60 * 60 * 1000 + 30 * 60 * 1000;
  const nightStart = 20 * 60 * 60 * 1000;
  const workStart =
    timeHourStart * 60 * 60 * 1000 + timeMinuteStart * 60 * 1000;
  const afternoonStart =
    timeHourEnd * 60 * 60 * 1000 + timeMinuteEnd * 60 * 1000;
  const workEnd = timeHourEnd * 60 * 60 * 1000 + timeMinuteEnd * 60 * 1000;
  const workTime = workEnd - workStart;
  const dayTime = workStart - (7 * 60 * 60 * 1000 + 30 * 60 * 1000);
  const afternoonTime = nightStart - workEnd;
  const nightTime = 11 * 60 * 60 * 1000 + 30 * 60 * 1000;
  let actualTime =
    date.getHours() * 60 * 60 * 1000 + date.getMinutes() * 60 * 1000;
  // let testTime = 0 * 60 * 60 * 1000 + 0 * 60 * 1000;
  let timeOfDay = day(
    timeHourStart,
    timeHourEnd,
    timeMinuteStart,
    timeMinuteEnd
  );
  switch (timeOfDay) {
    case "NOCHE":
      if (actualTime >= nightStart) {
        timePercentage = ((actualTime - nightStart) * 100) / nightTime;
      }
      if (actualTime <= nightStart) {
        timePercentage = ((actualTime + 4 * 60 * 60 * 1000) * 100) / nightTime;
      }
      break;
    case "MAÑANA":
      timePercentage = ((actualTime - dayStart) * 100) / dayTime;

      break;
    case "HORARIO LABORAL":
      timePercentage = ((actualTime - workStart) * 100) / workTime;
      break;
    case "TARDE":
      timePercentage = ((actualTime - afternoonStart) * 100) / afternoonTime;
      break;
  }
  return timePercentage;
}
