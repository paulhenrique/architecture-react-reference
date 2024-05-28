import { configureStore } from "@reduxjs/toolkit";

// Slices imports
import { redeEletricaSlice } from "./features/redeEletricaSlice";
import { HomeSlice } from "./features/home";
/**
 * Para usar na aplicação:
 * localStorage.setItem('loglevel:app-logger', 'DEBUG')
 */
const devTools = localStorage?.getItem("loglevel:app-logger") === "DEBUG";

export const store = configureStore({
  reducer: {
    // Reducers list
    redeEletrica: redeEletricaSlice.reducer,
    home: HomeSlice.reducer,
  },
  devTools,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
