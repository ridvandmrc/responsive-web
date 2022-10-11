import { createTheme } from '@mui/material'

export const defaultTheme = createTheme({
  breakpoints: {
    // these are default value for breakpoints
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: { main: '#5a2f27', '100': '#f6b219', '200': '#b3b1a6' },
    background: { paper: '#ffffff', default: '#eae9e4' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
          fontWeight: 'bold',
          borderRadius: '35px',
        },
      },
    },
  },
})
