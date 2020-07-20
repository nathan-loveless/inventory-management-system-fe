import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sharedStyles } from "../materialui/styles/sharedStyles";
import { registrationSuccessStyles } from "../materialui/styles/registrationSuccessStyles";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const RegSuccessful = props => {
  const classes = sharedStyles();
  const successClasses = registrationSuccessStyles();

  console.log("NL: RegSuccessful: props.message: ", props.message);
  return (
    <div className={classes.root}>
      <div className={classes.registerSuccess}>
        <Grid container component="main" className={successClasses.root}>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            className={successClasses.messageContainer}
          >
            <h2 className={successClasses.h2}>{props.message}</h2>
            You have successfully registered. Your adminstrator will contact
            your when you account is ready to logon.
            <Grid item xs={12} className={successClasses.buttonContainer}>
              <Button
                variant="contained"
                component={Link}
                to="/"
                className={successClasses.button}
              >
                Go to Home
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/login"
                className={successClasses.button}
              >
                Go to Login Page
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps, {})(RegSuccessful);
