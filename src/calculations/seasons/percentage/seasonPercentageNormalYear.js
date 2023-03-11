import calcDayOfYear from "../../dayOfYear";
import seasonNormalYear from "../seasonNormalYear";

let seasonPercentage = 0;
let seasonDay;

//cada 3 meses es cambio de estación

const December = { normal: 354, leapYear: 354 };
const March = { normal: 79, leapYear: 80 };
const June = { normal: 171, leapYear: 172 };
const September = { normal: 263, leapYear: 264 };

export default function seasonPercentageNormalYear() {
  const dayOfYear = calcDayOfYear();
  // console.log(dayOfYear);
  switch (seasonNormalYear()) {
    case "VERANO":
      if (dayOfYear >= December.normal) {
        seasonDay = dayOfYear - December.normal;
        seasonPercentage = (seasonDay * 100) / 90;
      } else {
        if (dayOfYear <= March.normal) {
          seasonDay = March.normal - dayOfYear;
          seasonPercentage = ((90 - seasonDay) * 100) / 90;
        }
      }
      break;
    case "OTOÑO":
      if (dayOfYear >= March.normal) {
        seasonDay = dayOfYear - March.normal;
        seasonPercentage = (seasonDay * 100) / 92;
      } else {
        if (dayOfYear <= June.normal) {
          seasonDay = June.normal - dayOfYear;
          seasonPercentage = ((92 - seasonDay) * 100) / 92;
        }
      }
      break;
    case "INVIERNO":
      if (dayOfYear >= June.normal) {
        seasonDay = dayOfYear - June.normal;
        seasonPercentage = (seasonDay * 100) / 92;
      } else {
        if (dayOfYear <= September.normal) {
          seasonDay = September.normal - dayOfYear;
          seasonPercentage = ((92 - seasonDay) * 100) / 92;
        }
      }
      break;
    case "PRIMAVERA":
      if (dayOfYear >= September.normal) {
        seasonDay = dayOfYear - September.normal;
        seasonPercentage = (seasonDay * 100) / 91;
      } else {
        if (dayOfYear <= December.normal) {
          seasonDay = December.normal - dayOfYear;
          seasonPercentage = ((91 - seasonDay) * 100) / 91;
        }
      }
      break;
  }
  return parseFloat(seasonPercentage.toFixed(2));
}
