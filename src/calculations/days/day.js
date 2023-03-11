export default function day(
  timeHourStart,
  timeHourEnd,
  timeMinuteStart,
  timeMinuteEnd
) {
  const date = new Date();
  let state = "A";

  if (date.getHours() >= timeHourEnd) {
    if (date.getMinutes() < timeMinuteEnd) {
      state = "HORARIO LABORAL";
    } else {
      if (date.getHours() >= 20 || date.getHours() < 7) {
        state = "NOCHE";
      } else {
        state = "TARDE";
      }
    }
  }
  if (date.getHours() >= timeHourStart && date.getHours() < timeHourEnd) {
    state = "HORARIO LABORAL";
  }
  if (date.getHours() > 7 && date.getHours() < timeHourStart) {
    state = "MAÑANA";
  } else if (date.getHours() === 7 && date.getMinutes() >= 30) {
    state = "MAÑANA";
  }

  return state;
}
