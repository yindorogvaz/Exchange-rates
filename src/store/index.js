import { configureStore } from '@reduxjs/toolkit';
import exchangeReduce from './exchangeSlice';

export default configureStore({
  reducer: {
    exchangeRate: exchangeReduce,
  },
});
