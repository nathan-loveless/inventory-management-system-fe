import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { activeUsersStyles } from "../../../materialui/styles/activeUsersStyles";
import IconButton from "@material-ui/core/IconButton";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PortalToolbar from "../PortalToolbar";

const DisplayUsers = props => {
  const classes = activeUsersStyles();

  return (
    <div className={classes.root}>
      {props.users.map(users =>
        users.map(user => (
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs className={classes.gridItem}>
              {user.firstName}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {user.lastName}
            </Grid>
            <Grid item xs={3} className={classes.gridItem}>
              {user.address}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {user.city}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {user.state}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {user.zipcode}
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
              {user.email}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {user.status}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {user.role}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              <IconButton aria-label="open-in-browser">
                <OpenInBrowserIcon />
              </IconButton>
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete-forever">
                <DeleteForeverIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))
      )}
    </div>
  );
};

export default DisplayUsers;
