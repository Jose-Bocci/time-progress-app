import calcDayOfYear from "../../dayOfYear";
import seasonNormalYear from "../seasonNormalYear";

let seasonPercentage = 0;
let seasonDay;

//cada 3 meses es cambio de estación

const December = { normal: 355, leapYear: 356 };
const March = { normal: 80, leapYear: 81 };
const June = { normal: 172, leapYear: 173 };
const September = { normal: 264, leapYear: 265 };

export default function seasonPercentageNormalYear() {
  const dayOfYear = calcDayOfYear();
  switch (seasonNormalYear()) {
    case "VERANO":
      if (dayOfYear >= December.normal) {
        seasonDay = dayOfYear - December.normal;
        seasonPercentage = Math.floor((seasonDay * 100) / 90);
      } else {
        if (dayOfYear <= March.normal) {
          seasonDay = March.normal - dayOfYear;
          seasonPercentage = Math.floor(((90 - seasonDay) * 100) / 90);
        }
      }
      break;
    case "OTOÑO":
      if (dayOfYear >= March.normal) {
        seasonDay = dayOfYear - March.normal;
        seasonPercentage = Math.floor((seasonDay * 100) / 92);
      } else {
        if (dayOfYear <= June.normal) {
          seasonDay = June.normal - dayOfYear;
          seasonPercentage = Math.floor(((92 - seasonDay) * 100) / 92);
        }
      }
      break;
    case "INVIERNO":
      if (dayOfYear >= June.normal) {
        seasonDay = dayOfYear - June.normal;
        seasonPercentage = Math.floor((seasonDay * 100) / 92);
      } else {
        if (dayOfYear <= September.normal) {
          seasonDay = September.normal - dayOfYear;
          seasonPercentage = Math.floor(((92 - seasonDay) * 100) / 92);
        }
      }
      break;
    case "PRIMAVERA":
      if (dayOfYear >= September.normal) {
        seasonDay = dayOfYear - September.normal;
        seasonPercentage = Math.floor((seasonDay * 100) / 91);
      } else {
        if (dayOfYear <= December.normal) {
          seasonDay = December.normal - dayOfYear;
          seasonPercentage = Math.floor(((91 - seasonDay) * 100) / 91);
        }
      }
      break;
  }
  return seasonPercentage;
}
