import { createSlice } from "@reduxjs/toolkit";
import { extensionState } from "../../typeDefs/slice";

const initialState: extensionState = {
  extensions: [],
  userExtensions: [],
};
const extensionSlice = createSlice({
  name: "extension-slice",
  initialState,
  reducers: {
    loadExtensionsData: (state, action) => {
      state.extensions = action.payload.extensions;
      state.userExtensions = action.payload.userExtensions;
      return state;
    },
    toggleFromCollection: (state, action) => {
      state.extensions[action.payload].meta.added =
        !state.extensions[action.payload].meta.added;
      return state;
    },
    toggleExtension: (state, action) => {
     state.extensions[action.payload].meta.disabled =
       !state.extensions[action.payload].meta.disabled;
      return state;
    },
  },
});

export default extensionSlice.reducer;

export const { loadExtensionsData, toggleFromCollection, toggleExtension } =
  extensionSlice.actions;
