import { createSlice } from "@reduxjs/toolkit";
import { contentLanguage } from "../../utils/contentLanguage";

export const languageSlice = createSlice({
  name: "language",
  initialState: { content: contentLanguage["spanish"] },
  reducers: {
    changeLanguage: (state, action) => {
      state.content = contentLanguage[action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
