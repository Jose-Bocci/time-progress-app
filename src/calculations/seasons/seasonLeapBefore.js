//#region calculo estación
//cada 3 meses es cambio de estación
//+1 dia verano si leapYear
// 21 DICIEMBRE(355) - 21 MARZO(80) = VERANO --> 90 días
// 21 MARZO(80) - 21 JUNIO(172) = OTOÑO --> 92 días
// 21 JUNIO(172) - 21 SEPTIEMBRE(264) = INVIERNO --> 92 días
// 21 SEPTIEMBRE(264) - 21 DICIMEBRE(355) = PRIMAVERA --> 91 días

import calcDayOfYear from "../dayOfYear";

//cada 3 meses es cambio de estación
const December = { normal: 355, leapYear: 356 };
const March = { normal: 80, leapYear: 81 };
const June = { normal: 172, leapYear: 173 };
const September = { normal: 264, leapYear: 265 };

export default function seasonLeapBefore() {
  const dayOfYear = calcDayOfYear();

  let season;
  if (dayOfYear > December.leapYear || dayOfYear <= March.normal) {
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
//#endregion
