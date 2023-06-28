import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(0, 0%, 59%)',
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
      'Sans Serif',
      'Arial',
    ].join(','),
    color: 'hsl(0, 0%, 17%)',
  },
})

export default theme