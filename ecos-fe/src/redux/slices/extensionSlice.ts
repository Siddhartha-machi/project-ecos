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
      const id = action.payload;

      let index = 0;
      const item = state.extensions.find((item, itemIndex) => {
        const found = item.id === id;
        if (found) {
          index = itemIndex;
        }
        return found;
      });

      if (item) {
        if (!item.meta.added) {
          state.userExtensions.push({ ...item });
        } else {
          state.userExtensions = state.userExtensions.filter(
            (item) => item.id !== id
          );
        }
        state.extensions[index].meta.added = !item.meta.added;
      }

      return state;
    },
    toggleExtension: (state, action) => {
      const id = action.payload;

      const item = state.extensions.find((item) => item.id === id);
      if (item) {
        if (!item.meta.disabled) {
          state.userExtensions = state.userExtensions.filter(
            (item) => item.id !== id
          );
        }
        item.meta.disabled = !item.meta.disabled;
      }

      return state;
    },
  },
});

export default extensionSlice.reducer;

export const { loadExtensionsData, toggleFromCollection, toggleExtension } =
  extensionSlice.actions;
