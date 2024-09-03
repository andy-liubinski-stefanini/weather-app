import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import errorReducer from './errorSlice';
// eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    app: appReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
