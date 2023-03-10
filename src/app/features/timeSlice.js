import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start_hour: 8,
  start_minutes: 0,
  end_hour: 14,
  end_minutes: 0,
};

export const timeSlice = createSlice({
  name: "timeSlice",
  initialState,
  reducers: {
    incrementHoursStart: (state) => {
      if (state.start_hour === 23) {
        state.start_hour = 0;
      } else {
        state.start_hour += 1;
      }
    },
    incrementMinutesStart: (state) => {
      if (state.start_minutes === 59) {
        state.start_minutes = 0;
      } else {
        state.start_minutes += 1;
      }
    },
    incrementHoursEnd: (state) => {
      if (state.end_hour === 23) {
        state.end_hour = 0;
      } else {
        state.end_hour += 1;
      }
    },
    incrementMinutesEnd: (state) => {
      if (state.end_minutes === 59) {
        state.end_minutes = 0;
      } else {
        state.end_minutes += 1;
      }
    },
    decrementHoursStart: (state) => {
      if (state.start_hour === 0) {
        state.start_hour = 23;
      } else {
        state.start_hour -= 1;
      }
    },
    decrementMinutesStart: (state) => {
      if (state.start_minutes === 0) {
        state.start_minutes = 59;
      } else {
        state.start_minutes -= 1;
      }
    },
    decrementHoursEnd: (state) => {
      if (state.end_hour === 0) {
        state.end_hour = 23;
      } else {
        state.end_hour -= 1;
      }
    },
    decrementMinutesEnd: (state) => {
      if (state.end_minutes === 0) {
        state.end_minutes = 59;
      } else {
        state.end_minutes -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementHoursStart,
  decrementHoursStart,
  incrementHoursEnd,
  decrementHoursEnd,
  incrementMinutesStart,
  decrementMinutesStart,
  incrementMinutesEnd,
  decrementMinutesEnd,
} = timeSlice.actions;
export const selectTimeState = (state) => state.timeState;
export default timeSlice.reducer;
