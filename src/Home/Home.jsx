import React from "react";
import { sharedStyles } from "../materialui/styles/sharedStyles";

const Home = () => {
  const classes = sharedStyles();

  return (
    <div className={classes.root}>
      Welcome to the homepage! This area is not currently styled, it will be
      styled last. You can login or register. Registration requires approval,
      which is not setup yet. You can't really even login yet as this is
      currently just a shell. Thanks for visiting hopefully you will see
      something here soon!
    </div>
  );
};

export default Home;
