import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { activeUsersStyles } from "../../../materialui/styles/activeUsersStyles";
import PortalToolbar from "../PortalToolbar";
import EditingButtons from "./EditingButtons";

const DisplayUsers = props => {
  //const [openClicked, setOpenClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);

  const classes = activeUsersStyles();

  // const handleOpenClicked = () => {
  //   setOpenClicked(!openClicked);
  // };

  const handleEditClicked = () => {
    setEditClicked(!editClicked);
  };

  const handleDeleteClicked = () => {
    setDeleteClicked(!deleteClicked);
  };

  return (
    <>
      {props.users.map(users =>
        users.map(user => (
          <Grid container spacing={0} className={classes.grid}>
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
            <EditingButtons user={user} />
          </Grid>
        ))
      )}
    </>
  );
};

export default DisplayUsers;
