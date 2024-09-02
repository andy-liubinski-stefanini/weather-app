import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import errorReducer from './errorSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
