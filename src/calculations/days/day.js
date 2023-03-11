export default function day(
  timeHourStart,
  timeHourEnd,
  timeMinuteStart,
  timeMinuteEnd
) {
  const date = new Date();
  let state = "A";
  const tiempoActual =
    date.getHours() * 60 * 60 * 1000 + date.getMinutes() * 60 * 1000;
  const tiempoInicio =
    timeHourStart * 60 * 60 * 1000 + timeMinuteStart * 60 * 1000;
  const tiempoFinal = timeHourEnd * 60 * 60 * 1000 + timeMinuteEnd * 60 * 1000;
  const nightTime = 20 * 60 * 60 * 1000;
  const morningTime = 7 * 60 * 60 * 1000 + 30 * 60 * 1000;
  //if (date.getHours() >= timeHourEnd) {
  if (tiempoActual < tiempoFinal && tiempoActual >= tiempoInicio) {
    state = "HORARIO LABORAL";
    //else if (date.getHours() >= 20 || date.getHours() < 7) {
  } else if (tiempoActual >= nightTime || tiempoActual < morningTime) {
    state = "NOCHE";
  } else if (tiempoActual >= tiempoFinal && tiempoActual < nightTime) {
    state = "TARDE";
  } else if (tiempoActual < tiempoInicio && tiempoActual > morningTime) {
    state = "MAÑANA";
  }

  // if (date.getHours() >= timeHourStart && date.getHours() < timeHourEnd) {
  //   state = "HORARIO LABORAL";
  // }
  // if (date.getHours() > 7 && date.getHours() < timeHourStart) {
  //   state = "MAÑANA";
  // } else if (date.getHours() === 7 && date.getMinutes() >= 30) {
  //   state = "MAÑANA";
  // }

  return state;
}
