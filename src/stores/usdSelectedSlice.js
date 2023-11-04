import { createSlice } from "@reduxjs/toolkit";

export const selectedUsdSlice = createSlice({
  name: "selectedUSD",
  initialState: {
    value: null,
  },
  reducers: {
    selectUSD: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectUSD } = selectedUsdSlice.actions;
export default selectedUsdSlice.reducer;
