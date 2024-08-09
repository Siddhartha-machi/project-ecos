import { createListenerMiddleware } from "@reduxjs/toolkit";
import { AuthAPI } from "./APIService";
import Storage from "../../services/Storage";

export const storagelistenerMiddleware = createListenerMiddleware();

storagelistenerMiddleware.startListening({
  matcher: AuthAPI.endpoints.logUserIn.matchFulfilled,
  effect: async (action) => {
    const client = new Storage();
    await client.request("save", "user", action.payload);
  },
});
