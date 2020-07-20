import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import { sharedStyles } from "../materialui/styles/sharedStyles";

const Home = () => {
  const classes = sharedStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menuBar}>
        <Toolbar className={classes.toolBar}>
          <Button
            variant="contained"
            component={Link}
            to="/login"
            className={classes.standardButton}
          >
            Login
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/register"
            className={classes.standardButton}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
      Welcome to the homepage! This area is not currently styled, it will be
      styled last. You can login or register. Registration requires approval,
      which is not setup yet. You can't really even login yet as this is
      currently just a shell. Thanks for visiting hopefully you will see
      something here soon!
    </div>
  );
};

export default Home;
