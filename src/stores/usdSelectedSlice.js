import { createSlice } from "@reduxjs/toolkit";

export const selectedUsdSlice = createSlice({
  name: "usdSelected",
  initialState: {
    value: null,
  },
  reducers: {
    select: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { select } = selectedUsdSlice.actions;
export default selectedUsdSlice.reducer;
