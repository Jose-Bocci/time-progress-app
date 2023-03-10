export default function day(
  timeHourStart,
  timeHourEnd,
  timeMinuteStart,
  timeMinuteEnd
) {
  const date = new Date();
  let state = "A";
  if (date.getHours() >= 20 || date.getHours() < 7) {
    state = "NOCHE";
  }
  if (date.getHours() >= timeHourEnd && date.getHours() < 20) {
    state = "TARDE";
  }
  if (date.getHours() >= timeHourStart && date.getHours() < timeHourEnd) {
    state = "HORARIO LABORAL";
  }
  if (
    date.getHours() >= 7 &&
    date.getMinutes() >= 30 &&
    date.getHours() < timeHourStart
  ) {
    state = "MAÑANA";
  }
  return state;
}
