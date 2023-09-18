import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';

import App from './App';

const theme = responsiveFontSizes(createTheme({
  palette: {
    // primary: {
      // main: '#adb31b',
    // },
  },
  shape: {
    borderRadius: 20,
  },
}));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
