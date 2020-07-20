import { makeStyles } from "@material-ui/core/styles";

export const registrationSuccessStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    height: "25vh",
    display: "flex",
    justifyContent: "center"
  },
  messageContainer: {
    background: "#e6fff2",
    color: "#006631",
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
    background: "#e6fff2",
    color: "black",
    margin: "5px",
    border: "none",
    boxShadow: "none",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#80ffbf"
    }
  }
}));
