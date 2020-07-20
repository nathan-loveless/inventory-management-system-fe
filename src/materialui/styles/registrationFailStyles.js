import { makeStyles } from "@material-ui/core/styles";

export const registrationFailStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    height: "25vh",
    display: "flex",
    justifyContent: "center"
  },
  messageContainer: {
    background: "#ffe6e6",
    color: "#990000",
    fontWeight: "bold",
    padding: "10px",
    marginTop: "5px"
  },

  h2: {
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    background: "#ffe6e6",
    color: "black",
    margin: "10px 5px 5px 5px",
    border: "none",
    boxShadow: "none",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#ffb3b3"
    }
  }
}));
