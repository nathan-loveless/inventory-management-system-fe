import { makeStyles } from "@material-ui/core/styles";

export const sharedStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light
  },
  menuBar: {
    backgroundColor: theme.palette.primary.main
  },
  toolBar: {
    display: "flex",
    justifyContent: "flex-end"
  },
  standardButton: {
    backgroundColor: theme.palette.primary.light,

    fontWeight: "bold",
    margin: "5px"
  }
}));
