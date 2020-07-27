import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { DialogTitle, Grid, DialogContent } from "@material-ui/core";
import { deleteDialogStyles } from "../../../materialui/styles/deleteDialogStyles";
import Divider from "@material-ui/core/Divider";

const DeleteDialog = props => {
  const classes = deleteDialogStyles();

  const handleDeleteClosed = () => {
    props.handleDeleteClicked();
  };

  const submitDelete = e => {
    e.preventDefault();
    props.submitDelete(props.inventory.id);
  };

  return (
    <Dialog
      onClose={handleDeleteClosed}
      aria-labelledby="delete-dialog-title"
      open={props.deleteClicked}
    >
      <DialogContent className={classes.dialogMain}>
        <DialogTitle id="delete-dialog-title" className={classes.dialogTitle}>
          Confirm Delete User?
        </DialogTitle>
        <Grid container component="main" className={classes.grid}>
          <Grid item xs={12} elevation={6} square className={classes.gridItem}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={submitDelete}
              className={classes.submit}
            >
              Yes
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleDeleteClosed}
              className={classes.submit}
            >
              No
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
