import { fade, makeStyles } from "@material-ui/core/styles";

export const administrationStyles = makeStyles(theme => ({
  menuBarMain: {
    margin: "5px 5px 5px 5px"
  },
  menuBar: {
    background: "#dcd0a3",
    display: "flex",
    flexDirection: "row"
  },
  tabBar: { width: "100%" },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  grid: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    height: "100%",
    boxSizing: "border-box",
    marginTop: "5px"
  },

  searchGrid: {
    flexDirection: "row"
  },
  submit: {
    background: theme.palette.primary.light,
    margin: theme.spacing(0, 0, 2)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sortButton: {
    background: theme.palette.primary.light,
    borderRadius: "10px",
    margin: "5px"
  }
}));
