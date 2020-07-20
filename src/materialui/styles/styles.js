import { makeStyles } from "@material-ui/core/styles";

export const menuStyles = makeStyles(theme => ({
  menuBar: {
    background: theme.palette.secondary.main
  },
  standardButton: {
    background: theme.palette.primary.light,
    color: "white",
    fontWeight: "bold",
    margin: "10px"
  }
}));
