import React, { useEffect, useState } from 'react';
import {
  Box, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { useSelector } from 'react-redux';

function ExchangeRate() {
  const rates = useSelector((state) => state.exchangeRate.rates);
  const [currencyFrom, setCurrencyFrom] = useState('UAH');
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);

  function format(number) {
    return number.toFixed(2);
  }

  // eslint-disable-next-line no-shadow
  const handleCurrencyFromChange = (currencyFrom) => {
    setAmountTo(format(amountFrom * rates[currencyTo] / rates[currencyFrom]));
    setCurrencyFrom(currencyFrom);
  };

  // eslint-disable-next-line no-shadow
  function handleCurrencyToChange(currencyTo) {
    setAmountTo(format(amountFrom * rates[currencyTo] / rates[currencyFrom]));
    /* setAmountFrom(format(amountTo * rates[currencyFrom] / rates[currencyTo])); - one */
    /* setAmountTo(format(amountFrom * rates[currencyTo] / rates[currencyFrom])); - two */
    setCurrencyTo(currencyTo);
  }

  // eslint-disable-next-line no-shadow
  function handleAmountToChange(amountTo) {
    setAmountFrom(format(amountTo * rates[currencyFrom] / rates[currencyTo]));
    setAmountTo(amountTo);
  }

  // eslint-disable-next-line no-shadow
  function handleAmountFromChange(amountFrom) {
    setAmountTo(format(amountFrom * rates[currencyTo] / rates[currencyFrom]));
    setAmountFrom(amountFrom);
  }

  useEffect(() => {
    setAmountFrom(rates.UAH);
    setAmountTo(rates.EUR);
  }, [rates]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <Box sx={{ maxWidth: 200, margin: '30px 20px' }}>
          <FormControl fullWidth>
            <InputLabel id="exchange-rate">Currency</InputLabel>
            <Select
              defaultValue={currencyFrom}
              labelId="currency"
              id="rate"
              label="exchange"
              onChange={(e) => handleCurrencyFromChange(e.target.value)}
            >
              {Object.keys(rates).map((key) => (
                <MenuItem
                  value={key}
                  key={key}
                >
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            value={amountFrom}
            type="number"
            id="standard-basic"
            onChange={(e) => handleAmountFromChange(e.target.value)}
            label="amount"
            variant="standard"
          />
        </Box>
      </div>
      <div>
        <Box sx={{ maxWidth: 200, margin: '30px 20px' }}>
          <FormControl fullWidth>
            <InputLabel id="exchange-rate">Currency</InputLabel>
            <Select
              labelId="currency"
              id="rate"
              label="exchange"
              value={currencyTo}
              onChange={(e) => handleCurrencyToChange(e.target.value)}
            >
              {Object.keys(rates).map((key) => (
                <MenuItem
                  value={key}
                  key={key}
                >
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            value={amountTo}
            type="number"
            id="standard-basic"
            onChange={(e) => handleAmountToChange(e.target.value)}
            label="amount"
            variant="standard"
          />
        </Box>
      </div>
    </Box>
  );
}

export default ExchangeRate;
