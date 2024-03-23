import { createSlice } from "@reduxjs/toolkit";
import { appState } from "../../typeDefs/slice";

const initialState: appState = {
  mock: false,
  loading: false,
  localLoading: false,
  disableSearch: true,
  loadingLabel: "",
};
const appSlice = createSlice({
  name: "app-slice",
  initialState,
  reducers: {
    toggleMock: (state) => {
      state.mock = !state.mock;
    },
    appLoading: (state, action) => {
      state.loading = action.payload.loadVal;
      state.loadingLabel = action.payload.label || "";
    },
    setSearchDisable: (state, action) => {
      state.disableSearch = action.payload;
    },
    setLocalLoading: (state, action) => {
      state.localLoading = action.payload.loadVal;
      state.loadingLabel = action.payload.label || "";
    },
  },
});

export default appSlice.reducer;

export const { appLoading, setSearchDisable, setLocalLoading, toggleMock } =
  appSlice.actions;
