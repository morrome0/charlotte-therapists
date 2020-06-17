import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#56A296',
    },
    error: {
      main: red.A400,
    },
    textSecondary: {
      main: '#000'
    },
  },
  typography: {
    fontFamily: [
      'PT Serif',
      'Serif'
    ],
    h1: {

    },
    h2: {
      fontSize: 28,
      fontFamily: "PT Serif"
    },
    h3: {

    },
    h4: {
      fontFamily: "Raleway",
      fontSize: 14,
      fontWeight: "500",
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: 14,
      fontWeight: "500",
    },
    button: {
      fontFamily: "Raleway",
      textTransform: "none"
    },
    body1: {
      fontSize: 16,
      fontFamily: "PT Serif"
    },
    body2: {
      fontSize: 13,
      fontFamily: "PT Serif",
    }
  }
});

export default theme;
