// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
//import errorReducer from './errorSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    // error: errorReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
