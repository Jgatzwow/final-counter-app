import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    data: {
      greeting: "Choose settings, Please! =)",
      count: 0,
      threshold: 0,
      maxValue: 5,
      startValue: 0,
      error: "",
      screenToggle: false,
    },
  },
  reducers: {
    incrementCount(state) {
      state.data.count = state.data.count + 1;
    },
    resetCount(state) {
      state.data.count = state.data.startValue;
    },

    changeCount(state, action) {
      const payload = action.payload;
      state.data.count = payload.count;
    },
    changeThreshold(state, action) {
      const payload = action.payload;
      state.data.threshold = payload.threshold;
    },
    changeMaxVal(state, action) {
      debugger;
      const payload = action.payload;
      state.data.maxValue = payload.maxValue;
    },
    changeStartVal(state, action) {
      debugger;
      const payload = action.payload;
      state.data.startValue = payload.startValue;
    },
    setError(state, action) {
      const payload = action.payload;
      state.data.error = payload.error;
    },
    screenToggle(state, action) {
      const payload = action.payload;
      state.data.screenToggle = payload.screenToggle;
    },
  },
});

export const {
  incrementCount,
  changeCount,
  changeMaxVal,
  changeStartVal,
  changeThreshold,
  resetCount,
  setError,
  screenToggle,
} = counterSlice.actions;

export default counterSlice;
