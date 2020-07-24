import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle, Grid, DialogContent } from "@material-ui/core";
import { openDialogStyles } from "../../../materialui/styles/openDialogStyles";
import Divider from "@material-ui/core/Divider";

const OpenDialog = props => {
  const classes = openDialogStyles();

  const handleOpenClosed = () => {
    //setOpenClicked(false);
    props.handleOpenClicked();
  };

  return (
    <Dialog
      onClose={handleOpenClosed}
      aria-labelledby="open-dialog-title"
      open={props.openClicked}
    >
      <DialogContent className={classes.dialogMain}>
        <DialogTitle id="open-dialog-title">
          User Details - Read Only
        </DialogTitle>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={5} className={classes.gridItem}>
            <div className={classes.sectionHeader}>First Name</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.user.firstName}</div>
          </Grid>
          <Grid item xs={5} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Last Name</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.user.lastName}</div>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Address</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.user.address}</div>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <div className={classes.sectionHeader}>City</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.user.city}</div>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <div className={classes.sectionHeader}>State</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.user.state}</div>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Zip Code</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.user.zipcode}</div>
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Email</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.user.email}</div>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Status</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.user.status}</div>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Role</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.user.role}</div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default OpenDialog;
