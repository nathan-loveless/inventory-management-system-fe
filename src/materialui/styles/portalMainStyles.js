import { makeStyles } from "@material-ui/core/styles";

export const portalMainStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.light,
    height: "99vh",
    width: "100vh",
    margin: "5px 4px 0px 0px",
    padding: "4px 4px 0px 4px",
    boxSizing: "border-box",
    border: "1px solid grey"
  }
}));
