import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  spacing: 8,

  palette: {
    primary: {
      main: '#55828b',
      light: '#E0ECF5'
    },
    secondary: {
      main: '#55828b',
    },
    warning: {
      main: '#FFAD0A',
    },
    error: {
      main: "#DB3A34",
    },
    success: {
      main: "#A0CA92"
    },
    textPrimary: {

    },
    textSecondary: {
      main: '#000'
    },
  },

  fontFamily: {
    primary: ["Source Sans Pro", "Sans"],
    secondary: ["Raleway", "Sans"],
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
      fontFamily: "Source Sans Pro",
      fontWeight:"500"
    },
    h3: {

    },
    h4: {
      fontFamily: "Source Sans Pro",
      fontSize: 13,
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
      fontFamily: "Source Sans Pro"
    },
    body2: {
      fontSize: 14,
      fontFamily: "Source Sans Pro",
    }
  }
});

export default theme;
