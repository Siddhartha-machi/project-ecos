import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./slices/appSlice";
import saveProtalSlice from "./slices/saveProtalSlice";
import { AuthAPI, ExtensionAPI, UserAPI } from "./services/APIService";
import { storagelistenerMiddleware } from "./services/middleware";

export const store = configureStore({
  reducer: {
    app: appSlice,
    savePortal: saveProtalSlice,
    [ExtensionAPI.reducerPath]: ExtensionAPI.reducer,
    [UserAPI.reducerPath]: UserAPI.reducer,
    [AuthAPI.reducerPath]: AuthAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(storagelistenerMiddleware.middleware)
      .concat(ExtensionAPI.middleware, UserAPI.middleware, AuthAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
