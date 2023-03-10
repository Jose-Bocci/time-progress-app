import { configureStore } from "@reduxjs/toolkit";
import selectTimeState from "./features/timeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["timeState"],
};

const rootReducer = combineReducers({
  timeState: selectTimeState,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
