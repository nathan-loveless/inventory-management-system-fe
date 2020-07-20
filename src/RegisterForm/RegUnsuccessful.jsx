import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sharedStyles } from "../materialui/styles/sharedStyles";
import { registrationFailStyles } from "../materialui/styles/registrationFailStyles";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const RegUnsuccessful = props => {
  const classes = sharedStyles();
  const failClasses = registrationFailStyles();

  return (
    <div className={classes.root}>
      <div className={classes.registerSuccess}>
        <Grid container component="main" className={failClasses.root}>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            className={failClasses.messageContainer}
          >
            <h2 className={failClasses.h2}>Registration Failed</h2>
            Something went wrong with the registration process. Generally, this
            means you have already registered but not approved yet. Please
            contact you System Administrator.
            <Grid item xs={12} className={failClasses.buttonContainer}>
              <Button
                variant="contained"
                component={Link}
                to="/"
                className={failClasses.button}
              >
                Go to Home
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/login"
                className={failClasses.button}
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

export default connect(mapStateToProps, {})(RegUnsuccessful);
