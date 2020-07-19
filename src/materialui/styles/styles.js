import { makeStyles } from "@material-ui/core/styles";

export const menuStyles = makeStyles(theme => ({
  menuBar: {
    backgroundColor: "black"
    //backgroundColor: theme.palette.secondary.main
  },
  standardButton: {
    //backgroundColor: theme.palette.primary.light,
    color: "white",
    fontWeight: "bold",
    margin: "10px"
  }
}));
