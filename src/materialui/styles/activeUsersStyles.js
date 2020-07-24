import { makeStyles } from "@material-ui/core/styles";

export const activeUsersStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#c3c5ef",
    width: "100%",
    alignContent: "flex-start",
    alignItems: "center",
    border: "1px solid gray",
    boxSizing: "border-box",
    padding: theme.spacing.unit
  },
  gridItem: {
    backgroundColor: "#c3c5ef",
    display: "flex",
    flexDirection: "row"
  }
}));
