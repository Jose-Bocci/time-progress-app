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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { store } from "./app/store";

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
    const secondInterval = 1;
    const [oculto, setOculto] = React.useState(true);
    // const [timeHourStart, setTimeHourStart] = React.useState(
    //   useSelector((state) => state.timeState.start_hour)
    // );
    // const [timeHourEnd, setTimeHourEnd] = React.useState(
    //   useSelector((state) => state.timeState.end_hour)
    // );
    // const [timeMinutesStart, setTimeMinutesStart] = React.useState(
    //   useSelector((state) => state.timeState.start_minutes)
    // );
    // const [timeMinutesEnd, setTimeMinutesEnd] = React.useState(
    //   useSelector((state) => state.timeState.end_minutes)
    // );
    const timeHourStart = useSelector((state) => state.timeState.start_hour);
    const timeHourEnd = useSelector((state) => state.timeState.end_hour);
    const timeMinutesStart = useSelector(
      (state) => state.timeState.start_minutes
    );
    const timeMinutesEnd = useSelector((state) => state.timeState.end_minutes);

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
        day(
          store.getState().timeState.start_hour,
          store.getState().timeState.end_hour,
          store.getState().timeState.start_minutes,
          store.getState().timeState.end_minutes
        )
      );
      // console.log({ timeHourEnd });
      setDayPercentageValue(
        dayPercentage(
          store.getState().timeState.start_hour,
          store.getState().timeState.end_hour,
          store.getState().timeState.start_minutes,
          store.getState().timeState.end_minutes
        )
      );
      // console.log({ timeHourEnd });
    }

    // React.useEffect(() => {
    //   fillValues();
    // }, []);

    React.useEffect(() => {
      fillValues();
      // console.log(store.getState().timeState.end_hour);
    }, [timeHourStart, timeHourEnd, timeMinutesStart, timeMinutesEnd]);

    React.useEffect(() => {
      setInterval(() => {
        fillValues();
      }, 1000 * secondInterval);
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

        <div className="footer">
          <p>App desarrollada por José Bocci en 2023.</p>
          <p>
            Para el horario laboral se utiliza:{" "}
            {useSelector((state) => state.timeState.start_hour) < 10
              ? "0".concat(useSelector((state) => state.timeState.start_hour))
              : useSelector((state) => state.timeState.start_hour)}
            :
            {useSelector((state) => state.timeState.start_minutes) < 10
              ? "0".concat(
                  useSelector((state) => state.timeState.start_minutes)
                )
              : useSelector((state) => state.timeState.start_minutes)}{" "}
            -{" "}
            {useSelector((state) => state.timeState.end_hour) < 10
              ? "0".concat(useSelector((state) => state.timeState.end_hour))
              : useSelector((state) => state.timeState.end_hour)}
            :
            {useSelector((state) => state.timeState.end_minutes) < 10
              ? "0".concat(useSelector((state) => state.timeState.end_minutes))
              : useSelector((state) => state.timeState.end_minutes)}{" "}
            <SettingsOutlinedIcon onClick={() => setOculto(!oculto)} />
          </p>
          <div>
            <TimeSelection fillValues={fillValues} oculto={oculto} />
          </div>
          <p> Horarios usados de Mendoza, Argentina.</p>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default App;
