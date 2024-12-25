import { configureStore } from "@reduxjs/toolkit";
import { meyveSlice } from "./slice";

const store = configureStore({
  reducer: {
    meyveler: meyveSlice.reducer,
  },
});

export default store;
