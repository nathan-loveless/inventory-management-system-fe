import { makeStyles } from "@material-ui/core/styles";

export const deleteDialogStyles = makeStyles(theme => ({
  dialogMain: {
    background: theme.palette.secondary.light
  },
  dialogTitle: {
    textAlign: "center"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box"
  },
  gridItem: {},
  submit: {
    background: theme.palette.primary.light,
    margin: theme.spacing(0, 0, 2)
  }
}));
