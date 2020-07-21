import { makeStyles } from "@material-ui/core/styles";

export const activeUsersStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.light,
    height: "100vh",
    width: "100%",
    display: "flex"
  }
}));
