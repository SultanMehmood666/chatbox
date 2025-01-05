import { createTheme,  } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000', // Dark background
    },
    text: {
      primary: '#000000', // White text
    },
  },
});

export default darkTheme;