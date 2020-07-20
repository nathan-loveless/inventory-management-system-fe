import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import { sharedStyles } from "../materialui/styles/sharedStyles";

const Header = () => {
  const classes = sharedStyles();
  return (
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
  );
};

export default Header;
