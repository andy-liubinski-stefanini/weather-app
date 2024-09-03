import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
  error: string | undefined;
}

const initialState: ErrorState = {
  error: undefined,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError: () => initialState,
  },
  selectors: {
    selectError: state => state.error,
  },
});

export const { setError, clearError } = errorSlice.actions;
export const { selectError } = errorSlice.selectors;

export default errorSlice.reducer;
