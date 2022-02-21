import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import ExchangeRate from './components/exchange/ExchangeRate';
import { fetchExchangeSlice } from './store/exchangeSlice';

const App = () => {
  const loading = useSelector((state) => state.exchangeRate.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExchangeSlice());
  }, []);
  return (
    <div className="App">
      {loading ? 'Loading...'
        : (
          <>
            <Header />
            <ExchangeRate />
          </>
        )}
    </div>
  );
};

export default App;
