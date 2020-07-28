import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle, Grid, DialogContent } from "@material-ui/core";
import { openDialogStyles } from "../../../materialui/styles/openDialogStyles";
import Divider from "@material-ui/core/Divider";

const OpenDialog = props => {
  const classes = openDialogStyles();

  const handleOpenClosed = () => {
    props.handleOpenClicked();
  };

  console.log(props.inventory);

  return (
    <Dialog
      onClose={handleOpenClosed}
      aria-labelledby="open-dialog-title"
      open={props.openClicked}
    >
      <DialogContent className={classes.dialogMain}>
        <DialogTitle id="open-dialog-title" className={classes.dialogTitle}>
          Inventory Details - Read Only
        </DialogTitle>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={5} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Name</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.inventory.name}</div>
          </Grid>
          <Grid item xs={5} className={classes.gridItem}>
            <div className={classes.sectionHeader}>SKU</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.inventory.sku}</div>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Supplier</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>
              {props.inventory.supplier}
            </div>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Price</div>
            <Divider className={classes.divider}></Divider>
            <div
              className={classes.sectionBody}
            >{`$${props.inventory.price}`}</div>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <div className={classes.sectionHeader}>In Stock</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.inventory.inStock}</div>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <div className={classes.sectionHeader}>Status</div>
            <Divider className={classes.divider}></Divider>
            <div className={classes.sectionBody}>{props.inventory.status}</div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default OpenDialog;
