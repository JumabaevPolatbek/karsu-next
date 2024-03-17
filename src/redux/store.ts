import { configureStore } from "@reduxjs/toolkit";
import { menuAPI } from "@/redux/slice/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [menuAPI.reducerPath]: menuAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuAPI.middleware),
});
setupListeners(store.dispatch);