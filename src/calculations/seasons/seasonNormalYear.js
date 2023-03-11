//#region calculo estación
//cada 3 meses es cambio de estación
//+1 dia verano si leapYear
// 21 DICIEMBRE(355) - 21 MARZO(80) = VERANO --> 90 días
// 21 MARZO(80) - 21 JUNIO(172) = OTOÑO --> 92 días
// 21 JUNIO(172) - 21 SEPTIEMBRE(264) = INVIERNO --> 92 días
// 21 SEPTIEMBRE(264) - 21 DICIMEBRE(355) = PRIMAVERA --> 91 días
import calcDayOfYear from "../dayOfYear";

//cada 3 meses es cambio de estación

const December = { normal: 354, leapYear: 354 };
const March = { normal: 79, leapYear: 80 };
const June = { normal: 171, leapYear: 172 };
const September = { normal: 263, leapYear: 264 };

export default function seasonNormalYear() {
  const dayOfYear = calcDayOfYear();

  let season;
  if (dayOfYear > December.normal || dayOfYear <= March.normal) {
    season = "VERANO";
  }
  if (dayOfYear > March.normal && dayOfYear <= June.normal) {
    season = "OTOÑO";
  }
  if (dayOfYear > June.normal && dayOfYear <= September.normal) {
    season = "INVIERNO";
  }
  if (dayOfYear > September.normal && dayOfYear <= December.normal) {
    season = "PRIMAVERA";
  }
  return season;
}

// PENSAR EN FORMA DE RESTA

//#endregion
