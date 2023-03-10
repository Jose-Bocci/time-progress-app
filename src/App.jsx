import * as React from "react";
import "./App.css";
import day from "./calculations/days/day";
import dayPercentage from "./calculations/days/dayPercentage";
import leapYear from "./calculations/leapYear";
import month from "./calculations/months/month";
import monthPercentage from "./calculations/months/monthPercentage";
import seasonPercentageLeapBefore from "./calculations/seasons/percentage/seasonPercentageLeapBefore";
import seasonPercentageLeapYear from "./calculations/seasons/percentage/seasonPercentageLeapYear";
import seasonPercentageNormalYear from "./calculations/seasons/percentage/seasonPercentageNormalYear";
import seasonLeapBefore from "./calculations/seasons/seasonLeapBefore";
import seasonLeapYear from "./calculations/seasons/seasonLeapYear";
import seasonNormalYear from "./calculations/seasons/seasonNormalYear";
import year from "./calculations/years/year";
import yearPercentage from "./calculations/years/yearPercentage";
import LinearProgressWithLabel from "./linearProgress/linearProgressWithLabel";

function App() {
  try {
    const [daysInYear, setDaysInYear] = React.useState(0);
    const [season, setSeason] = React.useState("");
    const [seasonPercentage, setSeasonPercentage] = React.useState(0);
    const [yearValue, setYearValue] = React.useState(0);
    const [yearPercentageValue, setYearPercentageValue] = React.useState(0);
    const [monthValue, setMonthValue] = React.useState("");
    const [monthPercentageValue, setMonthPercentageValue] = React.useState(0);
    const [dayValue, setDayValue] = React.useState("");
    const [dayPercentageValue, setDayPercentageValue] = React.useState(0);
    const leapBefore = leapYear(new Date().getFullYear() - 1);
    const minuteInterval = 1;

    function fillValues() {
      leapYear(new Date().getFullYear())
        ? setDaysInYear(366)
        : setDaysInYear(365);
      if (leapBefore) {
        setSeason(seasonLeapBefore());
        setSeasonPercentage(seasonPercentageLeapBefore());
      }
      if (daysInYear === 366) {
        setSeason(seasonLeapYear());
        setSeasonPercentage(seasonPercentageLeapYear());
      } else {
        setSeason(seasonNormalYear());
        setSeasonPercentage(seasonPercentageNormalYear());
      }
      setYearValue(year());
      setYearPercentageValue(yearPercentage());
      setMonthValue(month());
      setMonthPercentageValue(monthPercentage());
      setDayValue(day());
      setDayPercentageValue(dayPercentage());
    }

    React.useEffect(() => {
      fillValues();
      setInterval(() => {
        fillValues();
      }, 1000 * minuteInterval * 60);
    }, []);

    //#endregion

    return (
      <div className="App">
        <h1>ARGENTINA</h1>
        <div className="card">
          <div
            style={{
              textAlign: "left",
              marginBottom: "10%",
              fontSize: "150%",
            }}
          >
            {yearValue} <LinearProgressWithLabel value={yearPercentageValue} />
          </div>
          <div
            style={{
              textAlign: "left",
              marginBottom: "10%",
              fontSize: "150%",
            }}
          >
            {season} <LinearProgressWithLabel value={seasonPercentage} />
          </div>
          <div
            style={{
              textAlign: "left",
              marginBottom: "10%",
              fontSize: "150%",
            }}
          >
            {monthValue}{" "}
            <LinearProgressWithLabel value={monthPercentageValue} />
          </div>
          <div
            style={{
              textAlign: "left",
              marginBottom: "10%",
              fontSize: "150%",
            }}
          >
            {dayValue} <LinearProgressWithLabel value={dayPercentageValue} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default App;
