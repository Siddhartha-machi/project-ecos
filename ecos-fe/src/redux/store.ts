import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./slices/appSlice";
import userSlice from "./slices/userSlice";
import extensionSlice from "./slices/extensionSlice";
import saveProtalSlice from "./slices/saveProtalSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
    extension: extensionSlice,
    savePortal: saveProtalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
