import calcDayOfYear from "../../dayOfYear";
import seasonLeapYear from "../seasonLeapYear";

let seasonPercentage = 0;
let seasonDay;

const December = { normal: 354, leapYear: 354 };
const March = { normal: 79, leapYear: 80 };
const June = { normal: 171, leapYear: 172 };
const September = { normal: 263, leapYear: 264 };

export default function seasonPercentageLeapYear() {
  const dayOfYear = calcDayOfYear();

  switch (seasonLeapYear()) {
    case "VERANO":
      if (dayOfYear >= December.normal) {
        seasonDay = dayOfYear - December.normal;
        seasonPercentage = Math.floor((seasonDay * 100) / 91);
      } else {
        if (dayOfYear <= March.leapYear) {
          seasonDay = March.leapYear - dayOfYear;
          seasonPercentage = Math.floor(((91 - seasonDay) * 100) / 91);
        }
      }
      break;
    case "OTOÑO":
      if (dayOfYear >= March.leapYear) {
        seasonDay = dayOfYear - March.leapYear;
        seasonPercentage = Math.floor((seasonDay * 100) / 92);
      } else {
        if (dayOfYear <= June.leapYear) {
          seasonDay = June.leapYear - dayOfYear;
          seasonPercentage = Math.floor(((92 - seasonDay) * 100) / 92);
        }
      }
      break;
    case "INVIERNO":
      if (dayOfYear >= June.leapYear) {
        seasonDay = dayOfYear - June.leapYear;
        seasonPercentage = Math.floor((seasonDay * 100) / 92);
      } else {
        if (dayOfYear <= September.leapYear) {
          seasonDay = September.leapYear - dayOfYear;
          seasonPercentage = Math.floor(((92 - seasonDay) * 100) / 92);
        }
      }
      break;
    case "PRIMAVERA":
      if (dayOfYear >= September.leapYear) {
        seasonDay = dayOfYear - September.leapYear;
        seasonPercentage = Math.floor((seasonDay * 100) / 91);
      } else {
        if (dayOfYear <= December.leapYear) {
          seasonDay = December.leapYear - dayOfYear;
          seasonPercentage = Math.floor(((91 - seasonDay) * 100) / 91);
        }
      }
      break;
  }
  return seasonPercentage;
}
