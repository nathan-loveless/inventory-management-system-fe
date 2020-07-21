import React from "react";
import { Grid } from "@material-ui/core";
import { activeUsersStyles } from "../../../materialui/styles/activeUsersStyles";
import PortalToolbar from "../PortalToolbar";

const ActiveUsers = () => {
  const classes = activeUsersStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}></Grid>
      You are in the active users area now!
      <PortalToolbar />
    </div>
  );
};

export default ActiveUsers;
