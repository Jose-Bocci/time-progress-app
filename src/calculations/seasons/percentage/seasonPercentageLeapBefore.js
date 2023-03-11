import calcDayOfYear from "../../dayOfYear";
import seasonLeapBefore from "../seasonLeapBefore";

const December = { normal: 354, leapYear: 354 };
const March = { normal: 79, leapYear: 80 };
const June = { normal: 171, leapYear: 172 };
const September = { normal: 263, leapYear: 264 };
let seasonPercentage;
let seasonDay;

export default function seasonPercentageLeapBefore() {
  const dayOfYear = calcDayOfYear();

  switch (seasonLeapBefore()) {
    case "VERANO":
      if (dayOfYear >= December.leapYear) {
        seasonDay = dayOfYear - December.leapYear;
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
