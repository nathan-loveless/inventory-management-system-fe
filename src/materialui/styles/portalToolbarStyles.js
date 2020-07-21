import { makeStyles } from "@material-ui/core/styles";

export const portalToolbarStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.light,
    height: "100vh"
  },
  menuBar: {
    background: theme.palette.primary.main
  },
  toolBar: {
    display: "flex",
    justifyContent: "flex-end"
  },
  standardButton: {
    background: theme.palette.primary.light,

    fontWeight: "bold",
    margin: "5px"
  }
}));
