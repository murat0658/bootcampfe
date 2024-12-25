import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const meyveSlice = createSlice({
  name: "meyveler",
  initialState,
  reducers: {
    incrementOne: (state) => {
      state.value += 1;
    },
  },
});

export const actions = meyveSlice.actions;

export const selector = (state) => state.meyveler;
