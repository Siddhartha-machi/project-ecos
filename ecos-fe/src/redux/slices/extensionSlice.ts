import { createSlice } from "@reduxjs/toolkit";
import { extensionState } from "../../typeDefs/slice";
import { extensionType } from "../../typeDefs/extension";

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
      const index = action.payload;
      let newUserEState: Array<Partial<extensionType>> = [];

      const add = !state.extensions[index].meta.added;
      if (add) {
        newUserEState.push({ ...state.extensions[index] });
      } else {
        const removeId = state.extensions[index].id;
        newUserEState = state.userExtensions.filter(
          (item) => item.id === removeId
        );
      }
      state.userExtensions = newUserEState;
      state.extensions[index].meta.added = add;
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
