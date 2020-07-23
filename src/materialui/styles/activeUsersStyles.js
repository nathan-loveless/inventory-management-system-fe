import { makeStyles } from "@material-ui/core/styles";

export const activeUsersStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.light,
    height: "100vh",
    //width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingRight: "5px"
  },
  grid: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#c3c5ef",
    width: "100%",
    marginTop: "5px",
    alignContent: "flex-start",
    alignItems: "center",
    borderTop: "1px solid gray",
    boxSizing: "border-box",
    marginLeft: "5px"
  },
  gridItem: {
    marginTop: "5px",
    backgroundColor: "#c3c5ef",
    display: "flex",
    flexDirection: "row"
  }
}));
