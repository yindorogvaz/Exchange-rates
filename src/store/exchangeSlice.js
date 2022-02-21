import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExchangeSlice = createAsyncThunk(
  'exchangeRate/fetchExchangeSlice',
  async () => {
    const response = await fetch('https://api.exchangerate.host/latest');
    const data = await response.json();
    return data;
  },
);

const exchangeSlice = createSlice({
  name: 'exchangeRate',
  initialState: {
    rates: [],
    status: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchExchangeSlice.pending]: (state) => {
      state.status = 'loading...';
      state.error = null;
      state.loading = true;
    },
    [fetchExchangeSlice.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.rates = action.payload.rates;
      state.loading = false;
    },
    [fetchExchangeSlice.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default exchangeSlice.reducer;
export const exchangeRateActions = exchangeSlice.actions;
