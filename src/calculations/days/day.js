export default function day(
  timeHourStart,
  timeHourEnd,
  timeMinuteStart,
  timeMinuteEnd
) {
  const date = new Date();
  let state;
  const actualTime =
    date.getHours() * 60 * 60 * 1000 + date.getMinutes() * 60 * 1000;
  const tiempoInicio =
    timeHourStart * 60 * 60 * 1000 + timeMinuteStart * 60 * 1000;
  const tiempoFinal = timeHourEnd * 60 * 60 * 1000 + timeMinuteEnd * 60 * 1000;
  const nightTime = 20 * 60 * 60 * 1000;
  const morningTime = 7 * 60 * 60 * 1000 + 30 * 60 * 1000;
  // let timeTest = 12 * 60 * 60 * 1000;
  if (actualTime < tiempoFinal && actualTime >= tiempoInicio) {
    if (date.getDay() === 0 || date.getDay() === 6) {
      state = "TARDE";
    } else {
      state = "HORARIO LABORAL";
    }
  } else if (actualTime >= nightTime || actualTime < morningTime) {
    state = "NOCHE";
  } else if (actualTime >= tiempoFinal && actualTime < nightTime) {
    state = "TARDE";
  } else if (actualTime < tiempoInicio && actualTime > morningTime) {
    state = "MAÑANA";
  }

  return state;
}
