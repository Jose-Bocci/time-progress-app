export default function day() {
  const date = new Date();
  let state = "A";
  if (date.getHours() >= 20 || date.getHours() < 7) {
    state = "NOCHE";
  }
  if (date.getHours() >= 14 && date.getHours() < 20) {
    state = "TARDE";
  }
  if (date.getHours() >= 8 && date.getHours() < 14) {
    state = "HORARIO LABORAL";
  }
  if (date.getHours() >= 7 && date.getMinutes() >= 30 && date.getHours() < 8) {
    state = "MAÑANA";
  }
  return state;
}
