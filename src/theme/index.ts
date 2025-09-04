import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1f6feb',
    },
    secondary: {
      main: '#238636',
    },
    background: {
      default: '#0d1117',
      paper: '#161b22',
    },
    text: {
      primary: '#c9d1d9',
      secondary: '#8b949e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})
