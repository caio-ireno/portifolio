import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import theme from './utils/Theme';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
