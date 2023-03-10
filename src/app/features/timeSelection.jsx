import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementHoursEnd,
  incrementHoursStart,
  incrementMinutesEnd,
  incrementMinutesStart,
  decrementHoursEnd,
  decrementHoursStart,
  decrementMinutesEnd,
  decrementMinutesStart,
} from "./timeSlice";

export function TimeSelection() {
  const timeHourStart = useSelector((state) => state.timeState.start_hour);
  const timeMinuteStart = useSelector((state) => state.timeState.start_minutes);
  const timeHourEnd = useSelector((state) => state.timeState.end_hour);
  const timeMinuteEnd = useSelector((state) => state.timeState.end_minutes);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>Hora Entrada</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              padding: 10,
              margin: 10,
            }}
            aria-label="Aumentar Hora Inicio"
            disabled={timeHourStart + 1 >= timeHourEnd}
            onClick={() => dispatch(incrementHoursStart())}
          >
            +H
          </button>
          <button
            style={{ padding: 10, margin: 10 }}
            aria-label="Aumentar Minutos Inicio"
            onClick={() => dispatch(incrementMinutesStart())}
          >
            +M
          </button>
        </div>{" "}
        <span
          style={{
            fontSize: "150%",
          }}
        >
          {timeHourStart < 10 ? "0".concat(timeHourStart) : timeHourStart}:
          {timeMinuteStart < 10 ? "0".concat(timeMinuteStart) : timeMinuteStart}
        </span>{" "}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{ padding: 10, margin: 10 }}
            aria-label="Disminuir Hora Inicio"
            disabled={timeHourStart - 1 < 0}
            onClick={() => dispatch(decrementHoursStart())}
          >
            -H
          </button>
          <button
            style={{ padding: 10, margin: 10 }}
            aria-label="Disminuir Minutos Inicio"
            onClick={() => dispatch(decrementMinutesStart())}
          >
            -M
          </button>
        </div>
      </div>
      <div>
        <p>Hora Salida</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{ padding: 10, margin: 10 }}
            aria-label="Aumentar Hora de Salida"
            disabled={
              timeHourEnd + 1 <= timeHourStart || timeHourEnd + 1 === 24
                ? true
                : false
            }
            onClick={() => dispatch(incrementHoursEnd())}
          >
            +H
          </button>
          <button
            style={{ padding: 10, margin: 10 }}
            aria-label="Aumentar Minutos de Salida"
            onClick={() => dispatch(incrementMinutesEnd())}
          >
            +M
          </button>
        </div>{" "}
        <span
          style={{
            fontSize: "150%",
          }}
        >
          {timeHourEnd < 10 ? "0".concat(timeHourEnd) : timeHourEnd}:
          {timeMinuteEnd < 10 ? "0".concat(timeMinuteEnd) : timeMinuteEnd}
        </span>{" "}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{ padding: 10, margin: 10 }}
            aria-label="Disminuir Hora de Salida"
            disabled={timeHourEnd - 1 <= timeHourStart}
            onClick={() => dispatch(decrementHoursEnd())}
          >
            -H
          </button>
          <button
            style={{ padding: 10, margin: 10 }}
            aria-label="Disminuir Minutos de Salida"
            onClick={() => dispatch(decrementMinutesEnd())}
          >
            -M
          </button>
        </div>
      </div>
    </div>
  );
}
