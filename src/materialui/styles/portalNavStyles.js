import { makeStyles } from "@material-ui/core/styles";

export const portalNavStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    height: "99vh",
    width: "30vh",
    margin: "5px 5px 0px 2px",
    padding: "4px 4px 0px 4px",
    boxSizing: "border-box",
    border: "1px solid grey"
  },
  button: {
    width: "100%",
    background: theme.palette.primary.light,
    color: "black",
    border: "1px solid lightgrey",
    fontWeight: "bold",
    boxShadow: "none",
    "&:hover": {
      background: theme.palette.primary.dark,
      color: "white"
    },
    "&:active": {
      backgroundColor: theme.palette.primary.dark,
      color: "white"
    },

    "&:focus": {
      backgroundColor: theme.palette.primary.dark,
      color: "white"
    }
  }
}));
