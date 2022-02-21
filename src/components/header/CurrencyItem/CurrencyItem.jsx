import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function format(number) {
  return number.toFixed(2);
}

// eslint-disable-next-line react/prop-types
function CurrencyItem({ title }) {
  const rates = useSelector((state) => state.exchangeRate.rates);
  return (
    <Box sx={{ marginLeft: '30px' }}>
      <Typography component="span">
        {title}
      </Typography>
      <Typography component="span" sx={{ mr: '5px', ml: '5px' }}>
        =
      </Typography>
      <Typography component="span">
        {format(rates.EUR * rates.UAH / rates[title])}
      </Typography>
    </Box>
  );
}

export default CurrencyItem;
