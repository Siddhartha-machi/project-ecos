import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./slices/appSlice";
import userSlice from "./slices/userSlice";
import extensionSlice from "./slices/extensionSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
    extension: extensionSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
