import { makeStyles } from "@material-ui/core/styles";

export const portalStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    height: "100vh",
    display: "flex"
  }
}));
