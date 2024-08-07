import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enable: false,
};

const savePortalSlice = createSlice({
  name: "dialog-slice",
  initialState,
  reducers: {
    togglePortal: (state) => {
      state.enable = !state.enable;
    },
  },
});

export default savePortalSlice.reducer;

export const { togglePortal } = savePortalSlice.actions;
