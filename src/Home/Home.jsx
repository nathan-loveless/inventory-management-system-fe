import React from "react";
import { menuStyles } from "../materialui/styles/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";

const Home = () => {
  const classes = menuStyles();

  return (
    <div>
      <AppBar position="static" className={classes.menuBar}>
        <Toolbar>
          <Button variant="contained" className={classes.standardButton}>
            Login
          </Button>
          <Button variant="contained" className={classes.standardButton}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Home;
