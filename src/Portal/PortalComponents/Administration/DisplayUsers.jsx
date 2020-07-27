import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { activeUsersStyles } from "../../../materialui/styles/activeUsersStyles";
import PortalToolbar from "../PortalToolbar";
import EditingButtons from "./EditingButtons";
import filteredUsers from "../../../utils/filterUsers";

const DisplayUsers = props => {
  const classes = activeUsersStyles();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    setAllUsers([
      filteredUsers(
        props.users,
        props.value,
        props.sortedData,
        props.searchData
      )
    ]);
  }, [props.value, props.users, props.sortedData, props.searchData]);

  return (
    <>
      {allUsers.map(users =>
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
            <EditingButtons
              user={user}
              submitEditedData={props.submitEditedData}
              submitDelete={props.submitDelete}
            />
          </Grid>
        ))
      )}
    </>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, {})(DisplayUsers);
