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
  // console.log(timeHourStart, timeMinuteStart, timeHourEnd, timeMinuteEnd);
  const timeHStart = timeHourStart,
    timeMStart = timeMinuteStart,
    timeHEnd = timeHourEnd,
    timeMEnd = timeMinuteEnd;
  const date = new Date();
  let actualTime, timePercentage;
  const timeStart =
    timeHourStart * 60 * 60 * 1000 + timeMinuteStart * 60 * 1000;
  const nightTime = 11 * 60 * 60 * 1000 + 30 * 60 * 1000;
  const dayTime = timeStart - (7 * 60 * 60 * 1000 + 30 * 60 * 1000);
  const workTime = (timeHourEnd - timeHourStart) * 60 * 60 * 1000;
  const afternoonTime =
    (20 - timeHourEnd) * 60 * 60 * 1000 - timeMinuteEnd * 60 * 1000;
  actualTime =
    date.getHours() * 60 * 60 * 1000 +
    date.getMinutes() * 60 * 1000 +
    date.getSeconds() * 1000;
  const nightStart = 20 * 60 * 60 * 1000;
  const dayStart = 7 * 60 * 60 * 1000 + 30 * 60 * 1000;
  const workStart =
    timeHourStart * 60 * 60 * 1000 + timeMinuteStart * 60 * 1000;
  const afternoonStart =
    timeHourEnd * 60 * 60 * 1000 + timeMinuteEnd * 60 * 1000;
  switch (day(timeHStart, timeHEnd, timeMStart, timeMEnd)) {
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
    case "MAÑANA":
      timePercentage =
        100 - ((dayTime - (actualTime - dayStart)) * 100) / dayTime;
      break;
    case "HORARIO LABORAL":
      timePercentage =
        100 - ((workTime - (actualTime - workStart)) * 100) / workTime;
      break;
    case "TARDE":
      timePercentage =
        100 -
        ((afternoonTime - (actualTime - afternoonStart)) * 100) / afternoonTime;
      break;
  }

  return timePercentage;
}
