import { makeStyles } from "@material-ui/core/styles";

export const sharedStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.light,
    height: "auto"
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
  },
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
  gridItem: {
    border: "2px solid lightgray",
    borderRadius: "5px",
    margin: "2px 2px 2px 2px"
  },
  sectionHeader: {
    textAlign: "center",
    background: theme.palette.secondary.main,
    padding: "5px 5px 5px 5px",
    fontWeight: "bold"
  },
  sectionBody: {
    textAlign: "center",
    background: theme.palette.primary.light,
    padding: "5px 5px 5px 5px"
  },
  divider: {
    background: theme.palette.primary.dark,
    height: "2px"
  }
}));
