import { createSlice } from "@reduxjs/toolkit";
// import { appState } from "../../Types/reduxTypes"; --fix

const initialState = {
  loading: false,
  disableSearch: true,
  loadingLabel: "",
};
const appSlice = createSlice({
  name: "app-slice",
  initialState,
  reducers: {
    appLoading: (state, action) => {
      state.loading = action.payload.loadVal;
      state.loadingLabel = action.payload.label;
    },
    setSearchDisable: (state, action) => {
      state.disableSearch = action.payload;
    },
  },
});

export default appSlice.reducer;

export const { appLoading, setSearchDisable } = appSlice.actions;
