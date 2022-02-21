import React from 'react';
import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';
import CurrencyItem from './CurrencyItem/CurrencyItem';

function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Exchange rate
            </Typography>
            <Box sx={{
              flexGrow: 1,
              display: 'flex',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            }}
            >
              <CurrencyItem title="EUR" />
              <CurrencyItem title="USD" />
              <CurrencyItem title="PLN" />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
