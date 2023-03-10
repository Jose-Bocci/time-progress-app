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
import { TimeSelection } from "./app/features/timeSelection";
import { useSelector } from "react-redux";

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
    const [oculto, setOculto] = React.useState(true);
    const timeHourStart = useSelector((state) => state.timeState.start_hour);
    const timeHourEnd = useSelector((state) => state.timeState.end_hour);
    const timeMinutesStart = useSelector(
      (state) => state.timeState.start_minutes
    );
    const timeMinutesEnd = useSelector((state) => state.timeState.end_minutes);
    const [cambio, setCambio] = React.useState(false);

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
      setDayValue(
        day(timeHourStart, timeHourEnd, timeMinutesStart, timeMinutesEnd)
      );
      setDayPercentageValue(
        dayPercentage(
          timeHourStart,
          timeHourEnd,
          timeMinutesStart,
          timeMinutesEnd
        )
      );
    }

    React.useEffect(() => {
      fillValues();
      setInterval(() => {
        fillValues();
      }, 1000 * minuteInterval * 60);
    }, []);

    React.useEffect(() => {
      fillValues();
    }, [timeHourStart, timeHourEnd, timeMinutesStart, timeMinutesEnd]);

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
        <div>
          <TimeSelection fillValues={fillValues} />
        </div>
        <div className="footer">
          <p>App desarrollada por José Bocci en 2023.</p>
          <p>
            Para el horario laboral se utiliza el horario municipal: 08:00 -
            14:00
          </p>
          <p> Horarios usados de Mendoza, Argentina.</p>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default App;
