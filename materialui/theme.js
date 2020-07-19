import { createMuiTheme } from "@material-ui/core/styles";

const primaryLight = "#ddebee";
const primaryMain = "#75b0bd";
const primaryDark = "#325d67";

const secondaryLight = "#f5e6d6";
const secondaryMain = "#d79b5b";
const secondaryDark = "#7b4e1e";

export default createMuiTheme({
  palette: {
    primary: {
      light: `${primaryLight}`,
      main: `${primaryMain}`,
      dark: `${primaryDark}`
    },
    secondary: {
      light: `${secondaryLight}`,
      main: `${secondaryMain}`,
      dark: `${secondaryDark}`
    }
  }
});
