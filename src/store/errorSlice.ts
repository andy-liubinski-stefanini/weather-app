import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
