import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header';

const theme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#ffcb74',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#272727',
      paper: '#363636',
    },
    divider: '#ffcb74',
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    subtitle2: {
      fontWeight: 500,
    },
    overline: {
      fontSize: '1rem',
    },
    h6: {
      fontWeight: 600,
    },
    h1: {
      fontWeight: 400,
    },
    caption: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 600,
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline enableColorScheme/>
      <Header />
    </ThemeProvider>
  );
}

export default App;
