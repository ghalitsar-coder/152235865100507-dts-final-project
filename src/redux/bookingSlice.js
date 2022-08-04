import { createSlice } from "@reduxjs/toolkit";

const booking = createSlice({
  name: "booking",
  initialState: {
    form: {},
    optionsTravel: {
      adult: 1,
      children: 0,
      room: 1,
    },
  },
  reducers: {
    setForm: (state, { payload }) => {
      console.log(payload);
      state.form = { ...state.form, ...payload };
    },
    setOptionsTravel: (state, { payload }) => {
      console.log(payload);
      if (payload.type === "inc") {
        state.optionsTravel[payload.name] += 1;
      } else {
        if (state.optionsTravel[payload.name] >= 1) {
          state.optionsTravel[payload.name] -= 1;
        }
      }
    },
  },
});

export const { setForm, setOptionsTravel } = booking.actions;
export default booking.reducer;
