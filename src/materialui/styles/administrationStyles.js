import { makeStyles } from "@material-ui/core/styles";

export const administrationStyles = makeStyles(theme => ({
  menuBar: {
    background: theme.palette.secondary.light,
    height: "100vh",
    width: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  menuBar: {
    marginBottom: "5px"
  },
  tabPanel: {
    paddingTop: "5px"
  },
  tabContainer: {
    paddingTop: "5px",
    backgroundColor: theme.palette.primary.light
  }
}));
